import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removefromCart } =
    useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="px-[5%] py-5">
      <h1 className="text-2xl font-bold text-center mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="">Your cart is empty.</p>
      ) : (
        <div className="space-y-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-7 border p-2 rounded-lg"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 rounded object-cover"
              />
              <div className="">
                <h2 className="font-semibold">{item.title}</h2>
                <p>${item.price}</p>

                <div className="flex gap-4 items-center mt-2">
                  <div className="flex gap-4 items-center rounded-lg">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-100 rounded block px-3 py-1 active:scale-90 duration-75 transition-transform"
                    >
                      -
                    </button>
                    <span className="w-3">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-100 rounded px-3 py-1 active:scale-90 duration-75 transition-transform block"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removefromCart(item.id)}
                    className="text-xl active:scale-90 duration-75 transition-transform"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}

           {/* ===== Cart Summary ===== */}
            <div className="mt-6">
              <h2>Cart Summary</h2>
              <p className="mt-2">Total items: {totalItems}</p>
              <p className="mt-2">Total price: ${totalPrice.toLocaleString()} </p>
              <button className="mt-4 bg-black text-white px-5 py-2 rounded">Checkout</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
