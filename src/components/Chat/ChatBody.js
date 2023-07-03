import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ChatContext } from "../../context/ChatContext";
import db from "../../services/firebase";
import { ChatMessage } from "./ChatMessage";

const Wrapper = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  // background: red;
`;

const ChatBody = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, "chats", data.chatId),
      (snapshot) => {
        snapshot.exists() && setMessages(snapshot.data().messages);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [data.chatId]);
  return (
    <Wrapper>
      {messages.map(message=>(
        <ChatMessage messages={message} key={messages.id}/>
      ))}
      {/* <ChatMessage receiver /> */}
    </Wrapper>
  );
};

export default ChatBody;
