import React from "react";
import styled from "styled-components";
import { LoginForm } from "../../../sections/auth/Login/LoginForm";
import { Divider } from "@mui/material";
import { LoginViaSocials } from "../../../sections/auth/Login/LoginViaSocialsForm";

const Bodylike = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  // border: 1px solid red;
  width: 400px;
  max-width: 90vw;
  height: 600px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 6px rgb(0 0 0 / 15%), 0px 0px 2px rgb(0 0 0 / 15%);

  span {
    display: flex;
    justify-content: center;
  }
`;

export const Login = () => {
  return (
    <Bodylike>
      <Wrapper>
        <LoginForm />
        <Divider sx={{ width: "90%" }}>lub</Divider>
        <LoginViaSocials />
        <p>
          Jesteś nowym użytkownikiem messageME? <br />
          <span>Dołącz teraz</span>
        </p>
      </Wrapper>
    </Bodylike>
  );
};
