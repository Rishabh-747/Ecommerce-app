import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center">
      <h1 className="text-6xl sm:text-7xl font-black">404</h1>
      <h2 className="text-xl sm:text-2xl font-bold mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2 mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-black text-white rounded-lg border-2 hover:bg-white hover:text-black active:scale-95 ease-in active:bg-black active:text-white duration-75 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
