import React from "react";
import styled from "styled-components";
import { InputProvider } from "../InputProvider";
import { ButtonProvider } from "../../../components/FormElements/CustomButtonProvider";
import PersonIcon from '@mui/icons-material/Person';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Wrapper = styled.div`
  width: 80%;

`;

const Form = styled.form`
  h1 {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    font-weight: 300;
  }

  p {
    padding: 1rem 0;
  }
`;

export const RegistrationForm = () => {

  const signIn = async () => {};

  return (
    <Wrapper>
      <Form>
        <h1>Dołącz do MessageME!</h1>
        <InputProvider icon={<EmailOutlinedIcon />}>
          <input type="text" placeholder="Email" />
        </InputProvider>
        <InputProvider icon={<PersonIcon />}>
          <input type="text" placeholder="Imię" />
        </InputProvider>
        <InputProvider icon={<PersonIcon />}>
          <input type="text" placeholder="Nazwisko" />
        </InputProvider>
        <InputProvider icon={<KeyOutlinedIcon />}>
          <input type="text" placeholder="Hasło" />
        </InputProvider>
        <InputProvider icon={<KeyOutlinedIcon />}>
          <input type="text" placeholder="Powtórz hasło" />
        </InputProvider>
        <ButtonProvider onClick={signIn} icon={<PersonAddIcon style={{ color: "white" }} />}>
          Załóż konto
        </ButtonProvider>
      </Form>
    </Wrapper>
  );
};

export default RegistrationForm;
