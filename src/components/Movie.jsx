import { useEffect, useState } from "react";
import { heartIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteMovie, retrieveMovies } from "../resources/movie/movieSlice";
import { useDispatch } from "react-redux";
import Pagination from "./Common/Pagination";
function Movie() {
  let counter = 1;
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);
  useEffect(() => {
    dispatch(retrieveMovies());
  }, []);

  return movies.length != 0 ? (
    <div className=" mt-10 bg-slate-50 p-10 shadow-2xl">
      {/* table content */}
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      in stocks
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Daily Rental
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Liked
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map((m) => (
                    <tr
                      className="table-row shadow-md rounded-lg mt-6"
                      key={m._id}
                    >
                      <td>{counter++}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {m.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {m.numberInStocks}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {m.dailyRentalRate}
                      </td>
                      <td className=" text-center flex justify-center">
                        {m.liked == true ? (
                          <span>
                            <svg
                              className="w-8 h-8 "
                              fill="red"
                              viewBox="0 0 20 20"
                            >
                              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                          </span>
                        ) : (
                          <svg
                            className="w-8 h-8"
                            fill="black"
                            viewBox="0 0 20 20"
                          >
                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                          </svg>
                        )}
                      </td>

                      <td>
                        <button
                          className="inline-block px-6 py-2.5 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500  bg-red-600
               text-white  rounded-full "
                          onClick={() => {
                            dispatch(deleteMovie(m._id));
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}

                  <tr className="flex justify-center mt-5">
                    <td>
                      <button>
                        <Link to="/app/movie/new">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="red"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </Link>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* table content */}
      <Pagination count={movies.length}></Pagination>
    </div>
  ) : (
    <div className="no-data-container text-center mt-5 bg-slate-50  shadow-2xl p-5">
      <p>No Movies Avaialbe</p>
      <p>would you like to add movie?</p>
      <button className="add-customer-btn mt-5 ">
        <Link to="/app/movie/new">
          <svg
            className="h-8 w-8 text-violet-600   hover:text-lg add-user-svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
        </Link>
      </button>
    </div>
  );
}
export default Movie;
