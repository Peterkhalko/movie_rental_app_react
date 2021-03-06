import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRentals } from "../../resources/rentals/rentalSlice";
import { retrieveCustomers } from "../../resources/customer/customerSlice";
import { retrieveMovies } from "../../resources/movie/movieSlice";
import { useEffect } from "react";

const schema = yup.object().shape({
  customerId: yup.string().required(),
  movieId: yup.string().required(),
});
const RentalForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveCustomers());
    dispatch(retrieveMovies());
  }, []);
  const customers = useSelector((state) => state.customerReducer.customers);
  const movies = useSelector((state) => state.movieReducer.movies);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    if (data.customerId == "customer" || data.movieId == "movie") {
      alert("Please select valid customer and movie");
    } else {
      dispatch(createRentals(data));
      navigate("/app/rental");
    }
  };
  return (
    <div className="register-container flex justify-center m-2">
      <div className="block p-6 rounded-lg   shadow-lg bg-white max-w-md ">
        <span className="flex justify-center">Add rental Details</span>

        <form className="m-8" onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <select
                defaultValue={"customer"}
                className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="customerId"
                {...register("customerId")}
              >
                <option value="customer" disabled>
                  customer
                </option>{" "}
                {customers.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <select
                defaultValue={"movie"}
                className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="movieId"
                {...register("movieId")}
              >
                <option value="movie" disabled>
                  movie
                </option>

                {movies.map((m) => (
                  <option key={m._id} value={m._id}>
                    {m.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RentalForm;
