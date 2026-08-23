import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-[5%]">
      <section className="bg-gray-100"></section>
      <section className="">
        <h2 className="py-5 font-bold text-xl">Shop by Category</h2>
        <div className="flex gap-4 mb-4">
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
      </section>
      <section>
        <h2 className="font-bold text-xl">Featured Products</h2>
        <p>Product 1 | Product 2 | Product 3 | Product 4</p>
      </section>
    </div>
  );
};

export default Home;
