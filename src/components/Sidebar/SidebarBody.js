import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styled from "styled-components";
import { Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SidebarChatElement } from "./SidebarChatElement";
import db from "../../services/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { AddNewChat } from "../FormElements/AddNewChatForm";

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

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'contacts'), (snapshot) =>
      setContacts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);


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
          {/*LOADER WHILE FETCH FROM DB*/}
          <SidebarChatElement newChat />
          {contacts.map((contact) => (
            <SidebarChatElement
              key={contact.id}
              id={contact.id}
              name={contact.data.name}
            />
          ))}
        </ChatWrapper>
      </Wrapper>
    </>
  );
};
