import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="px-[5%] py-5">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-2 gap-5">
        {/* ===== Customer Deatils ===== */}

        <div className="border rounded-xl p-5">
          <h2 className="text-xl font-bold mb-6">Customer Deatils</h2>

          <form className="grid gap-4">
            <div className="">
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Your full Name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div className="">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div className="">
              <label className="block mb-2 font-medium">Phone</label>
              <input
                type="tel"
                placeholder="Your number"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div className="">
              <label className="block mb-2 font-medium">Address</label>
              <textarea
                rows="3"
                placeholder="Your full Address"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black resize-none"
              ></textarea>
            </div>

            <div className="grid gap-4 grid-cols-2">
              <div className="">
                <label className="block mb-2 font-medium">City</label>
                <input type="text" placeholder="City" className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"/>
              </div>

              <div className="">
                <label className="block mb-2 font-medium">State</label>
                <input type="text" placeholder="State" className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"/>
              </div>
            </div>

            <div className="">
              <label className="block mb-2 font-medium">PIN Code</label>
              <input type="text" placeholder="Your PIN Code" className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"/>
            </div>
          </form>
        </div>

        {/* ===== Order Summary ===== */}
        <div className="border h-fit rounded-xl p-5">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>

          <div className="grid gap-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-4">
                <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-contain border rounded-lg" />

                <div className="flex-1">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500 ">Quantity: {item.quantity}</p>
                  <p className="font-medium mt-1">
                    ${item.price} * {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t mt-5 pt-4 space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between text-xl font-bold border-t pt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button type="button" onClick={() => {
            clearCart();
            navigate("/order-success")
          }} className="w-full mt-5 bg-black border-2 text-white py-3 rounded-lg font-bold hover:bg-white hover:text-black transition">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
