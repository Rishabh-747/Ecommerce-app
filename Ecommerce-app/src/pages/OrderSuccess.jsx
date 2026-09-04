import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center px-5">
      <div className="mb-5 text-6xl">✓</div>
      <h1 className="text-3xl font-bold mb-3 text-center">Order Placed Successfully! </h1>
      <p className="mb-5 text-gray-600 text-center">
        Thank you for your purchase, Your order has been placed successfully.
      </p>
      <Link
        to="/shop"
        className="px-6 py-3 bg-black text-white font-bold rounded-lg border transition hover:bg-white hover:text-black"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;
