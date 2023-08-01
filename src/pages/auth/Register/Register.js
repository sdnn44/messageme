import React from "react";
import styled from "styled-components";
import { Divider } from "@mui/material";
import { LoginViaSocials } from "../../../sections/auth/Login/LoginViaSocialsForm";
import { RegistrationForm } from "../../../sections/auth/Registration/RegistrationForm";
import { Link } from "react-router-dom";

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
  height: 90%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 6px rgb(0 0 0 / 15%), 0px 0px 2px rgb(0 0 0 / 15%);

  span {
    display: flex;
    justify-content: center;
  }
`;

export const Register = () => {
  console.log("Register?");
  return (
    <Bodylike>
      <Wrapper>
        <RegistrationForm />
        <Divider sx={{ width: "90%" }}>lub</Divider>
        <LoginViaSocials />
        <p>
          Masz już konto na MessageME? <br />
          <span><Link to="/login"> Zaloguj się teraz </Link></span>
        </p>
      </Wrapper>
    </Bodylike>
  );
};
