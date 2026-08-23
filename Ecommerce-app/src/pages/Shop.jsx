import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <h1>Shop</h1>
      <div className="container">

      {products.map((product) => {
        return (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>$ {product.price}</p>
        </div>
        );
      })}
      </div>
    </div>
  );
};

export default Shop;
