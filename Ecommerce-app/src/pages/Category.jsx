import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import Products from "../components/Products";

const Category = () => {
  const { products, error, loading } = useContext(ProductContext);
  const { category } = useParams();

  const categoryProducts = products.filter(
    (product) => product.category === category,
  );

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
    <div className="px-[5%] py-5">
      <h1 className="py-2 font-bold text-2xl capitalize text-center">
        {category}
      </h1>
      {categoryProducts.length === 0 ? (
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-center text-gray-500 py-5">
            No products found in this category.
          </p>
          <Link
            to="/shop"
            className="px-6 py-3 bg-black text-white rounded-lg font-bold border hover:bg-white hover:text-black active:scale-95 ease-in active:bg-black active:text-white duration-75 transition"
          >
            Go to Shop
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 py-3 ">
          {categoryProducts.map((product) => {
            return <Products key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Category;
