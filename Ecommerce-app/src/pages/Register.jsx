import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-[80vh] py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-xl mx-auto rounded-lg shadow-2xl ">
        <div className="bg-black p-8 sm:p-12 text-white rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none flex ">
          <div className="m-auto flex items-center flex-col gap-3">
            <h2 className="font-black text-xl">Welcome back!</h2>
            <p className="text-sm text-center">
              To keep connected with us, please login with your registered info
            </p>
            <Link
              to="/login"
              className="bg-black rounded-full border-2 text-xs px-6 py-1 border-white hover:bg-white hover:text-black transition"
            >
              SIGN IN
            </Link>
          </div>
        </div>
        <div className="p-6 sm:p-10 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none text-center">
          <h2 className="font-black text-xl">Create Account</h2>
          <div className="flex gap-1 text-sm py-2 justify-center">
            <a
              href="https://google.com"
              target="_blank"
              className="border rounded-full border-gray-300 w-7 h-7 flex justify-center items-center hover:bg-black hover:text-white transition"
            >
              G
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="border rounded-full border-gray-300 w-7 h-7 flex justify-center items-center hover:bg-black hover:text-white transition"
            >
              F
            </a>
            <a
              href="https://linkedin.com/in"
              target="_blank"
              className="border rounded-full border-gray-300 w-7 h-7 flex justify-center items-center hover:bg-black hover:text-white transition"
            >
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
              className="bg-black text-white rounded-full text-xs border-2 px-6 py-1 border-black hover:bg-white hover:text-black transition"
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
