import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Products from "../components/Products";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Shop = () => {
  const { products, search, loading, error } = useContext(ProductContext);

  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([1, 37000]);
  const [rating, setRating] = useState(0);
  const [sortBy, setSortBy] = useState("default");
  const [filterOpen, setFilterOpen] = useState(false);

  const categories = [...new Set(products.map((product) => product.category))];

  const clearFilters = () => {
    setCategory("all");
    setPriceRange([1, 37000]);
    setRating(0);
    setSortBy("default");
  };

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category === "all" || product.category === category;

    const matchPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    const matchRating = product.rating >= rating;

    return matchSearch && matchCategory && matchPrice && matchRating;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") {
      return a.price - b.price;
    }

    if (sortBy === "price-high") {
      return b.price - a.price;
    }

    if (sortBy === "rating-high") {
      return b.rating - a.rating;
    }

    return 0;
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
    <div className="py-5">
      {/* ===== Shop Heading ===== */}
      <h1 className="font-bold text-2xl text-center">Shop</h1>

      {/* ===== Mobile Filter Button ===== */}
      <div className="flex justify-end px-5 py-5 lg:hidden">
        <button
          onClick={() => setFilterOpen(true)}
          className="border border-black flex gap-2 items-center justify-center rounded-lg px-4 py-2 font-medium hover:bg-black hover:text-white transition"
        >
          <FaBars />
          <span>Filter</span>
        </button>
      </div>

      {/* ===== Mobile Overlay ===== */}
      {filterOpen && (
        <div
          onClick={() => setFilterOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        ></div>
      )}

      <div className="flex flex-col lg:flex-row px-5 py-5 gap-6">
        {/* ===== Filter Sidebar ===== */}
        <aside
          className={`
    w-full lg:w-56 shrink-0 border border-gray-300 bg-white p-4 h-fit
    lg:block
    ${
      filterOpen
        ? "fixed top-4 left-4 right-4 z-50 rounded-xl shadow-xl max-h-[90vh] overflow-y-auto"
        : "hidden"
    }
    lg:static lg:shadow-none lg:max-h-none lg:overflow-visible
  `}
        >
          {/* ===== Filter Header ===== */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-bold text-lg">Filters</h2>

            <div className="flex items-center gap-4">
              <button
                onClick={clearFilters}
                className="text-sm underline hover:no-underline"
              >
                Clear
              </button>

              {/* Mobile Close Button */}
              <button
                onClick={() => setFilterOpen(false)}
                className="lg:hidden text-sm underline hover:no-underline"
              >
                Apply
              </button>
              <button
                onClick={() => setFilterOpen(false)}
                className="lg:hidden w-8 h-8 border rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* ===== Category ===== */}
          <div className="pb-5 border-b">
            <h3 className="font-semibold mb-3">Category</h3>

            <div className="flex flex-col gap-2 max-h-56 overflow-auto">
              <label className="flex items-center gap-2 cursor-pointer capitalize">
                <input
                  type="radio"
                  name="category"
                  value="all"
                  checked={category === "all"}
                  onChange={() => setCategory("all")}
                  className="accent-black"
                />
                All
              </label>

              {categories.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 cursor-pointer capitalize"
                >
                  <input
                    type="radio"
                    name="category"
                    value={item}
                    checked={category === item}
                    onChange={() => setCategory(item)}
                    className="accent-black"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* ===== Price ===== */}
          <div className="py-5 border-b">
            <h3 className="font-semibold mb-4">Price</h3>

            <Slider
              range
              min={0}
              max={40000}
              value={priceRange}
              onChange={setPriceRange}
              className="w-full"
            />

            <div className="flex justify-between mt-3 text-sm font-medium">
              <span>${priceRange[0].toLocaleString()}</span>
              <span>${priceRange[1].toLocaleString()}</span>
            </div>
          </div>

          {/* ===== Rating ===== */}
          <div className="py-5 border-b">
            <h3 className="font-semibold mb-3">Rating</h3>

            <div className="flex flex-col gap-2">
              {[4.5, 4, 3.5, 3].map((value) => (
                <label
                  key={value}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="rating"
                    value={value}
                    checked={rating === value}
                    onChange={() => setRating(value)}
                    className="accent-black"
                  />

                  <span>⭐ {value} & above</span>
                </label>
              ))}
            </div>
          </div>

          {/* ===== Sort ===== */}
          <div className="pt-5">
            <h3 className="font-semibold mb-3">Sort By</h3>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full outline-none focus:border-black"
            >
              <option value="default">Default</option>
              <option value="price-low">Price Low-High</option>
              <option value="price-high">Price High-Low</option>
              <option value="rating-high">Rating High-Low</option>
            </select>
          </div>
        </aside>

        {/* ===== Products ===== */}
        <main className="flex-1">
          {filteredProducts.length === 0 && (
            <div>
              <h2 className="text-center p-10 text-2xl">No Product Found</h2>
              <hr />
            </div>
          )}

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
            {sortedProducts.map((product) => (
              <Products key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
