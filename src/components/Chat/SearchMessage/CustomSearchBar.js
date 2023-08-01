import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton } from "@mui/material";

import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../../services/redux/chat/chatSlice";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 63px;
  transition: 0.4s linear;
  overflow: hidden;

  .MuiSvgIcon-root {
    position: absolute;
    right: calc(63px / 2);
    top: 50%;
    transform: translate(50%, -50%);
    width: 30px;
    height: 30px;
    pointer-events: none;
    color: white;
  }
  &:focus-within {
    max-width: 300px;
    .MuiSvgIcon-root {
      color: #24233a;
    }
  }
`;
const Input = styled.input`
  display: block;
  apperance: none;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 50px;
  background-color: rgb(31,38,49);

  padding: 15px;
  font-size: 20px
  cursor: pointer !important;
  transition: .4s linear;
  &::placeholder {
    color: rgb(31,38,49);
  }
  ${SearchBox}:focus-within & {
    background-color: #fff;
    color: #24233A;
    padding-right: 50px;
  }
`;

const MessageSearchInput = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <Wrapper>
      <SearchBox>
        <Input
          type="text"
          onChange={handleSearchChange}
          placeholder="Search messages..."
        />
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
      </SearchBox>
    </Wrapper>
  );
};

export default MessageSearchInput;
