import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import movieServices from "../../services/movieServices";
const initialState = {
  movies: [],
  count: "",
};
export const retrieveMovies = createAsyncThunk("movies/retrieve", async () => {
  const res = await movieServices.getAll();
  return res.data;
});

export const createMovie = createAsyncThunk(
  "movie/create",
  async (data, thunkAPI) => {
    const token = thunkAPI.getState().loginReducer.token;
    const res = await movieServices.create(data, token);
    return res.data;
  }
);

export const updateMovie = createAsyncThunk(
  "movie/update",
  async (data, thunkAPI) => {
    const token = thunkAPI.getState().loginReducer.token;
    const res = await movieServices.update(data);
    return res.data;
  }
);
export const deleteMovie = createAsyncThunk(
  "movie/delete",
  async (_id, thunkAPI) => {
    const token = thunkAPI.getState().loginReducer.token;
    const res = await movieServices.remove(_id, token);
    return res.data;
  }
);
export const retrieveMoviesCount = createAsyncThunk(
  "movies/retrieveMoviesCount",
  async (genreName) => {
    const res = await movieServices.getMovieCount(genreName);
    return res.data;
  }
);
export const retrievePaginatedMovie = createAsyncThunk(
  "movies/retrieve",
  async (data) => {
    const res = await movieServices.pfs(data);
    return res.data;
  }
);
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: {
    [createMovie.fulfilled]: (state, action) => {
      state.movies.push(action.payload);
    },
    [retrieveMovies.fulfilled]: (state, action) => {
      state.movies.push([...action.payload]);
    },
    [retrievePaginatedMovie.fulfilled]: (state, action) => {
      state.movies = [];
      state.movies.push(action.payload);
    },
    [retrieveMoviesCount.fulfilled]: (state, action) => {
      state.count = action.payload.count;
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
