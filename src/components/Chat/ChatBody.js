import React from "react";
import styled from "styled-components";
import { ChatMessage } from "./ChatMessage";

const Wrapper = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  // background: red;
`;

// const ChatMessage = styled.div`
//   color: white;
//   font-size: 16px;
//   position: relative;
//   padding: .2rem 1rem;
//   width: fit-content;
//   background-color: rgb(26, 26, 33);
//   border-radius: 15px;
//   margin-bottom: .8rem;

//   span {
//     position: absolute;
//     top: -15px;
//     font-weight: 800;
//     font-size: x-small;
//   }
//   span:nth-child(2n) {
//     position: absolute;
//     top: 170px;
//     right: 20px;
//     font-weight: 600;
//   }
// `;


const ChatBody = () => {
  return( 
    <Wrapper>
       <ChatMessage />{/*
        <span>Tom</span>
        <p>Hello there!</p>
        <p>What are you doing?</p>
        <span>05.06.2023 23:08</span>
      </ChatMessage>
      <ChatMessage>
        <p>How was your day?</p>
      </ChatMessage>
      <ChatMessage>
        <p>Fine :-)</p> */}
      <ChatMessage receiver/>
    </Wrapper>
    );
};

export default ChatBody;
