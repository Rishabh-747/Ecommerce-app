import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Hero from "../assets/Hero.png";
import Products from "../components/Products";
const Home = () => {
  const { products, loading, error } = useContext(ProductContext);

  const featuredProducts = products.slice(4, 14);

  const categories = [...new Set(products.map((product) => product.category))];

  const categoryImages = {};

  categories.forEach((category) => {
    const product = products.find((product) => product.category === category);

    categoryImages[category] = product?.thumbnail;
  });

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-xl font-semibold">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-xl font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="">
      {/* ===== Hero Section ===== */}
      <section className="">
        <div className="relative h-100 md:h-137 overflow-hidden ">

          {/* ====== Hero Image ====== */}
          <img src={Hero} alt="hero image" className="h-full w-full object-cover"/>

          {/* ====== Overlay ====== */}
          <div className="absolute inset-0 bg-black/20"></div>
          <Link
            to="/shop"
            className="absolute border border-black bottom-15 md:left-10 hover:bg-white transition-all duration-100 ease-in-out active:scale-95 hover:text-black font-semibold left-6 text-white bg-black rounded-lg px-5 py-3"
          >
            Shop now →
          </Link>
        </div>
      </section>

      <div className="px-[5%]">
        {/* ===== Category Section ===== */}
        <section className="my-10 ">
          <h2 className="py-2 font-bold text-3xl">Shop by Category</h2>
          <div className="flex gap-4 rounded-b-lg overflow-x-auto">
            {categories.map((category) => (
              <Link
                className="bg-gray-50 hover:bg-gray-200 transition-all duration-200 rounded-lg p-2"
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
        <section className="py-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-3xl py-2">Featured Products</h2>
            <Link to="/shop" className="font-semibold hover:underline">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {featuredProducts.map((product) => (
              <Products key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* ====== Why Shop with Us ====== */}
        <section className="py-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">Why Shop With Us? </h2>
            <p className="text-gray-500 mt-2">
              We make your shopping experience simple and reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* ===== Free Shipping ===== */}
            <div className="border rounded-xl p-5 text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-lg font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-500 text-sm">
                Enjoy free shipping on all eligible orders.
              </p>
            </div>

            {/* Secure Payment  */}
            <div className="text-center border rounded-xl p-5">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-bold mb-2">Secure Payment</h3>
              <p className="text-gray-500 text-sm">
                Your payment information is safe and secure.
              </p>
            </div>

            {/* ===== Easy Returns ===== */}
            <div className="border rounded-xl p-5 text-center">
              <div className="text-3xl mb-4">↩️</div>
              <h3 className="text-lg font-bold mb-2">Easy Returns</h3>
              <p className="text-gray-500 text-sm">
                Simple and hassle-free returns when you need them.
              </p>
            </div>
            {/* ===== Customer Support ===== */}
            <div className="border rounded-xl p-5 text-center">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-500 text-sm">
                Our support team is always here to help you.
              </p>
            </div>
          </div>
        </section>

        {/* ====== CTA Section ====== */}
        <section className="py-10">
          <div className="bg-black text-white rounded-2xl px-6 py-12 md:px-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">Find Something You'll Love</h2>
            <p className="text-gray-300 mt-3 mb-6 max-w-xl mx-auto">Explore our collections and discover our products made for your everyday needs.</p>
            <Link to="/shop" className="px-6 py-3 bg-white text-black rounded-lg border-2 border-white transition hover:bg-black hover:text-white">Shop Now →</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
