import React, { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import MessageForm from "./SendMessageForm/MessageForm";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../../services/firebase";
import { collection, doc, onSnapshot, getDoc } from "firebase/firestore";

const Wrapper = styled.div`
  flex: 0.75;
  display: flex;
  flex-direction: column;
  background: rgb(31, 38, 49);
`;

const Chat = () => {
  const { contactId } = useParams();
  const [ contactName, setContactName ] = useState('');

  useEffect(() => {

    if (contactId) {

      getDoc(doc(db, "contacts", contactId)).then(docSnap => {
        if (docSnap.exists()) {
          console.log(docSnap.data().name)
          setContactName(docSnap.data().name);
        }
      });

      // const unsubscribe = onSnapshot(
      //   doc(db, "contacts", contactId),
      //   (snapshot) => {
      //     if (snapshot.exists()) {
      //       setContactName(snapshot.data().name);
      //     } else {
      //       // setContactName("Contact not found");
      //     }
      //   }
      // ); //db.collection("contacts").doc(contactId).onSnapshot((snapshot) => setContactName(snapshot.data().name));
      // // return () => {
      // //   unsubscribe(); // Cleanup the listener on component unmount
      // // };
    }
  }, [contactId]);
  console.log(contactId);
  console.log(contactName);
  return (
    <Wrapper>

            <ChatHeader 
              name={contactName}
            />

      <ChatBody />
      <MessageForm />
    </Wrapper>
  );
};

export default Chat;
