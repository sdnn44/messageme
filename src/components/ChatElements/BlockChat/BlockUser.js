import React from "react";
import styled from "styled-components";

import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { ModalView } from "../../Chat/ChatUtils/ModalView";

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  justify-content: center;
`;

export const BlockUser = () => {
  const title = `Zablokuj użytkownika`;
  const description = `Nie będziesz otrzymywał wiadomości od tego użytkownika.`;

  const { isOpenForBlockingChat } = useSelector((state) => state.modal);

  return (
    <ModalView
      modalTitle={title}
      modalDescription={description}
      toggleState={isOpenForBlockingChat}
    >
      <ButtonGroup>
        <Button variant="outlined" color="error">
          Zablokuj
        </Button>
      </ButtonGroup>
    </ModalView>
  );
};
