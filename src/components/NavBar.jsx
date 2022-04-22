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
          <span style={{ "font-family": "Niconne", "font-size ": "40px" }}>
            {" "}
            <a href="/">Movie Rental</a>
          </span>
        </span>
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <NavLink
            to="/app/movie"
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
            to="/app/genre"
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
            to="/app/rental"
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
            to="/app/Customer"
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
            to="/app/login"
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
            to="/app/register"
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
