import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { getGenre } from "../../services/fakeGenreService";
import { useSelector, useDispatch } from "react-redux";
import { addGenre } from "../../resources/genre/genreSlice";

const schema = yup.object().shape({
  name: yup.string().min(3).max(10).required(),
});
const GenreForm = () => {
  const genres = useSelector((state) => state.genreReducer.genres);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const params = useParams();

  useEffect(() => {
    console.log(params.genreId);
    const genreId = params.genreId;
    if (!genreId) return;
    const genre = getGenre(genreId);
    if (!genre) return;
    setValue("name", genre[0].name);
    setValue("_id", genre[0]._id);
  }, []);

  const onSubmitHandler = (data) => {
    dispatch(addGenre(data));
    reset();
  };
  return (
    <div className="register-container flex justify-center m-2">
      <div class="block p-6 rounded-lg   shadow-lg bg-white max-w-md ">
        <span className="header-font p-8 mb-8">Genre</span>

        <form className="m-8" onSubmit={handleSubmit(onSubmitHandler)}>
          <div class="form-group mb-6">
            <input
              type="text"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="name"
              placeholder="Enter Genre Name"
              {...register("name")}
            />
            <p className="text-red-900">{errors.name?.message}</p>
          </div>

          <button
            class="
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

export default GenreForm;
