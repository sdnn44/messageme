import React, { useContext, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const Wrapper = styled.div``;
const ChatMessageElement = styled.div`
  ${({ isOwner }) => isOwner && ownerStyles}
  color: white;
  font-size: 15px;
  position: relative;
  padding: 0.1rem 1rem;
  width: fit-content;
  min-width: 5rem;
  max-width: 50%;
  background-color: rgb(26, 26, 33);
  border-radius: 25px 25px 25px 0;
  margin-bottom: 0.8rem;

  span {
    // position: absolute;
    // top: -15px;
    font-weight: 800;
    font-size: x-small;
  }
  // span:nth-child(even) {
  //   // position: absolute;
  //   // top: 170px;
  //   right: 20px;
  //   font-weight: 600;
  // }
  p img {
    display:flex;
    justify-content: flex-end;
    max-width: 50%;
  }
`;

const DateTimestamp = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: x-small;
`;

const ownerStyles = css`
  border-radius: 25px 25px 0 25px !important;
  margin-left: auto !important;
  background: rgb(1, 86, 189) !important;
`;

export const ChatMessage = ({ messages, jumpToRef }) => {
  const { currUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({behavior:"smooth"});
  }, [messages]);

  return (
    <ChatMessageElement ref={messages.id === jumpToRef?.current?.id ? jumpToRef : ref} isOwner={messages.senderId === currUser.uid}>
      <span>{messages.senderId === currUser.uid?currUser.displayName:data.user.displayName}</span>
      <p>{messages.messageText}</p>
      <p>{messages.img && <img src={messages.img} alt="" />}</p>
      <DateTimestamp>{messages.date.toDate().toLocaleTimeString('pl-PL', {hour: '2-digit', minute: '2-digit'})}</DateTimestamp>
    </ChatMessageElement>
  );
};
