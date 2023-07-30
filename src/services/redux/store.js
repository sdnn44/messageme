import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/modalSlice';
import chatReducer from './chat/chatSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    chat: chatReducer,
  },

});