import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Pagination = (props) => {
  let pageNo;
  const pages = Math.ceil(props.count / 5);
  const li = [];
  for (pageNo = 1; pageNo <= pages; pageNo++) {
    li.push(
      <li className="page-item active" key={pageNo}>
        <button
          value={pageNo}
          className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          // to={dispatch(retrieveMoviesPagination(pageNo), [dispatch])}
        >
          {pageNo}
        </button>
      </li>
    );
  }
  return (
    <div className="container">
      <div className="flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">{li}</ul>
        </nav>
      </div>
    </div>
  );
};
export default Pagination;
