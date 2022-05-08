import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieServices from "../../services/movieServices";
const initialState = {
  movies: [],
};
export const createMovie = createAsyncThunk("movie/create", async (data) => {
  const res = await movieServices.create(data);
  return res.data;
});
export const retrieveMovies = createAsyncThunk("movies/retrieve", async () => {
  const res = await movieServices.getAll();
  return res.data;
});
export const updateMovie = createAsyncThunk("movie/update", async (data) => {
  const res = await movieServices.update(data);
  return res.data;
});
export const deleteMovie = createAsyncThunk("movie/delete", async (_id) => {
  const res = await movieServices.remove(_id);
  return res.data;
});

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: {
    [createMovie.fulfilled]: (state, action) => {
      state.movies.push(action.payload);
    },
    [retrieveMovies.fulfilled]: (state, action) => {
      return { movies: [...action.payload] };
    },
    [updateMovie.fulfilled]: (state, action) => {
      const index = state.movies.findIndex(
        (movie) => movie._id === action.payload.id
      );

      state.movie.splice(index, 1, action.payload);
    },
    [deleteMovie.fulfilled]: (state, action) => {
      let index = state.movies.findIndex(
        (movie) => movie._id === action.payload._id
      );
      state.movies.splice(index, 1);
    },
  },
});

export const { reducer } = movieSlice;
export default reducer;
