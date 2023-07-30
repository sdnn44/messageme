import React from "react";
import styled from "styled-components";
import { DetailsBody } from "./DetailsBody";
import { DetailsHeader } from "./DetailsHeader";

const Wrapper = styled.div`
  width: 100%;
  background: rgb(31, 38, 49);
  border-left: 0.1px solid rgb(1, 86, 189);
`;

export const ChatDetails = () => {
  return (
    <Wrapper>
      <DetailsHeader />
      <DetailsBody />
    </Wrapper>
  );
};
