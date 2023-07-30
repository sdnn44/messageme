import React, { useContext } from "react";
import styled from "styled-components";
import {
  Avatar,
} from "@mui/material";
import { ChatContext } from "../../../context/ChatContext";

const Wrapper = styled.div`
  display: flex;
  padding: 1.6rem;
  justify-content: center;
  flex-direction: column;
  color: white;
`;
const UserInformation = styled.div`
  border-bottom: 1px solid rgb(1, 86, 189);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem;
  margin-bottom: 1rem;
  h3 {
    margin: 0 auto;
  }
  p {
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`;

export const DetailsHeader = () => {
  const { data } = useContext(ChatContext);

  return (
    <Wrapper>
      <UserInformation>
        <Avatar src={data.user?.photoURL} />
        <h3>{data.user?.displayName}</h3>
        <p>
          Ostatnia aktywność:{" "}
          {data.latestTimestamp?.toDate().toLocaleTimeString("pl-PL", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </UserInformation>
    </Wrapper>
  );
};
