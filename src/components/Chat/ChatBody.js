import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ChatContext } from "../../context/ChatContext";
import db from "../../services/firebase";
import { ChatMessage } from "./ChatMessage";

const Wrapper = styled.div`
  flex: 1;
  padding: 1rem;
`;

const ChatBody = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  const searchQuery = useSelector((state) => state.chat.searchQuery);

  const jumpToRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, "chats", data.combineId),
      (snapshot) => {
        snapshot.exists() && setMessages(snapshot.data().messages);
      }
    );
      console.log(messages);
    return () => {
      unsubscribe();
    };
  }, [data.combineId]);

  const indexOfFirstMatch = messages.findIndex((message) =>
    message.messageText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMessages =
    indexOfFirstMatch !== -1 ? messages.slice(indexOfFirstMatch) : [];

  useEffect(() => {
    if (searchQuery) {
      const firstMatchingMessage = messages.find((message) =>
        message.messageText.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (firstMatchingMessage) {
        jumpToRef.current = firstMatchingMessage.id; // Update jumpToRef with the message ID
        scrollToMessage(jumpToRef.current);
      }
    }
  }, [searchQuery]);

  const scrollToMessage = (messageId) => {
    const messageNode = document.getElementById(messageId);
    if (messageNode) {
      messageNode.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Scrollbars
      thumbSize={300}
      renderView={(props) => (
        <div {...props} style={{ ...props.style, overflowX: "hidden" }} />
      )}
    >
      <Wrapper>
        {filteredMessages.map((message) => (
          <ChatMessage messages={message} key={message.id} />
        ))}
      </Wrapper>
    </Scrollbars>
  );
};

export default ChatBody;
