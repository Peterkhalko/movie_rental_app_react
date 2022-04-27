import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { getGenre } from "../../services/fakeGenreService";

const schema = yup.object().shape({
  title: yup.string().min(3).max(10).required(),
  genre: yup.string().min(2).max(24).required(),
  numberInStock: yup.number().required(),
  dailyRentalRate: yup.number().required(),
});

const MovieForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <div className="register-container flex justify-center m-2">
      <div class="block p-6 rounded-lg   shadow-lg bg-white max-w-md ">
        <span className="header-font p-8 mb-8">Add movie</span>

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
              id="title"
              placeholder="Enter movie title"
              {...register("title")}
            />
            <p className="text-red-900">{errors.title?.message}</p>
          </div>
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
              id="genre"
              placeholder="Enter Genre Id"
              {...register("genre")}
            />
            <p className="text-red-900">{errors.genre?.message}</p>
          </div>
          <div class="form-group mb-6">
            <input
              type="number"
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
              id="numberInStock"
              placeholder="Enter number in stock"
              {...register("numberInStock")}
            />
            <p className="text-red-900">{errors.numberInStock?.message}</p>
          </div>
          <div class="form-group mb-6">
            <input
              type="number"
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
              id="dailyRentalRate"
              placeholder="Daily rental rate in Rs"
              {...register("dailyRentalRate")}
            />
            <p className="text-red-900">{errors.dailyRentalRate?.message}</p>
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

export default MovieForm;
