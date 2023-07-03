import React, { useContext, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {
  collection,
  where,
  query,
  getDocs,
  onSnapshot,
  getDoc,
  setDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import db from "../../services/firebase";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import { ButtonProvider } from "./CustomButtonProvider";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { AuthContext } from "../../context/AuthContext";
import { closeModal } from "../../services/redux/modal/modalSlice";
import { useDispatch } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.4rem;
  border-bottom: 1px solid #186189;
  :hover {
    background-color: rgb(44, 44, 56);
    cursor: pointer;
  }
  p,
  span {
    margin-right: 2rem;
  }
  .MuiSvgIcon-root {
    font-size: 1rem;
    display: flex;
    margin-left: 2.5rem;
    // align-self: flex-end;
  }
  .MuiSvgIcon-root:hover {
    transition: 0.3s ease;
    color: #186189;
  }
`;

export const AutocompleteSearchBar = () => {
  const [contacts, setContacts] = useState([]);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const { currUser } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) =>
      setContacts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleKey = (e) => {
    console.log("enter " + username);
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //user A adds user B, then create new chat for them; user B cannot add user A, bcs chat already exist
    //order uid, then combine
    const chatId =
      currUser.uid < user.uid
        ? user.uid + currUser.uid
        : currUser.uid + user.uid;
    try {
      const response = await getDoc(doc(db, "chats", chatId));
      if (!response.exists()) {
        //if chat between user A nad user B does not exist, then create an empty chat
        await setDoc(doc(db, "chats", chatId), { messages: [] });
        await updateDoc(doc(db, "userContacts", currUser.uid), {
          [chatId + ".userInformation"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [chatId + ".date"]: serverTimestamp(),
        });
        console.log(`userID` + user.uid);
        await updateDoc(doc(db, "userContacts", user.uid), {
          [chatId + ".userInformation"]: {
            uid: currUser.uid,
            displayName: currUser.displayName,
            photoURL: currUser.photoURL,
          },
          [chatId + ".date"]: serverTimestamp(),
        });
      }
      dispatch(closeModal());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Stack mt={2} mb={2} spacing={1} sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          inputValue={username}
          onChange={(e, v) => setUsername(v)}
          id="free-solo-2-demo"
          disableClearable
          selectOnFocus
          options={contacts.map((option) => option.data.displayName)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Dodaj kontakt"
              onKeyDown={handleKey}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />

        {user && (
          <Wrapper onClick={handleSelect}>
            <Avatar src={user.photoURL} />
            <span>{user.displayName}</span>
            <CloseOutlinedIcon
              onClick={(e) => {
                e.stopPropagation();
                setUser("");
              }}
            ></CloseOutlinedIcon>
          </Wrapper>
        )}
      </Stack>
      {/* <ButtonProvider>Dodaj</ButtonProvider> */}
    </>
  );
};

const top100Films = [{ title: "The Shawshank Redemption", year: 1994 }];
