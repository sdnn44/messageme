import React from "react";
import { useSelector } from "react-redux";
import { ModalView } from "../../Chat/ChatUtils/ModalView";
import { AutocompleteSearchBar } from "../AutocompleteSearchBar";

export const AddNewChat = () => {
  const title = `Dodaj użytkownika do wspólnych rozmów`;
  const description = `Wyszukaj nazwę użytkownika, a następnie kliknij Enter.`;

  const { isOpen } = useSelector((state) => state.modal);

  return (
    <ModalView modalTitle={title} modalDescription={description} toggleState={isOpen}>
      <AutocompleteSearchBar />
    </ModalView>
  );
};
