import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Products from "./Products";


const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <h1 className="font-bold text-2xl text-center">Shop</h1>
      <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] px-[5%] py-8">
        {products.map((product) => {
          return  <Products key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
