import { getGenres } from "../services/fakeGenreService";
import { useSelector, useDispatch } from "react-redux";
import { deleteGenre } from "../resources/genre/genreSlice";
import { Link } from "react-router-dom";
function Genre() {
  const genres = useSelector((state) => state.genreReducer.genres);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col  justify-end genre-container mt-10 bg-slate-50 p-10 shadow-2xl">
      <h1 className="underline header-font" data-aos="zoom-in-left">
        Genres
      </h1>
      <table className="table-auto">
        <tbody>
          {genres.map((g) => (
            <tr
              data-aos="zoom-in-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="table-row shadow-md rounded-lg mt-6"
              key={g._id}
            >
              <td className="font-bold ">
                <Link to={`/app/genre/${g._id}`}>{g.name}</Link>{" "}
              </td>
              <button
                className="inline-block px-6 py-2.5 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500 p-2  bg-red-600
               text-white  rounded-full "
                onClick={() => {
                  dispatch(deleteGenre(g._id));
                }}
              >
                Delete
              </button>
            </tr>
          ))}
          <tr>
            <button>
              <Link to="/app/genre/new">
                <td>
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
                </td>
              </Link>
            </button>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Genre;
