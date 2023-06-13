import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
`;
const Input = styled.div`

    display: flex;
    align-items: center;
    width: 100%;
    // border-bottom: 1px solid;
    margin-bottom: 1rem;
    // padding: 1rem;
    // background: #00aec9;

    input {
        padding: 1rem .2rem;
        // border-radius: 0 30px 30px 0;
        border: none;
        border-color: transparent;
        outline: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #00aec9;
        // box-shadow: 0 6px 16px rgba(101, 101, 101, .07), 0 17px 21px rgba(21, 21, 21, .2);
    }

    input:focus {
        // border-bottom: 1px solid #00aec9;
        // border-right: 1px solid #00aec9;
        transition: .4s ease-in-out;
        box-shadow: 0 6px 16px rgba(101, 101, 101, .07), 0 17px 21px rgba(21, 21, 21, .2);
    }
   
    svg {
        display: flex;
        color: #00aec9;
        margin-right: 1rem;
    }

`;
//przenieść w inne miejsce
export const InputProvider = ({ icon, children }) => {
  return (
    <Wrapper>
            <Input>
                {icon}
                {children}
            </Input>
    </Wrapper>
  );
};
