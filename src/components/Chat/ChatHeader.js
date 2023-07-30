import { Avatar, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import styled from "styled-components";
import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import SearchMessage from "../Chat/SearchMessage/SearchMessage";
import { useDispatch } from "react-redux";
import { toggleChatDetails } from "../../services/redux/chat/chatSlice";

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

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Avatar src={data.user?.photoURL} />
      <HeaderInfo>
        <h3>{data.user?.displayName}</h3>
        <p>
          Ostatnia aktywność:{" "}
          {data.latestTimestamp?.toDate().toLocaleTimeString("pl-PL", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </HeaderInfo>

      <HeaderInfoRight>
        <SearchMessage />
        <IconButton>
          <SettingsIcon
            onClick={() => {
              dispatch(toggleChatDetails());
            }}
          />
        </IconButton>
      </HeaderInfoRight>
    </Wrapper>
  );
};

export default ChatHeader;
