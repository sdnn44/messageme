import React from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import MessageForm from "./SendMessageForm/MessageForm";
import styled from "styled-components";

const Wrapper = styled.div`
flex: 0.75;
display:flex;
flex-direction: column;
background: rgb(31,38,49);
`;

const Chat = () => {
  return (
    <Wrapper>
      <ChatHeader />
      <ChatBody />
      <MessageForm />
    </Wrapper>
  );
};

export default Chat;
