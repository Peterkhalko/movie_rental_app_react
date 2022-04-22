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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/app" element={<App />}>
        <Route path="/app/movie" element={<Movie />} />
        <Route path="/app/genre" element={<Genre />} />
        <Route path="/app/rental" element={<Rental />} />
        <Route path="/app/customer" element={<Customer />} />
        <Route path="/app/login" element={<Login />} />
        <Route path="/app/register" element={<Register />} />
      </Route>
    </Routes>
  </Router>
);

reportWebVitals();
