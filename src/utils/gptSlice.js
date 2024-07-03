import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    error: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    showError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { toggleGptSearch, showError } = gptSlice.actions;
export default gptSlice.reducer;
