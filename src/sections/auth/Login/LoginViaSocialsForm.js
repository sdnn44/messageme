import { Tooltip } from "@mui/material";
import React from "react";
import styled from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { useAuth } from "../../../services/AuthProvider";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from "../../../services/firebase";

const Wrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  width: 100%;
`;

const CustomButton = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  border-radius: 30px;
  padding: 0.8rem;
  margin: 1rem;
  cursor: pointer;
  border: 0.1px solid lightgray;

  :hover {
    background-color: lightgray;
    transition: 0.5s ease;
  }

  svg {
    margin-right: 1rem;
  }
  span {
  }
`;

export const LoginViaSocials = () => {
  // const signInWithGoogle = useAuth();

  const viaGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const viaFacebook = async () => {};

  return (
    <Wrapper>
      <Tooltip title="Zaloguj z wykorzystaniem Google">
        <CustomButton onClick={viaGoogle}>
          <GoogleIcon style={{ color: "red" }} />{" "}
          <span>Kontynuuj przy użyciu konta Google</span>
        </CustomButton>
      </Tooltip>
      <Tooltip title="Zaloguj z wykorzystaniem Facebook">
        <CustomButton onClick={viaFacebook}>
          <FacebookOutlinedIcon style={{ color: "blue" }} />{" "}
          <span>Kontynuuj przy użyciu konta Facebook</span>
        </CustomButton>
      </Tooltip>
    </Wrapper>
  );
};
