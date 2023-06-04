import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styled from "styled-components";
import { Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SidebarChatElement } from './SidebarChatElement';

const Wrapper = styled.div`
// display: flex;
// flex-direction: column;
// height: 160px;
// // flex: 1; 
// overflow-y: auto;
// // padding: 1rem;
// background: red;
height: 100%;
`;

const Search = styled.div`
display: flex;
align-items: center;
width: 100%;
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
`

export const SidebarBody = () => {

  const theme = useTheme();
  const style = {
    mt: 2,
    width: "90%",
    maxWidth: 360,
    bgcolor: theme.palette.primary.main,
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
          type='text'
          placeholder='Wyszukaj czat...' />
      </Search>
      <Divider sx={style} variant="middle" />
      
        <ChatWrapper>{/*LOADER WHILE FETCH FROM DB*/}
          <SidebarChatElement newChat/>
          <SidebarChatElement />
          <SidebarChatElement />
        </ChatWrapper>
      </Wrapper></>
  )
}
