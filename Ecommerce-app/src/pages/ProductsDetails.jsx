import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductsDetails = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <h1>Product not fonud. </h1>;
  }

  return (
    <div className="px-[5%] py-10">
      <div className="grid gap-10 grid-cols-2">

        {/* ===== Product Image ===== */}
        <div className="border flex justify-center p-3">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        {/* ===== Product Content ===== */}
        <div className="border p-4">
          <h1 className="font-bold text-xl">{product.title} </h1>
          <p>
            <span>rating: </span>
            {product.rating} ⭐
          </p>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <p><span>Stock : </span>{product.stock}</p>
          <p><span>Min. order : </span>{product.minimumOrderQuantity}</p>
          <p>{product.returnPolicy}</p>
          <p>{product.shippingInformation}</p>
          <p>{product.warrantyInformation}</p>
          <button className="px-5 py-2 my-2 rounded-lg bg-yellow-400 font-bold text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
