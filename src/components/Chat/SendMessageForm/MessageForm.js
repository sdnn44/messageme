import React, { useContext, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import MicNoneIcon from "@mui/icons-material/MicNone";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import styled from "styled-components";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import db, { storage } from "../../../services/firebase";
import { ChatContext } from "../../../context/ChatContext";
import { AuthContext } from "../../../context/AuthContext";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;

  svg {
    color: #fff;
    padding: 0.2rem;
  }

  svg:hover {
    color: rgb(1, 86, 189);
    transition: 1s ease;
  }

  form {
    flex: 1;
    display: flex;
  }

  input {
    color: #fff;
    flex: 1;
    background-color: rgb(28, 33, 40);
    border: none;
    border-radius: 10px 10px 0 0;
    padding: 1rem;
  }
`;

const MessageForm = () => {
  //will be deleted soon
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    setMessage("");
  };

  const [messageText, setMessageText] = useState("");
  const [messageImg, setMessageImg] = useState("");

  const { data } = useContext(ChatContext);
  const { currUser } = useContext(AuthContext);


  const clearInput = () => {
    setMessageText("");
    setMessageImg(null);
  };

  useEffect(() => {
    clearInput();
  }, [data.user?.uid]);
  
  const handleSend = async () => {
    if (messageImg) {
      const storageRef = ref(storage, uuidv4());
      const uploadTask = uploadBytesResumable(storageRef, messageImg);

      await uploadBytesResumable(storageRef, messageImg).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuidv4(),
                messageText,
                senderId: currUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          } catch (err) {
            console.log(err);
          }
        });
      });
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuidv4(),
          messageText,
          senderId: currUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userContacts", currUser.uid), {
      [data.chatId + ".lastMessage"]: {
        messageText,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userContacts", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        messageText,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    clearInput();
  };

  return (
    <Wrapper>
      <Tooltip title="Wyślij nagranie głosowe" placement="top">
        <IconButton
        // onClick={() => )}
        >
          <MicNoneIcon />
        </IconButton>
      </Tooltip>
      <form>
        <input
          type="text"
          // value={ messageImg? <img src={messageImg} /> : messageText }
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Napisz wiadomość"
        />
        <button onClick={sendMessage} type="submit" style={{ display: "none" }}>
          Wyślij wiadomość
        </button>
        <Tooltip title="Wybierz ikonę emoji" placement="top">
          <IconButton
          // onClick={() => )}
          >
            <AddReactionOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Załącz plik" placement="top">
          <label htmlFor="file">
            <IconButton component="span">
              <AttachFileIcon />
            </IconButton>
          </label>
        </Tooltip>
        <input
          required
          style={{ display: "none" }}
          type="file"
          id="file"
          onChange={(e) => setMessageImg(e.target.files[0])}
        />
      </form>
      <Tooltip title="Wyślij wiadomość" placement="top">
        <IconButton
          type="submit"
          onClick={handleSend}
          // onClick={() => )}
        >
          <SendRoundedIcon />
        </IconButton>
      </Tooltip>
    </Wrapper>
  );
};
export default MessageForm;
