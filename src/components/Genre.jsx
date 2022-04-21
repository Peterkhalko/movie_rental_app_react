import { getGenres } from "../services/fakeGenreService";
import { useState } from "react";

function Genre() {
  const [genres, setGenre] = useState(getGenres());
  const deleteGenre = (id) => {
    let genre = genres.filter((g) => {
      return g._id !== id;
    });
    setGenre(genre);
  };
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
              <td className="font-bold ">{g.name}</td>
              <button
                className="inline-block px-6 py-2.5 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500 p-2  bg-red-600
               text-white  rounded-full "
                onClick={() => {
                  deleteGenre(g._id);
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
export default Genre;
