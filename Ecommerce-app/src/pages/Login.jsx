import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-[80vh] py-10">
      <div className="grid grid-cols-2 max-w-xl m-auto rounded-lg shadow-2xl ">
        <div className="p-10 rounded-l-lg text-center">
          <h2 className="font-bold text-xl">Sign in</h2>
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
          <p>or use your account.</p>
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
            <p>forgot your password?</p>
            <button
              type="submit"
              className="bg-red-400 text-white rounded-full text-xs font-bold border-2 px-5 py-1 border-red-400"
            >
              SIGN IN
            </button>
          </form>
        </div>
        <div className="bg-red-400 p-12 text-white text-center rounded-r-lg flex">
          <div className="m-auto flex items-center flex-col gap-3">

          <h2 className="font-black text-xl">Hello, Friends!</h2>
          <p>Enter your personal details and start shopping with us</p>
          <Link
            to="/sign-up/register"
            className="bg-red-400 rounded-full font-bold border-2 px-5 py-1 text-xs border-amber-50"
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
