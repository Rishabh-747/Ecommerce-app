import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-[80vh] py-10">
      <div className="grid grid-cols-2 max-w-xl m-auto rounded-lg shadow-2xl ">
        <div className="bg-red-400 p-12 text-white rounded-l-lg flex ">
          <div className="m-auto flex items-center flex-col gap-3">
            <h2 className="font-black text-xl">Welcome back!</h2>
            <p className="text-sm text-center">
              To keep connected with us, please login with your registered info
            </p>
            <Link
              to="/login"
              className="bg-red-400 rounded-full border-2 text-xs px-6 py-1 border-amber-50"
            >
              SIGN IN
            </Link>
          </div>
        </div>
        <div className="p-10 rounded-r-lg text-center">
          <h2 className="font-black text-xl">Create Account</h2>
          <div className="flex gap-3 justify-center">
            <a href="https://google.com" target="blank">
              G
            </a>
            <a href="https://facebook.com" target="blank">
              F
            </a>
            <a href="https://linkedin.com.in" target="blank">
              L
            </a>
          </div>
          <p className="text-sm mb-2">or use your email for registration</p>
          <form action="" className="">
            <input
              type="text"
              placeholder="Name "
              className="mb-2 px-3 py-1 bg-gray-100 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="mb-2 px-3 py-1 bg-gray-100 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-4 px-3 py-1 bg-gray-100 w-full"
            />

            <button
              type="submit"
              className="bg-red-400 text-white rounded-full text-xs border-2 px-6 py-1 border-red-400"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
