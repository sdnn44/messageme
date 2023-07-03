import { Avatar, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import styled from "styled-components";
import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

const Wrapper = styled.div`
  padding: 0.6rem;
  display: flex;
  align-items: center;
  // justify-content: center;
  // border-bottom: 1px solid rgb(1, 86, 189);
`;
const HeaderInfo = styled.div`
  flex: 1;
  padding-left: 1rem;
  color: white;
  h3 {
    font-weight: 500;
  }
  p {
    margin-top: -1rem;
  }
`;
const HeaderInfoRight = styled.div`
  display: flex;
  justify-content: space-between;
  // min-width: 100px;
  svg {
    padding .5rem;
    color: white;
  }
`;

const ChatHeader = ({ name }) => {
  const { data } = useContext(ChatContext);

  return (
    <Wrapper>
      <Avatar src={data.user?.photoURL} />
      <HeaderInfo>
        <h3>{data.user?.displayName}</h3>
        <p>last seen..</p>
      </HeaderInfo>

      <HeaderInfoRight>
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </HeaderInfoRight>
    </Wrapper>
  );
};

export default ChatHeader;
