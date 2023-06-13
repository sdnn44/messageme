import React from 'react'
import styled from "styled-components";
import { InputProvider } from '../InputProvider';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { ButtonProvider } from '../../../components/FormElements/CustomButtonProvider';

const Wrapper = styled.div`
    width: 80%;
`;

const Form = styled.form`
    h1 {
        display:flex;
        justify-content: center;    
        font-weight: 300;
    }

    p {
        padding: 1rem 0;
    }
`;

export const LoginForm = () => {

    const signIn = () => {

    }

  return (
    <Wrapper>
        <Form>
            <h1>Zaloguj się!</h1>
            <InputProvider icon={<EmailOutlinedIcon/>}>
                <input type='text' placeholder='Email'/>
                {/* <label>E-mail</label> */}
            </InputProvider>
            <InputProvider icon={<KeyOutlinedIcon/>}>
                <input type='password' placeholder='Hasło'/>
                {/* <label>Hasło</label> */}
            </InputProvider>
            <p>Zapomniałeś hasła?</p>
            <ButtonProvider onClick={signIn} icon={<PersonIcon style={{color: "white"}}/>}>
                Zaloguj
            </ButtonProvider>
        </Form>
    </Wrapper>
  )
}
