import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-[5%]">
      <div className="bg-gray-100"></div>
      <div className="">
        <h2 className="font-bold text-xl">Search by Category</h2>
        <div className="flex gap-4">
          <Link to="/products">
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full"
                src="https://insightlancer.com/wp-content/uploads/2023/12/e-commerce-website-ui-design.png"
                alt="category"
              />
              <h3>Games</h3>
            </div>
          </Link>
          <Link to="/products">
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full"
                src="https://insightlancer.com/wp-content/uploads/2023/12/e-commerce-website-ui-design.png"
                alt="category"
              />
              <h3>Men</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
