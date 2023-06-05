import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
`;
const ChatMessageElement = styled.div`
  color: white;
  font-size: 15px;
  position: relative;
  padding: .1rem 1rem;
  width: fit-content;
  background-color: rgb(26, 26, 33);
  border-radius: 15px;
  margin-bottom: .8rem;

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

export const ChatMessage = ({receiver}) => {

  return !receiver ? (
    <Wrapper>
        <ChatMessageElement>
        {/* <ChatMessageUser> */}
            <span>Tom</span>
            {/* </ChatMessageUser> */}
            <p>Hello there!</p>
            <p>What are you doing?</p>
            <span>05.06.2023 23:08</span>
        </ChatMessageElement>
        <ChatMessageElement>
            <p>How was your day?</p>
        </ChatMessageElement>
    </Wrapper>
    ) : (
    <ChatMessageElement style={{"margin-left": "auto", "background-color": "rgb(1, 86, 189)"}}>
        <span>Me</span>
        <p>Fine :-)</p>
        <span>05.06.2023 23:08</span>

    </ChatMessageElement>
    )
    
}
