import React, { useContext } from "react";
import styled from "styled-components";
import Hand from "../../assets/welcome.gif";
import { AuthContext } from "../../context/AuthContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  span {
    color: #1976d2;
  }
  img {
    margin-top: 4rem;
    height: 20rem;
  }
`;

export const Welcome = () => {
  const { currUser } = useContext(AuthContext);

  return (
    <Wrapper>
      <img src={Hand}></img>
      <h1>
        Witaj, <span>{currUser.displayName}</span>
      </h1>
      <h3>Wybierz czat z listy lub dodaj nowy, by zacząć czatować.</h3>
    </Wrapper>
  );
};
