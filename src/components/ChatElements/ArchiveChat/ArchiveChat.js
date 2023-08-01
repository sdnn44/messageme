import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { ModalView } from "../../Chat/ChatUtils/ModalView";
import { GenerateCSV } from "./GenerateCSV";

export const ArchiveChat = () => {
  const title = `Zarchiwizuj czat`;
  const description = `Przechowuj historię wiadomości w formacie CSV.`;

  const { isOpenForArchiveChat } = useSelector((state) => state.modal);

  return (
    <ModalView
      modalTitle={title}
      modalDescription={description}
      toggleState={isOpenForArchiveChat}
    >
      <GenerateCSV />
    </ModalView>
  );
};
