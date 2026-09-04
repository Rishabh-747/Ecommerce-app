import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removefromCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5">
        <h1 className="text-3xl font-bold mb-3">Your Cart is Empty</h1>

        <p className="text-gray-500 mb-6">
          Add some products to your cart before checkout.
        </p>

        <button
          onClick={() => navigate("/shop")}
          className="px-6 py-3 bg-black text-white rounded-lg font-bold border hover:bg-white hover:text-black active:scale-90 active:bg-black active:text-white ease-in duration-75 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="px-[5%] py-5 flex flex-col min-h-screen">
      {/* ===== Cart Heading ===== */}
      <div className="shrink-0 mb-5">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <p className="text-gray-500 mt-1">
          {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      {/* ===== Cart Items ===== */}
      <div className="pr-2 flex-1 ">
        <div className="grid gap-4">
          {cart.map((item) => (
            <div key={item.id} className="border rounded-xl p-4 flex gap-4">
              {/* ===== Product Image ===== */}
              <Link to={`/product/${item.id}`}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-contain border rounded-lg shrink-0"
                />
                </Link>

              {/* ===== Product Deatils ===== */}
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-lg">{item.title}</h2>
                <p className="text-gray-600 mt-1 ">${item.price}</p>

                {/* ===== Quantity ===== */}
                <div className="flex gap-3 items-center mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-100 rounded font-bold h-8 w-8 active:scale-90 duration-75 transition-transform"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-100 rounded font-bold w-8 h-8 active:scale-90 duration-75 transition-transform"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Product Tool + Remove  */}
              <div className="shrink-0 flex flex-col items-end justify-between">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removefromCart(item.id)}
                  className="text-xl active:scale-90 duration-75 transition-transform"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Cart Summary ===== */}

      <div className="shrink-0 border rounded-xl p-5 mt-10">
        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="border-t pt-4 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/checkout")}
          className="w-full mt-5 py-3 bg-black text-white rounded-lg font-bold border-2 border-black hover:bg-white hover:text-black transition duration-75 ease-in active:scale-98 active:bg-black active:text-white"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
