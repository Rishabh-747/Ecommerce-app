import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-[80vh] py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-xl m-auto rounded-lg shadow-2xl ">
        <div className="sm:p-10 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none text-center">
          <h2 className="font-bold text-xl">Sign in</h2>
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
          <p className="text-sm">or use your account.</p>
          <form action="" className="py-2">
            <input
              type="email"
              placeholder="Email"
              className="mb-2 px-3 py-1 bg-gray-100 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-2 px-3 py-1 bg-gray-100 w-full"
            />
            <p className="text-sm mb-2">forgot your password?</p>
            <button
              type="submit"
              className="bg-black text-white rounded-full text-xs border-2 px-6 py-1 border-black hover:bg-white hover:text-black transition"
            >
              SIGN IN
            </button>
          </form>
        </div>
        <div className="bg-black p-8 sm:p-12 text-white text-center rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none flex">
          <div className="m-auto flex items-center flex-col gap-3">
            <h2 className="font-black text-xl">Hello, Friends!</h2>
            <p className="text-sm">
              Enter your personal details and start shopping with us
            </p>
            <Link
              to="/register"
              className="bg-black rounded-full border-2 px-6 py-1 text-xs border-white hover:bg-white hover:text-black transition"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
