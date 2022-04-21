import { Link, NavLink } from "react-router-dom";
import { VideoCameraIcon } from "@heroicons/react/solid";
function NavBar() {
  return (
    <nav className="bg-slate-800  p-3 ">
      <div className="container flex  justify-between items-center mx-auto">
        <span className="italic flex flex-row  font-semibold  text-white text-2xl movie-logo">
          <span className=" pr-1">
            <VideoCameraIcon className="h-8 w-8"></VideoCameraIcon>
          </span>
          <span style={{ "font-family": "Niconne", "font-size": "40px" }}>
            {" "}
            Movie Rental
          </span>
        </span>
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <NavLink
            to="movie"
            className="text-zinc-100 text-lg hover:text-cyan-400"
            style={({ isActive }) => {
              return {
                "font-style": isActive ? "italic" : "",
              };
            }}
          >
            Movies
          </NavLink>
          <NavLink
            to="genre"
            className="text-zinc-100 text-lg hover:text-cyan-400"
            style={({ isActive }) => {
              return {
                "font-style": isActive ? "italic" : "",
              };
            }}
          >
            Genre
          </NavLink>
          <NavLink
            to="rental"
            className="text-zinc-100 text-lg hover:text-cyan-400"
            style={({ isActive }) => {
              return {
                "font-style": isActive ? "italic" : "",
              };
            }}
          >
            Rentals
          </NavLink>
          <NavLink
            to="Customer"
            className="text-zinc-100 text-lg hover:text-cyan-400"
            style={({ isActive }) => {
              return {
                "font-style": isActive ? "italic" : "",
              };
            }}
          >
            Customer
          </NavLink>
          <NavLink
            to="login"
            className="text-zinc-100 text-lg hover:text-cyan-400"
            style={({ isActive }) => {
              return {
                "font-style": isActive ? "italic" : "",
              };
            }}
          >
            Login
          </NavLink>
          <NavLink
            to="register"
            className="text-zinc-100 text-lg hover:text-cyan-400"
            style={({ isActive }) => {
              return {
                "font-style": isActive ? "italic" : "",
              };
            }}
          >
            Register
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
