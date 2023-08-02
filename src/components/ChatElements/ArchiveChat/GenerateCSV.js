import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import alertify from "alertifyjs";
import { CSVLink } from "react-csv";
import { Button } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import db from "../../../services/firebase";
import { ChatContext } from "../../../context/ChatContext";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../services/redux/modal/modalSlice";

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  justify-content: center;
`;

export const GenerateCSV = () => {
  const [dataCSV, setDataCSV] = useState([]);
  const [toggleArchive, setToggleArchive] = useState(false);
  const { data } = useContext(ChatContext);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, "chats", data.combineId),
      (snapshot) => {
        if (snapshot.exists()) {
          modifyMessages(snapshot.data().messages);
        }
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  const modifyMessages = (messages) => {
    console.log(Object.entries(messages).length);

    if (Object.entries(messages).length === 0) {
      setToggleArchive(false);
      console.log("Brak wiadomości do zarchiwizowania!");
    } else {
      setToggleArchive(true);
      console.log("Wiadomości do zarchiwizowania!");
      const tabMessages = messages.map((message) => ({
        użytkownik: message.senderName,
        wiadomość: message.messageText,
        data: message.date.toDate().toLocaleDateString("pl-PL"),
        godzina: message.date.toDate().toLocaleTimeString("pl-PL", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }));
      setDataCSV(tabMessages);
      dispatch(closeModal);
    }
  };

  return (
    <div>
      {!toggleArchive ? (
        <ButtonGroup>Brak wiadomości do zarchiwizowania!</ButtonGroup>
      ) : (
        <CSVLink
          data={dataCSV}
          filename={`${data.combineId}_archive_${new Date().toISOString()}.csv`}
          target="_blank"
          onClick={() => {
            dispatch(closeModal());
            alertify.success("Wiadomości zarchiwizowane!");
          }}
        >
          <ButtonGroup>
            <Button variant="outlined">Pobierz CSV</Button>
          </ButtonGroup>
        </CSVLink>
      )}
    </div>
  );
};
