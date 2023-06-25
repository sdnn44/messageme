import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import styled from "styled-components";
import {
  collection,
  addDoc,
  query,
  where,
  getDoc,
  getDocs,
} from "firebase/firestore";
import db from "../../services/firebase";
import { Link } from "react-router-dom";

const Chats = styled.div`
  display: flex;
  padding: 0.2rem 0.6rem;
  margin: 0.8rem;
  border-radius: 15px;
  cursor: pointer;
  background: rgb(31, 38, 49);
  align-items: center;
  :hover {
    background: #454f5f;
    transition: 0.3s ease;
  }
  // .is-active > div {

  //   background-color: theme.palette.primary.main;

  // }
  h2 {
    font-size: 1rem;
  }
`;
const ChatInfo = styled.div`
  margin: 0 auto 2px 8px;
  h2 {
    font-size: 0.9rem;
  }
  p {
    font-size: 0.9rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CustomizedIcons = styled(IconButton)`
  .MuiSvgIcon-root {
    margin-right: 1rem;
    font-size: 1.5rem !important;
  }
`;
const createChat = async () => {
  const contactName = prompt("Podaj nazwę czatu");
  if (contactName) {
    await addDoc(collection(db, "contacts"), {
      name: contactName,
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
  // setUpdateType('newChat');
  // dispatch(toggleUpdateUserData());
};

export const SidebarChatElement = ({ id, name, newChat }) => {
  const [newContactUsername, setNewContactUsername] = useState("");
  const [foundUser, setFoundUser] = useState(null);

  const handleNewChat = async () => {
    const contactName = prompt("Podaj nazwę czatu");
    if (contactName) {
      setNewContactUsername(contactName);
      console.log(`username: ` + newContactUsername);
    }
    const q = query(
      collection(db, "users"),
      where("displayName", "==", newContactUsername)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setFoundUser(doc.data());
      });
      console.log(`dodano` + foundUser);
    } catch(err) {console.log(err)}
  };

  return !newChat ? (
    <Link to={`/contacts/${id}`}>
      <Chats>
        <Avatar />
        <ChatInfo>
          {name}
          <p>Last message from other users..</p>
        </ChatInfo>
      </Chats>
    </Link>
  ) : (
    <><Chats onClick={handleNewChat}>
        <div className="addButton">
          <CustomizedIcons sx={{ color: "#fff" }}>
            <AddCommentOutlinedIcon />
          </CustomizedIcons>
        </div>
        <h2>Stwórz nowy czat</h2>
      </Chats><div>{foundUser && <Chats><Avatar src={foundUser.photoURL} /><ChatInfo>{foundUser.displayName}</ChatInfo></Chats>}</div></>

  );
};
