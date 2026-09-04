import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import Products from "./Products";

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
      <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] py-3 ">
        {categoryProducts.map((product) => {
          return <Products key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Category;
