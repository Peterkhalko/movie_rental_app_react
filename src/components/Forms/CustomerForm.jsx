import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().min(3).max(10).required(),
  phone: yup.string().min(10).max(10).required(),
  isGold: yup.boolean(),
});

const CustomerForm = () => {
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
        <span className="header-font p-8 mb-8">Add Customers</span>

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
              placeholder="Enter Name"
              {...register("name")}
            />
            <p className="text-red-900">{errors.name?.message}</p>
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
              id="phone"
              placeholder="Enter phone"
              {...register("phone")}
            />
            <p className="text-red-900">{errors.phone?.message}</p>
          </div>
          <div class="form-group mb-6">
            <div class="form-group form-check  mb-6">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="isGold"
                {...register("isGold")}
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="isGold"
              >
                is Gold member
              </label>
            </div>
            <p className="text-red-900">{errors.isGold?.message}</p>
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

export default CustomerForm;
