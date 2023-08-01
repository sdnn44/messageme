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
import { NavLink } from "react-router-dom";
import { AddNewChat } from "../ChatElements/NewChat/AddNewChatForm";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../services/redux/modal/modalSlice";

const Chats = styled.div`
  display: flex;
  padding: 0.2rem 0.6rem;
  margin: 0.6rem;
  border-radius: 15px;
  cursor: pointer;
  background: rgb(31, 38, 49);
  align-items: center;

  :hover {
    background: #454f5f;
    transition: 0.3s ease;
  }

  h2 {
    font-size: 1rem;
  }
`;
const ChatInfo = styled.div`
  margin: 0 auto 2px 8px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .nameMessage {
    h2 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  .unreadTimestamp {
    display: flex;
    flex-direction: column;
    // justify-content: flex-end;
    span {
      background: rgb(1, 86, 189);
      border: 1px solid rgb(31, 38, 49);
      border-radius: 50px;
      display: flex;
      justify-content: center;
      font-size: 0.8rem;
      padding: 0.4rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
const Wrapper = styled.div`
  // display: flex;
  // width: 100%;
  div.is-active {
    background: rgb(1, 86, 189) !important;
  }
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

export const SidebarChatElement = ({
  id,
  timestamp,
  name,
  avatar,
  lastMessage,
  unreadCount,
  newChat,
}) => {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
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
    } catch (err) {
      console.log(err);
    }
  };

  return !newChat ? (
    <Wrapper>
      <NavLink
        to={`/contacts/${id}`}
        style={{ textDecoration: "none", color: "#fff" }}
      >
        {({ isActive, isPending }) => (
          <Chats className={isActive ? "is-active" : ""}>
            <Avatar src={avatar} />
            <ChatInfo>
              <div className="nameMessage">
                <h2> {name} </h2>
                <p>
                  {lastMessage?.length > 25
                    ? `${lastMessage?.slice(0, 22)}...`
                    : lastMessage}
                </p>
              </div>
              <div className="unreadTimestamp">
                <p>
                  {" "}
                  {timestamp
                    ?.toDate()
                    .toLocaleDateString("pl-PL", { weekday: "short" })}{" "}
                  {timestamp
                    ?.toDate()
                    .toLocaleTimeString("pl-PL", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                </p>
                {unreadCount > 0 && <span> {unreadCount} </span>}
              </div>
            </ChatInfo>
          </Chats>
        )}
      </NavLink>
    </Wrapper>
  ) : (
    <>
      <Chats
        onClick={() => {
          dispatch(openModal());
        }}
      >
        <div className="addButton">
          <CustomizedIcons sx={{ color: "#fff" }}>
            <AddCommentOutlinedIcon />
          </CustomizedIcons>
        </div>
        <h2>Stwórz nowy czat</h2>
      </Chats>
      {isOpen && <AddNewChat />}
    </>
  );
};
