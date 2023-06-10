import { Tooltip } from "@mui/material";
import React from "react";
import styled from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

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
    padding: .8rem;
    margin: 1rem;
    cursor: pointer;
    border: .1px solid lightgray;

    :hover {
        background-color: lightgray;
        transition: .5s ease;
    }

    svg {
        margin-right: 1rem;
    }
    span {

    }
`;

export const LoginViaSocials = () => {
  const viaGoogle = async () => {};

  const viaFacebook = async () => {};

  return (
    <Wrapper>
      <Tooltip title="Zaloguj z wykorzystaniem Google">
        <CustomButton onClick={viaGoogle}>
          <GoogleIcon style={{color: "red"}}/> <span>Kontynuuj przy użyciu konta Google</span>
        </CustomButton>
      </Tooltip>
      <Tooltip title="Zaloguj z wykorzystaniem Facebook">
        <CustomButton onClick={viaFacebook}>
          <FacebookOutlinedIcon style={{color: "blue"}}/> <span>Kontynuuj przy użyciu konta Facebook</span>
        </CustomButton>
      </Tooltip>
    </Wrapper>
  );
};
