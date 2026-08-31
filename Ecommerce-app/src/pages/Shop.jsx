import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Products from "./Products";

const Shop = () => {
  const { products, search } = useContext(ProductContext);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="py-5">
      <h1 className="font-bold text-2xl text-center">Shop</h1>

      {search && filteredProducts.length === 0 && (
        <div className="">
          <h2 className="text-center p-10 text-2xl">No Product Found</h2>
        <hr />
          </div>
      )}

      <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] px-[5%] py-8">
        {filteredProducts.length > 0
          ? filteredProducts.map((product) => (
              <Products key={product.id} product={product} />
            ))
          : products.map((product) => (
              <Products key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Shop;
