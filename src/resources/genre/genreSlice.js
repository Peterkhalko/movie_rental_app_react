import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import genreServices from "../../services/genreServices";

const initialState = {
  genres: [],
};
export const retrieveGenres = createAsyncThunk("genres/retrieve", async () => {
  const res = await genreServices.getAll();
  return res.data;
});
export const createGenre = createAsyncThunk("genres/create", async (genre) => {
  const res = await genreServices.create({ name: genre.name });
  return res.data;
});

export const updateGenre = createAsyncThunk("genres/update", async (data) => {
  const res = await genreServices.update(data._id, { name: data.name });
  return res.data;
});
export const deleteGenre = createAsyncThunk("genres/delete", async (id) => {
  const res = await genreServices.remove(id);
  return res.data;
});

export const genreSlice = createSlice({
  name: "genres",
  initialState,
  extraReducers: {
    [createGenre.fulfilled]: (state, action) => {
      state.genres.push(action.payload);
    },
    [retrieveGenres.fulfilled]: (state, action) => {
      state.genres = [...action.payload];
    },
    // [updateGenre.fulfilled]: (state, action) => {
    //   const index = state.genres.findIndex(
    //     (genre) => genre._id === action.payload.id
    //   );
    // },
    [deleteGenre.fulfilled]: (state, action) => {
      let index = state.genres.findIndex(
        (genre) => genre._id === action.payload._id
      );
      state.genres.splice(index, 1);
    },
  },
});

export const { reducer } = genreSlice;
export default reducer;
