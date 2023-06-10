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

    // label {
    //     width: 65px;
    //     order: 2
    //     pointer-events: none;
    //     transition: .5s;
    //     // margin-left: -9rem;
    // }

    // input:invalid ~ label {
    //     color: red;
    // }

    // input:focus ~ label {
    //     margin-bottom: 2.2rem;
    //     color: #03e9f4;
    //     font-size: 12px;
    // }
// position: relative;
//   input {
//     width: 100%;
//     padding: 10px 0;
//     font-size: 16px;
//     color: #000;
//     margin-bottom: 30px;
//     border: none;
//     border-bottom: 1px solid #fff;
//     outline: none;
//     background: transparent;
//   }
//   label {
//     position: absolute;
//   top:0;
//   left: 0;
//   padding: 10px 0;
//   font-size: 16px;
//   color: #000;
//   pointer-events: none;
//   transition: .5s;
//   }

// input:focus ~ label,
// input:valid ~ label {
//   top: -20px;
//   left: 0;
//   color: #03e9f4;
//   font-size: 12px;
// }
`;

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
