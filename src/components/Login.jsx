import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(10).required(),
});
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <div className="register-container flex justify-center m-2">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md ">
        <span className="header-font p-8 mb-8">Login</span>

        <form className="m-8" onSubmit={handleSubmit(onSubmitHandler)}>
          <div class="form-group mb-6">
            <input
              type="email"
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
              id="exampleInput125"
              placeholder="Email address"
              {...register("email")}
            />
            <p className="text-red-900">{errors.email?.message}</p>
          </div>
          <div class="form-group mb-6">
            <input
              type="password"
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
              id="exampleInput126"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <div class=" mb-6">
            <div class="form-group form-check"></div>
            <a
              href="#!"
              class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Forgot password?
            </a>
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
            Sign in
          </button>

          <div className="mt-7">
            <div className="flex justify-center items-center">
              <label className="mr-2">New User ?</label>
              <a
                href="#"
                className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
              >
                <Link to="/app/Register">Sign up</Link>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
