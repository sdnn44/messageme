import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 0.8rem;
  margin: 2rem auto;
  width: 70%;
  cursor: pointer;
  border: 0.1px solid lightgray;
  background: #00aec9;

  :hover {
    // background-color: rgb(52, 153, 79);
    transition: 0.5s ease;
  }

  svg {
    margin-right: 0.3rem;
  }
  span {
  }
`;

export const ButtonProvider = ({ icon, children }) => {
  return (
    <Wrapper>
      <CustomButton>
        {icon}
        {children}
      </CustomButton>
    </Wrapper>
  );
};
