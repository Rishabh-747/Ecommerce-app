import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Products from "./Products";

const Shop = () => {
  const { products, search } = useContext(ProductContext);

  const [category, setCategory] = useState("all");

  const categories = [...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category === "all" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="py-5">
      <h1 className="font-bold text-2xl text-center">Shop</h1>
      <div className="flex px-5 py-5 gap-6">
        {/* ===== Filter Sidebar ===== */}
        <aside className="w-56 shrink-0 border p-3 h-fit">
          <div className="flex justify-between items-center mb-4">
            <h2>Filter</h2>
            <button onClick={() => setCategory("all")} className="underline">
              Clear
            </button>
          </div>

          <h3>Category</h3>

          <div className="flex flex-col gap-1">
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
        </aside>

        {/* ===== Product ===== */}
        <main className="flex-1">
          {search && filteredProducts.length === 0 && (
            <div className="">
              <h2 className="text-center p-10 text-2xl">No Product Found</h2>
              <hr />
            </div>
          )}

          <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] ">
            {filteredProducts.length > 0
              ? filteredProducts.map((product) => (
                  <Products key={product.id} product={product} />
                ))
              : products.map((product) => (
                  <Products key={product.id} product={product} />
                ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
