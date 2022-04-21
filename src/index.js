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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="movie" element={<Movie />} />
        <Route path="genre" element={<Genre />} />
        <Route path="rental" element={<Rental />} />
        <Route path="customer" element={<Customer />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </Router>
);

reportWebVitals();
