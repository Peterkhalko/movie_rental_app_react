import { getMovies } from "../services/fakeMovieService";
import { useState } from "react";
import { heartIcon } from "@heroicons/react/solid";

function Movie() {
  const [movies, setMovie] = useState(getMovies());
  const deleteMovie = (id) => {
    let movie = movies.filter((m) => {
      return m._id !== id;
    });
    setMovie(movie);
  };
  return (
    <div className="container flex flex-col  justify-center genre-container mt-10 bg-slate-50 p-10 shadow-2xl">
      <table>
        <tbody>
          <tr data-aos="zoom-in-left">
            <th className="header-font">Title</th>
            <th className="header-font">in stocks</th>
            <th className="header-font">Daily Rental</th>
            <th className="header-font">liked</th>
          </tr>
          {movies.map((m) => (
            <tr
              data-aos="zoom-in-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="table-row shadow-md rounded-lg mt-6"
              key={m._id}
            >
              <td className="font-bold">{m.title}</td>
              <td className="font-bold">{m.numberInStock}</td>
              <td className="font-bold">{m.dailyRentalRate}</td>
              <td className="">
                {m.liked == true ? (
                  <svg className="w-8 h-8" fill="red" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="black" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                )}
              </td>
              {console.log(m.liked)}
              <button
                className="inline-block px-6 py-2.5 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500  bg-red-600
               text-white  rounded-full "
                onClick={() => {
                  deleteMovie(m._id);
                }}
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Movie;
