import React from "react";
import styled from "styled-components";
import { InputProvider } from "../InputProvider";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { ButtonProvider } from "../../../components/FormElements/CustomButtonProvider";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebase";


const Wrapper = styled.div`
  width: 80%;
`;

const Form = styled.form`
  h1 {
    display: flex;
    justify-content: center;
    font-weight: 300;
  }

  p {
    padding: 1rem 0;
  }
`;

export const LoginForm = () => {
  const navigate = useNavigate();

  const signIn = () => {};

  const handleSubmit = async (e) => {
    console.log("register clicked");
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <h1>Zaloguj się!</h1>
        <InputProvider icon={<EmailOutlinedIcon />}>
          <input type="text" placeholder="Email" />
          {/* <label>E-mail</label> */}
        </InputProvider>
        <InputProvider icon={<KeyOutlinedIcon />}>
          <input type="password" placeholder="Hasło" />
          {/* <label>Hasło</label> */}
        </InputProvider>
        <p>Zapomniałeś hasła?</p>
        <ButtonProvider
          onClick={signIn}
          icon={<PersonIcon style={{ color: "white" }} />}
        >
          Zaloguj
        </ButtonProvider>
      </Form>
    </Wrapper>
  );
};
