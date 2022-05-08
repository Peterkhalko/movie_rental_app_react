const Pagination = (props) => {
  console.log(props);
  return (
    <div className="container">
      <div className="flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">
            <li className="page-item disabled"></li>
            <li className="page-item">
              <a
                className="page-link text-xl py-3 px-6 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-md text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="#"
              >
                1
              </a>
            </li>
            <li className="page-item active">
              <a
                className="page-link text-xl py-3 px-6 relative block border-0 bg-blue-600 outline-none transition-all duration-300 rounded-md text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                href="#"
              >
                2 <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link text-xl py-3 px-6 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-md text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="#"
              >
                3
              </a>
            </li>
            <li className="page-item"></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Pagination;
