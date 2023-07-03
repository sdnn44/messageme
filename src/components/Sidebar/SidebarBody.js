import React, { useContext, useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styled from "styled-components";
import { Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SidebarChatElement } from "./SidebarChatElement";
import db from "../../services/firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { AddNewChat } from "../FormElements/AddNewChatForm";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useDispatch, useSelector } from "react-redux";
import { clearMessageInput } from "../../services/redux/modal/modalSlice";

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
  overflow-y: auto;
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
  const { currUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const { clearInput } = useSelector((state) => state.modal);
  const _dispatch = useDispatch();

  useEffect(() => {
    const getUserContacts = () => {
      console.log(`getUserContactsDone`);
      const unsubscribe = onSnapshot(
        doc(db, "userContacts", currUser.uid),
        (snapshot) => {
          setContacts(snapshot.data());
          console.log(`Check if contacts was added ` + contacts);
          console.log(snapshot.data());
        }
      );

      return () => {
        unsubscribe();
      };
    };
    currUser.uid && getUserContacts();
  }, [currUser.uid]);

  const handleSelect = (userInformation) => {
    dispatch({ type: "CHANGE_CONTACT", payload: userInformation });
    _dispatch(clearMessageInput());
    console.log(`Clicked handle select`);
  };
  return (
    /*Szukaj divider przypięty all chats */
    <>
      <Wrapper>
        <Search>
          {/* <Input icon={<SearchOutlinedIcon />}>
      </Input> */}
          <SearchOutlinedIcon />
          <input type="text" placeholder="Wyszukaj czat..." />
        </Search>
        <Divider sx={style} variant="middle" />

        <ChatWrapper>
          {console.log(`SidebarBodyRender ` + contacts)}
          <SidebarChatElement newChat />
          {Object.entries(contacts)?.sort((a,b) => b[1].date - a[1].date).map((contact) => (
            <div onClick={() => handleSelect(contact[1].userInformation)} key={contact[0]}>
              <SidebarChatElement
                key={contact[0]}
                id={contact[1].userInformation.uid}
                name={contact[1].userInformation.displayName}
                avatar={contact[1].userInformation.photoURL}
                lastMessage={contact[1].lastMessage?.messageText}
              />
            </div>
          ))}
        </ChatWrapper>
      </Wrapper>
    </>
  );
};
