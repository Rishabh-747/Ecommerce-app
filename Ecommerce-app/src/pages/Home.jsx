import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Hero from "../assets/Hero.png";
const Home = () => {
  const { products } = useContext(ProductContext);

  const categories = [...new Set(products.map((product) => product.category))];

  const categoryImages = {};

  categories.forEach((category) => {
    const product = products.find((product) => product.category === category);

    categoryImages[category] = product?.thumbnail;
  });

  return (
    <div className="">
      {/* ===== Hero Section ===== */}
      <section className="bg-gray-200">
        <div className="relative">
          <img src={Hero} alt="hero image" />
          <Link
            to="/shop"
            className="absolute border bottom-25 hover:bg-white transition-all duration-300 ease-in-out hover:scale-105 hover:text-black left-10 text-white bg-black rounded-lg px-5 py-3"
          >
            Shop now
          </Link>
        </div>
      </section>

      {/* ===== Category Section ===== */}
      <div className="px-[5%] py-10">
        <section className="py-3">
          <h2 className="py-5 font-bold text-xl">Shop by Category</h2>
          <div className="flex gap-4 rounded-b-lg overflow-x-auto">
            {categories.map((category) => (
              <Link
                className="bg-gray-50 rounded-lg p-2"
                key={category}
                to={`/category/${category}`}
              >
                <div className=" flex flex-col justify-center items-center w-50">
                  <img
                    className=""
                    src={categoryImages[category]}
                    alt={category}
                  />
                  <h3 className="capitalize ">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== Featured Section ===== */}
        <section>
          <h2 className="font-bold text-xl">Featured Products</h2>
          <p>Product 1 | Product 2 | Product 3 | Product 4</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
