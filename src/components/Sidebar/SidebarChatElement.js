import React from 'react'
import { Avatar, IconButton } from '@mui/material'
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import styled from "styled-components";

const Chats = styled.div`
display: flex;
padding: .2rem .6rem;
margin: .8rem;
border-radius: 15px;
cursor: pointer;
background: rgb(31,38,49);
align-items: center;
  :hover {
    background: #454F5F;
    transition: .3s ease;
  }
  // .is-active > div {

  //   background-color: theme.palette.primary.main;

  // }
  h2 {
    font-size: 1rem;
  }
`
const ChatInfo = styled.div`
  margin: 0 auto 2px 8px;
  h2 {
    font-size: .9rem;
  }
  p {
    font-size: .9rem;
  }
`
const Wrapper = styled.div`
display: flex;
align-items: center;
`

const CustomizedIcons = styled(IconButton)`
  .MuiSvgIcon-root {
    margin-right: 1rem;
    font-size: 1.5rem !important;
  }
`
const createChat = () => {
  const roomName = prompt("Podaj nazwę czatu");
  if(roomName) {
    // addToDB
  }
  // setUpdateType('newChat');
  // dispatch(toggleUpdateUserData());

};

export const SidebarChatElement = ({id, name, newChat}) => {
  return !newChat ? (
    <Chats>
        <Avatar /> 
        <ChatInfo>
          {name}
          <p>Last message from other users..</p>
        </ChatInfo>
    </Chats>
  ) : (
    <Chats onClick={createChat}>
      <div className='addButton'>
      <CustomizedIcons sx={{ color: "#fff" }}>
          <AddCommentOutlinedIcon />
        </CustomizedIcons>
      </div>
      <h2>Stwórz nowy czat</h2>
    </Chats>
  )
}
