import { createSlice } from "@reduxjs/toolkit";

import { getGenres, genres } from "../../services/fakeGenreService";

const initialState = {
  genres: getGenres(),
};

export const genreSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    deleteGenre: (state, action) => {
      const index = state.genres.findIndex((g) => g._id === action.payload);
      state.genres.splice(index, 1);
    },
    addGenre: (state, action) => {
      genres.push(action.payload);
      console.log(genres);
    },
  },
});

export const { deleteGenre, addGenre } = genreSlice.actions;
export default genreSlice.reducer;
