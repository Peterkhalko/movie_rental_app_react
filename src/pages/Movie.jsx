import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Sort from "../components/Common/Sort";
import NotLoggedIn from "../components/Common/NotLoggedIn";
import {
  deleteMovie,
  retrieveMoviesCount,
  retrievePaginatedMovie,
} from "../resources/movie/movieSlice";
import { retrieveGenres } from "../resources/genre/genreSlice";
import { useDispatch } from "react-redux";
import Pagination from "../components/Common/Pagination";
import Filter from "../components/Common/filter";
function Movie() {
  let counter = 1;
  const dispatch = useDispatch();
  const totalMoviesCount = useSelector((state) => state.movieReducer.count);
  let movies = useSelector((state) => state.movieReducer.movies);
  const genres = useSelector((state) => state.genreReducer.genres);
  const [currentGenre, setCurrentGenre] = useState("all genre");
  const [currentItemToSort, setcurrentItemToSort] = useState("");
  const [sortBy, setSortBy] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNo) => {
    setCurrentPage(pageNo);
    const skipValue = 5 * (pageNo - 1);
    dispatch(
      retrievePaginatedMovie({
        skip: skipValue,
        genre: currentGenre,
        currentItemToSort,
        sortBy,
      })
    );
  };
  const filterFunction = (genre) => {
    setCurrentGenre(genre);
    dispatch(retrieveMoviesCount(genre));
    dispatch(retrievePaginatedMovie({ genre }));
    dispatch(retrieveGenres());
  };
  let searchFunction = (title) => {
    dispatch(retrievePaginatedMovie({ title }));
    dispatch(retrieveMoviesCount(`titleSearch${title}`));
    setcurrentItemToSort(title);
  };
  let sortFunction = (sort, itemToSort) => {
    dispatch(retrievePaginatedMovie({ sort, itemToSort }));
    setcurrentItemToSort(itemToSort);
    setSortBy(sort);
  };
  let paginationProps = { totalMoviesCount, paginate };
  let filterProps = { genres, filterFunction, searchFunction };
  let sortProps = {
    sortFunction,
  };

  useEffect(() => {
    dispatch(retrieveMoviesCount("all genre"));
    const skip = {};
    skip.skip = 0;
    dispatch(retrievePaginatedMovie({ skip }));
    dispatch(retrieveGenres());
  }, []);

  const permit = useSelector((state) => state.loginReducer.token);
  return !permit ? (
    <NotLoggedIn></NotLoggedIn>
  ) : movies.length != 0 ? (
    <div className="flex flex-col  justify-end  mt-10 bg-slate-50  shadow-2xl p-5">
      <div className=" bg-slate-50 p-10 shadow-2xl">
        {/* <h1 className="flex flex-row justify-center">Rented Movie</h1> */}
        {/* offCanvas */}

        <div className="flex space-x-2">
          <div>
            <Link
              data-bs-toggle="offcanvas"
              to={"#offcanvasExample"}
              role="button"
              aria-controls="offcanvasExample"
            >
              <button
                className="flex flex-row space-x-1 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gear"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                </svg>
                <span> Action</span>
              </button>
            </Link>

            <div
              className="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header flex flex-row justify-end p-5">
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body  p-4 overflow-y-auto">
                <Filter {...filterProps}></Filter>
              </div>
            </div>
          </div>
        </div>
        {/* offCanvas */}
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
                        className="text-sm font-medium text-white px-6 py-4 "
                      >
                        #<span></span>
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 flex flex-row justify-center space-x-1"
                      >
                        <span className="flex flex-col justify-center">
                          Title
                        </span>
                        <Sort porp1={sortProps} prop2={"title"}></Sort>
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        {" "}
                        <Sort porp1={sortProps} prop2={"numberInStocks"}></Sort>
                        in stocks
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Daily Rental
                        <Sort
                          porp1={sortProps}
                          prop2={"dailyRentalRate"}
                        ></Sort>
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Liked
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 flex flex-row justify-center"
                      >
                        Title
                        <span className="flex flex-col">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="white"
                            className="bi bi-caret-up"
                          >
                            <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-caret-down"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                          </svg>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {movies[0].map((m) => (
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
                          {m.liked === true ? (
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
        <Pagination {...paginationProps}></Pagination>
      </div>
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
