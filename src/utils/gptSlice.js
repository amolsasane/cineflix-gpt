import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    error: null,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    removeGptMovies: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
    showError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { toggleGptSearch, showError, addGptMovies, removeGptMovies } =
  gptSlice.actions;
export default gptSlice.reducer;
