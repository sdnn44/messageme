import React, { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import MessageForm from "./SendMessageForm/MessageForm";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../../services/firebase";
import { collection, doc, onSnapshot, getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { ChatDetails } from "./ChatDetails/ChatDetails";
import { Welcome } from "../../pages/dashboard/Welcome";

const Wrapper = styled.div`
  flex: 0.75;
  display: flex;
  flex-direction: column;
  background: rgb(31, 38, 49);
`;
const DetailsWrapper = styled.div`
  display: flex;
  flex: 0.3;
`;

const Chat = () => {
  const { contactId } = useParams();
  const [contactName, setContactName] = useState("");

  const chatDetails = useSelector((state) => state.chat);

  useEffect(() => {
    if (contactId) {
      getDoc(doc(db, "contacts", contactId)).then((docSnap) => {
        if (docSnap.exists()) {
          console.log(docSnap.data().name);
          setContactName(docSnap.data().name);
        }
      });
    }
  }, [contactId]);
  return (
    <>
      <Wrapper>
        {contactId ? (
          <>
            <ChatHeader name={contactName} />
            <ChatBody />
            <MessageForm />
          </>
        ) : (
          <Welcome />
        )}
      </Wrapper>
      {chatDetails.openDetails && (
        <DetailsWrapper>
          <ChatDetails />
        </DetailsWrapper>
      )}
    </>
  );
};

export default Chat;
