import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ChatContext } from "../../../context/ChatContext";
import { ModalView } from "../../Chat/ChatUtils/ModalView";

import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import db from "../../../services/firebase";
import { AuthContext } from "../../../context/AuthContext";
import { closeModal } from "../../../services/redux/modal/modalSlice";

const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  .MuiInput-root {
    min-width: 70%;
    color: white;
    background: rgb(31, 38, 49);
  }
  .MuiInput-input {
    padding: 0.6rem;
  }
`;

export const ChangeUsername = () => {
  const title = `Zmień nazwę użytkownika`;
  const description = `Zmiana nazwy widoczna będzie tylko dla ciebie.`;

  const { isOpenForChangeUsername } = useSelector((state) => state.modal);

  const { data } = useContext(ChatContext);
  const { currUser } = useContext(AuthContext);

  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();

  const handleChange = async () => {

    try {
      await updateDoc(doc(db, "userContacts", currUser.uid), {
        [data.combineId + ".userInformation"]: {
          displayName: newUsername,
          photoURL: data.user.photoURL,
          uid: data.user.uid
        },
      });
      console.log("Document updated successfully.");
    } catch (error) {
      console.error("Error updating document:", error);
    }
    dispatch(closeModal());
  };

  return (
    <ModalView
      modalTitle={title}
      modalDescription={description}
      toggleState={isOpenForChangeUsername}
    >
      <Wrapper>
        {/* <p> Aktualna nazwa: {data.user?.displayName} </p> */}
        <Input
          placeholder={data.user?.displayName}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <Button variant="contained" onClick={handleChange}>
          {" "}
          Zastosuj{" "}
        </Button>
      </Wrapper>
    </ModalView>
  );
};
