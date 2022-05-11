import Search from "./Search";
import { useDispatch } from "react-redux";
const Filter = (props) => {
  const dispatch = useDispatch();
  const searchProps = { search: props.searchFunction };
  const genreFilter = [];
  for (let index = 1; index < props.genres.length; index++) {
    genreFilter.push(
      <li key={index}>
        <button
          type="button"
          value={props.genres[index].name}
          id={props.genres[index].name}
          className="
          text-center
          px-6
          py-2
          border-b border-gray-200
          w-full
          hover:bg-gray-100 hover:text-gray-500
          focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
          transition
          duration-500
          cursor-pointer
        "
          onClick={(event) => {
            props.filterFunction(event.target.id);
          }}
        >
          {props.genres[index].name}
        </button>
      </li>
    );
  }

  const allGenre = (
    <li key="all-genre">
      <button
        type="button"
        value="all-genre"
        id="all-genre"
        className="
          text-center
          px-6
          py-2
          border-b border-gray-200
          w-full
          hover:bg-gray-100 hover:text-gray-500
          focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
          transition
          duration-500
          cursor-pointer
        "
        onClick={() => {
          props.filterFunction("all genre");
        }}
      >
        All Genre
      </button>
    </li>
  );
  genreFilter.unshift(allGenre);
  return (
    <div className="flex flex-col justify-center overflow-x-hidden">
      <Search {...searchProps}></Search>
      <div className="bg-white rounded-lg border border-gray-200  text-gray-900">
        <div className="container flex flex-col">
          <ul className="flex flex-col list-style-none">{genreFilter} </ul>{" "}
        </div>
      </div>
    </div>
  );
};
export default Filter;
