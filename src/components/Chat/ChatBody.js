import React from "react";
import styled from "styled-components";
import { ChatMessage } from "./ChatMessage";

const Wrapper = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  // background: red;
`;

const ChatBody = () => {
  return( 
    <Wrapper>
       <ChatMessage />
      <ChatMessage receiver/>
    </Wrapper>
    );
};

export default ChatBody;
