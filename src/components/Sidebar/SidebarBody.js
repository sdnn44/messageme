import React, { useContext, useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styled from "styled-components";
import { Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SidebarChatElement } from "./SidebarChatElement";
import db from "../../services/firebase";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { AddNewChat } from "../FormElements/AddNewChatForm";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useDispatch, useSelector } from "react-redux";
import { clearMessageInput } from "../../services/redux/modal/modalSlice";
import Scrollbars from "react-custom-scrollbars";

const Wrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  // height: 160px;
  // // flex: 1;
  // overflow-y: auto;
  // // padding: 1rem;
  // background: red;
  height: 100%;
  // justify-content: center;
  // align-items: center;
`;

const Search = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
// justify-content: right;
width: 90%;
background-color: rgb(31,38,49);
border-radius: 50px; 

input {
  border: none;
  outline: none;
  background-color: rgb(31,38,49);
  color: #fff;
}

svg {
  padding .5rem;
  color: rgb(1, 86, 189);
}
`;

const ChatWrapper = styled.div`
  flex: 1;
  // background: rgb(1, 86, 189);
  max-height: 83vh;
  // border: 1px solid blue;
`;

export const SidebarBody = () => {
  const theme = useTheme();
  const style = {
    mt: 2,
    width: "90%",
    maxWidth: 360,
    bgcolor: theme.palette.primary.main,
  };

  // willbedeletedsoon
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);
  const { currUser } = useContext(AuthContext);
  const { data, dispatch } = useContext(ChatContext);

  const { clearInput } = useSelector((state) => state.modal);
  const _dispatch = useDispatch();

  useEffect(() => {
    const getUserContacts = async () => {
      const unsubscribe = await onSnapshot(
        doc(db, "userContacts", currUser.uid),
        (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.data();
            const orderedData = Object.keys(data)
              .sort((a, b) => {
                return data[b].date - data[a].date;
              })
              .map((key) => data[key]);
            setContacts(orderedData);
          }
        }
      );
      return () => {
        unsubscribe();
      };
    };
    currUser.uid && getUserContacts();
  }, [currUser.uid]);

  const handleSelect = async (userInformation, message, date) => {
    const chatData = {
      user: userInformation,
      lastMessage: message,
      lastTimestamp: date,
    };

    console.log(`chatData: ` + chatData);

    dispatch({ type: "UPDATE_CHAT", payload: { chatData } });

    //do zmiany generalnie
    _dispatch(clearMessageInput());
    clearNumberOfReads(userInformation, message);
  };

  const clearNumberOfReads = async (userInformation, message) => {
    const combineId =
      currUser.uid < userInformation.uid
        ? userInformation.uid + currUser.uid
        : currUser.uid + userInformation.uid;

    if (message?.unread > 0) {
      const docRef = doc(db, "userContacts", currUser.uid);
      try {
        console.log(`combineId: ` + data.combineId);
        await updateDoc(docRef, {
          [combineId + ".lastMessage.unread"]: 0,
        });
        console.log("Document updated successfully.");
      } catch (error) {
        console.error("Error updating document:", error);
      }
    }
  };

  return (
    /*Szukaj divider przypięty all chats */
    <>
      <Wrapper>
        <Search>
          {/* <Input icon={<SearchOutlinedIcon />}>
      </Input> */}
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="Wyszukaj czat..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>
        <Divider sx={style} variant="middle" />
        <Scrollbars style={{height: 770}}>
          <ChatWrapper>
            {console.log(`SidebarBodyRender ` + contacts)}
            <SidebarChatElement newChat />
            {Object.entries(contacts)
              // ?.sort((a,b) => b[1].date - a[1].date)
              .filter((contact) => {
                return search.toLowerCase() === ""
                  ? contact
                  : contact[1].userInformation.displayName
                      .toLowerCase()
                      .includes(search.toLowerCase());
              })
              .map((contact) => (
                <div
                  onClick={() =>
                    handleSelect(
                      contact[1].userInformation,
                      contact[1].lastMessage,
                      contact[1].date
                    )
                  }
                  key={contact[0]}
                >
                  <SidebarChatElement
                    key={contact[0]}
                    id={contact[1].userInformation.uid}
                    timestamp={contact[1].date}
                    name={contact[1].userInformation.displayName}
                    avatar={contact[1].userInformation.photoURL}
                    lastMessage={contact[1].lastMessage?.messageText}
                    unreadCount={contact[1].lastMessage?.unread}
                  />
                </div>
              ))}
          </ChatWrapper>
        </Scrollbars>
      </Wrapper>
    </>
  );
};
