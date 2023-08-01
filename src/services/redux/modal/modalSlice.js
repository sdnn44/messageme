import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isOpenForChangeUserDetails: false,
  isOpenForChangeUsername: false,
  isOpenForBlockingChat: false,
  isOpenForArchiveChat: false,
  isOpenForDeletingChat: false,
  clearInput: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    }, 
    openModalForChangeUserDetails: (state, action) => {
      state.isOpenForChangeUserDetails = true;
    },
    openModalForChangeUsername: (state, action) => {
      state.isOpenForChangeUsername = true;
    },
    openModalForBlockingChat: (state, action) => {
      state.isOpenForBlockingChat = true;
    },
    openModalForArchiveChat: (state, action) => {
      state.isOpenForArchiveChat = true;
    },
    openModalForDeletingChat: (state, action) => {
      state.isOpenForDeletingChat = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.isOpenForChangeUserDetails = false;
      state.isOpenForChangeUsername = false;
      state.isOpenForBlockingChat = false;
      state.isOpenForArchiveChat = false;
      state.isOpenForDeletingChat = false;
    },
    clearMessageInput: (state, action) => {
      state.clearInput = "";
    },
  },
});

export const {
  openModal,
  openModalForChangeUserDetails,
  openModalForChangeUsername,
  openModalForBlockingChat,
  openModalForArchiveChat,
  openModalForDeletingChat,
  closeModal,
  clearMessageInput,
} = modalSlice.actions;

export default modalSlice.reducer;
