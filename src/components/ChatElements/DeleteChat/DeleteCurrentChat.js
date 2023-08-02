import React, { useContext } from "react";
import styled from "styled-components";
//@ts-ignore
import * as alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ModalView } from "../../Chat/ChatUtils/ModalView";
import { ChatContext } from "../../../context/ChatContext";
import {
  collection,
  deleteDoc,
  deleteField,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import db from "../../../services/firebase";
import { closeModal } from "../../../services/redux/modal/modalSlice";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  justify-content: center;
`;

export const DeleteCurrentChat = () => {
  const title = `Usuń czat`;
  const description = `Usuniętej konwersacji nie będzie można już przywrócić.`;

  const { isOpenForDeletingChat } = useSelector((state) => state.modal);
  const { data } = useContext(ChatContext);
  const { currUser } = useContext(AuthContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "chats", data.combineId));

      const docPathCurrUser = `userContacts/${currUser.uid}`;
      await updateDoc(doc(db, docPathCurrUser), {
        [`${data.combineId}`]: deleteField(),
      });

      const docPathReceiver = `userContacts/${data.user.uid}`;
      await updateDoc(doc(db, docPathReceiver), {
        [`${data.combineId}`]: deleteField(),
      });

      alertify.success("Czat został usunięty!");
      dispatch(closeModal());
      navigate("/");
    } catch (err) {
      console.log(err);
      alertify.error("Błąd, " + err);
    }
  };

  return (
    <ModalView
      modalTitle={title}
      modalDescription={description}
      toggleState={isOpenForDeletingChat}
    >
      <ButtonGroup>
        <Button variant="outlined" color="error" onClick={handleDelete}>
          Usuń
        </Button>
      </ButtonGroup>
    </ModalView>
  );
};
