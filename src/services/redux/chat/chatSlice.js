import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchQuery: '',
    openDetails: false,
};

const slice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
      setSearchQuery: (state, action) => {
        state.searchQuery = action.payload;
      },
      toggleChatDetails: (state, action) => {
        state.openDetails = !state.openDetails;
      }
    },
  });

  export const { setSearchQuery, toggleChatDetails } = slice.actions;
  export default slice.reducer;