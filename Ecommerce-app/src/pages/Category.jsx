import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import Products from "./Products";

const Category = () => {
  const { products } = useContext(ProductContext);
  const { category } = useParams();

  const categoryProducts = products.filter(
    (product) => product.category === category
  );
  return (
    <div className="px-[5%]">
      <h1 className="font-bold text-2xl capitalize text-center">{category}</h1>
      <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] py-3 ">
        {categoryProducts.map((product) => {
          return <Products key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Category;
