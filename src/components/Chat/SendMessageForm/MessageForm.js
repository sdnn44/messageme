import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import MicNoneIcon from "@mui/icons-material/MicNone";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;

  svg {
    color: #fff;
    padding: .2rem;
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
  }

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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Napisz wiadomość"
        />
        <button onClick={sendMessage} type="submit" style={{display: "none"}}>Wyślij wiadomość</button>
        <Tooltip title="Wybierz ikonę emoji" placement="top">
          <IconButton
          // onClick={() => )}
          >
            <AddReactionOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Załącz plik" placement="top">
          <IconButton
          // onClick={() => )}
          >
            <AttachFileIcon />
          </IconButton>
        </Tooltip>
      </form>
      <Tooltip title="Wyślij wiadomość" placement="top">
        <IconButton
          type='submit'
          onClick={sendMessage}
        // onClick={() => )}
        >
          <SendRoundedIcon />
        </IconButton>
      </Tooltip>
    </Wrapper>
  );
};
export default MessageForm;
