import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Products from "./Products";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Shop = () => {
  const { products, search } = useContext(ProductContext);

  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([1, 37000]);
  const [rating, setRating] = useState(0);
  const [sortBy, setSortBy] = useState("default");

  const categories = [...new Set(products.map((product) => product.category))];

  const clearFilters = () => {
    setCategory("all");
    setPriceRange([0, 37000]);
    setRating(0);
    setSortBy("default")
  }

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

  return (
    <div className="py-5">
      <h1 className="font-bold text-2xl text-center">Shop</h1>
      <div className="flex px-5 py-5 gap-6">
        {/* ===== Filter Sidebar ===== */}
        <aside className="w-56 shrink-0 border p-3 h-fit">
          <div className="flex justify-between items-center mb-4">
            <h2>Filter</h2>
            <button onClick={clearFilters} className="underline">
              Clear
            </button>
          </div>

          <h3 className="mb-2">Category</h3>

          <div className="flex flex-col gap-1 max-h-[60vh] overflow-auto">
            <label>
              <input
                type="radio"
                name="category"
                value="all"
                checked={category === "all"}
                onChange={() => setCategory("all")}
              />{" "}
              All
            </label>

            {categories.map((item) => (
              <label key={item} className="capitalize">
                <input
                  type="radio"
                  name="category"
                  value={item}
                  checked={category === item}
                  onChange={() => setCategory(item)}
                />{" "}
                {item}
              </label>
            ))}
          </div>

          <div className="mt-6">
            <h3>Price</h3>
            <Slider
              range
              min={0}
              max={40000}
              value={priceRange}
              onChange={setPriceRange}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>${priceRange[0].toLocaleString()}</span>
              <span>${priceRange[1].toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-3">Rating</h3>
            
            {[4.5, 4, 3.5, 3].map((value) => (
              <label key={value} className="flex items-center gap-1 mb-1">
                <input type="radio"
                 name="rating"
                 value={value}
                 checked={rating === value}
                 onChange={() => setRating(value)}
                 />
                 <span>⭐ {value} & above </span>
                </label>
            ))}
          </div>

          <div className="mt-6">
            <h3>Sort By</h3>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="boder p-2 w-full">
              <option value="default">Default</option>
              <option value="price-low">Price Low-High</option>
              <option value="price-high">Price High-Low</option>
              <option value="rating-high">Rating High-Low</option>
            </select>
          </div>
        </aside>

        {/* ===== Product ===== */}
        <main className="flex-1">
          {filteredProducts.length === 0 && (
            <div className="">
              <h2 className="text-center p-10 text-2xl">No Product Found</h2>
              <hr />
            </div>
          )}

          <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-h-[150vh] overflow-auto ">
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
