import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  clearInput: "",
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
    clearMessageInput: (state, action) => {
      state.clearInput = "";
    },
  },
});

export const { openModal, closeModal, clearMessageInput } = modalSlice.actions;

export default modalSlice.reducer;