import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Customer from "./components/Customer";
import Genre from "./components/Genre";
import Login from "./components/Login";
import Movie from "./components/Movie";
import Register from "./components/Register";
import Rental from "./components/Rental";
import reportWebVitals from "./reportWebVitals";
import Landing from "./Landing";
import GenreForm from "./components/Forms/GenreForm";
import MovieForm from "./components/Forms/MovieForm";
import CustomerForm from "./components/Forms/CustomerForm";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/app" element={<App />}>
          <Route path="/app/movie" element={<Movie />} />
          <Route path="/app/genre" element={<Genre />} />
          <Route path="/app/rental" element={<Rental />} />
          <Route path="/app/customer" element={<Customer />} />
          <Route path="/app/customer/new" element={<CustomerForm />} />
          <Route path="/app/login" element={<Login />} />
          <Route path="/app/register" element={<Register />} />
          <Route path="/app/genre/new" element={<GenreForm />} />
          <Route path="/app/genre/:genreId" element={<GenreForm />} />
          <Route path="/app/genre/movie" element={<MovieForm />} />
          <Route path="/app/movie/new" element={<MovieForm />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);

reportWebVitals();
