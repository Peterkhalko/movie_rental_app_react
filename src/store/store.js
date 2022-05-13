import { configureStore, current } from "@reduxjs/toolkit";
import genreReducer from "../resources/genre/genreSlice";
import customerReducer from "../resources/customer/customerSlice";
import registerReducer from "../resources/users/registerSlice";
import loginReducer from "../resources/login/loginSlice";
import rentalReducer from "../resources/rentals/rentalSlice";
import movieReducer from "../resources/movie/movieSlice";
export const store = configureStore({
  reducer: {
    genreReducer,
    customerReducer,
    registerReducer,
    loginReducer,
    rentalReducer,
    movieReducer,
  },
  devTools: true,
});
