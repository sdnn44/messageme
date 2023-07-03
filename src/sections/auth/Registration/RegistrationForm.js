import React from "react";
import styled from "styled-components";
import { InputProvider } from "../InputProvider";
import { ButtonProvider } from "../../../components/FormElements/CustomButtonProvider";
import PersonIcon from "@mui/icons-material/Person";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {useNavigate} from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import db, { auth, storage } from "../../../services/firebase";
import { doc, setDoc } from "firebase/firestore";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Attach from "../../../img/addAvatar.png"

const Wrapper = styled.div`
  width: 80%;

  form > h1 {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    font-weight: 100;
  }
  
  form > p {
    padding: 1rem 0;

  }

  form > label {
    color: #8da4f1;
    font-size: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.7rem;

    form > img {
      width: 32px;
      background: red;
    }
`;

export const RegistrationForm = () => {
  const navigate = useNavigate();

  const signUp = async () => {};

  const handleSubmit = async (e) => {
    console.log("register clicked");
    e.preventDefault();
    const email = e.target[0].value;
    const displayName = `${e.target[1].value}` + `${e.target[2].value}`;
    const password = e.target[3].value;
    const avatar = e.target[4].files[0];

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, avatar);

      // uploadTask.on(
      //   (error) => {
      //     console.log(error);
      //   },
      //   ()
      await uploadBytesResumable(storageRef, avatar).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //update certain information about current user
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });
            //register user on firestore
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            //register empty document, which will be contain list of users contacts
            await setDoc(doc(db, "userContacts", response.user.uid), {});
            navigate("/");
            
          } catch (err) {
            console.log(err);
          }
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
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

        <input required style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <img src={Attach} alt="avatar" />
          <span>Dodaj avatar</span>
        </label>

        {/* <InputProvider icon={<KeyOutlinedIcon />}>
          <input type="text" placeholder="Powtórz hasło" />
        </InputProvider> */}
        <ButtonProvider
          // onClick={signUp}
          icon={<PersonAddIcon style={{ color: "white" }} />}
        >
          Załóż konto
        </ButtonProvider>
      </form>
    </Wrapper>
  );
};

export default RegistrationForm;
