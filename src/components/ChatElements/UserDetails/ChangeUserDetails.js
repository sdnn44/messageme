import React, { useContext, useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { ModalView } from "../../Chat/ChatUtils/ModalView";
import { AuthContext } from "../../../context/AuthContext";
import { Avatar, Button, Input, TextField } from "@mui/material";
import { closeModal } from "../../../services/redux/modal/modalSlice";
import { doc, updateDoc } from "firebase/firestore";
import db from "../../../services/firebase";
import { ChatContext } from "../../../context/ChatContext";
import { updateProfile } from "firebase/auth";

const Wrapper = styled.div`
  display: flex;
  //   justify-content: space-between;
  flex-direction: column;
  .MuiTextField-root {
    min-width: 70%;
    color: white;
    // background: rgb(31, 38, 49);
  }
  //   .MuiInput-input {
  //     padding: 0.6rem;
  //   }
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 1rem;
  justify-content: center;
`;

const UserDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  span {
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const TextfieldDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChangeUserDetails = () => {
  const title = `Zmień swoją nazwę użytkownika bądź avatar`;
  const description = `Zmiana widoczna będzie dla każdego użytkownika.`;

  const { currUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const { isOpenForChangeUserDetails } = useSelector((state) => state.modal);
  const [toggleNewUsername, setToggleNewUsername] = useState(false);
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();

  const handleChangeUsername = async () => {
    try {
      await updateDoc(doc(db, "users", currUser.uid), {
        displayName: newUsername,
        email: currUser.email,
        photoURL: currUser.photoURL,
        uid: currUser.uid,
      });

      await updateProfile(currUser, { displayName: newUsername });

      await updateDoc(doc(db, "userContacts", data.user?.uid), {
        [data.combineId + ".userInformation"]: {
          displayName: newUsername,
          photoURL: currUser.photoURL,
          uid: currUser.uid,
        },
      });

      console.log("Document updated successfully.");
    } catch (error) {
      console.error("Error updating document:", error);
    }
    dispatch(closeModal());
  };
  const handleChangeAvatar = async () => {};
  const handleDeleteAvatar = async () => {};

  return (
    <ModalView
      modalTitle={title}
      modalDescription={description}
      toggleState={isOpenForChangeUserDetails}
    >
      <Wrapper>
        <UserDetails>
          <Avatar src={currUser.photoURL} />
          <UserDetailsInfo>
            <span>{currUser.displayName}</span>
            <span>{currUser.email}</span>
          </UserDetailsInfo>
        </UserDetails>

        {toggleNewUsername && (
          <TextfieldDetails>
            <TextField
              id="standard-basic"
              label="Nowa nazwa"
              //   variant="standard"
              onChange={(e) => setNewUsername(e.target.value)}
              InputProps={{
                sx: {
                  background: "rgb(31, 38, 49)",
                  color: "white",
                },
              }}
            />
            <Button variant="contained" onClick={handleChangeUsername}>
              {" "}
              Zastosuj{" "}
            </Button>
          </TextfieldDetails>
        )}

        <ButtonGroup>
          <Button
            variant="contained"
            onClick={() => setToggleNewUsername(!toggleNewUsername)}
          >
            Zmień nazwę
          </Button>
          <Button variant="contained" onClick={handleChangeAvatar}>
            Zmień avatar
          </Button>
          <Button variant="contained" onClick={handleDeleteAvatar}>
            Usuń avatar
          </Button>
        </ButtonGroup>
      </Wrapper>
    </ModalView>
  );
};
