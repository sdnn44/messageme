import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {
  collection,
  where,
  query,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import db from "../../services/firebase";
import styled from "styled-components";
import { Avatar } from "@mui/material";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AutocompleteSearchBar = () => {
  const [contacts, setContacts] = useState([]);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

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

  return (
    <Stack mt={2} mb={2} spacing={1} sx={{ width: 300 }}>
        
      <Autocomplete
        freeSolo
        inputValue={username}
        onChange={(e,v) => setUsername(v)}
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
        <Wrapper>
          <Avatar src={user.photoURL} />
          <div>{user.displayName}</div>
        </Wrapper>
      )}
    </Stack>
  );
};

const top100Films = [{ title: "The Shawshank Redemption", year: 1994 }];
