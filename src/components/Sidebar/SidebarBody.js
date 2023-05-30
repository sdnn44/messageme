import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
align-items: center;
height: 1rem;
padding: 1rem;
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

export const SidebarBody = () => {
  return (
    /*Szukaj divider przypięty all chats */
    <Wrapper>
      <Search>
      {/* <Input icon={<SearchOutlinedIcon />}>
          
        </Input> */}
        <SearchOutlinedIcon />
        <input
            type='text'
            placeholder='Wyszukaj czat...'
          />
      </Search>
      {/* jakis tekst */}
    </Wrapper>
  )
}
