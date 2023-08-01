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

export const DeleteCurrentChat = () => {
  const title = `Usuń czat`;
  const description = `Usuniętej konwersacji nie będzie można już przywrócić.`;

  const { isOpenForDeletingChat } = useSelector((state) => state.modal);

  return (
    <ModalView
      modalTitle={title}
      modalDescription={description}
      toggleState={isOpenForDeletingChat}
    >
      <ButtonGroup>
        <Button variant="outlined" color="error">
          Usuń
        </Button>
      </ButtonGroup>
    </ModalView>
  );
};
