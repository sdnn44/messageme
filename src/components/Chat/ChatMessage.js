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
  background-color: rgb(26, 26, 33);
  border-radius: 15px;
  margin-bottom: 0.8rem;

  span {
    // position: absolute;
    // top: -15px;
    font-weight: 800;
    font-size: x-small;
  }
  span:nth-child(even) {
    // position: absolute;
    // top: 170px;
    right: 20px;
    font-weight: 600;
  }
`;

const ownerStyles = css`
  margin-left: auto !important;
  background: rgb(1, 86, 189) !important;

`;

export const ChatMessage = ({ messages }) => {
  const { currUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({behavior:"smooth"})
  }, [messages]);

  return (
    <ChatMessageElement ref={ref} isOwner={messages.senderId === currUser.uid}>
      <span>{messages.senderId === currUser.uid?currUser.displayName:data.user.displayName}</span>
      <p>{messages.messageText}</p>
      <p>{messages.img && <img src={messages.img} alt="" />}</p>
      <span>{messages.id}</span>
    </ChatMessageElement>
  );
  //  !receiver ? (
  // <Wrapper>
  //     <ChatMessageElement>
  //     {/* <ChatMessageUser> */}
  //         <span>{data.user.displayName}</span>
  //         {/* </ChatMessageUser> */}
  //         <p>Hello there!</p>
  //         <p>What are you doing?</p>
  //         <span>05.06.2023 23:08</span>
  //     </ChatMessageElement>
  //     <ChatMessageElement>
  //         <p>How was your day?</p>
  //     </ChatMessageElement>
  // </Wrapper>
  // ) :
};
