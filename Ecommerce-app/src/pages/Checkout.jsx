import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pin: "",
  });

  const [errors, setErrors] = useState({});

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid Email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.pin.trim()) {
      newErrors.pin = "PIN code is required";
    } else if (!/^\d{6}$/.test(formData.pin)) {
      newErrors.pin = "Enter a valid 6-digit PIN code";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      clearCart();
      navigate("/order-success");
    }
  };

  // Empty Cart Protection
  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center px-5">
        <h1 className="text-3xl font-bold mb-3">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-5">
          Add some Products before going to checkout.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="px-6 py-3 bg-black text-white rounded-lg font-bold border hover:bg-white hover:text-black active:scale-95 ease-in active:bg-black active:text-white duration-75 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="px-[5%] py-5">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-2 gap-5">
        {/* ======= Customer Deatils ======= */}

        <div className="border rounded-xl p-5">
          <h2 className="text-xl font-bold mb-6">Customer Deatils</h2>

          <form className="grid gap-4">
            {/* Full Name  */}
            <div className="">
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full Name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* ===== Email ===== */}
            <div className="">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* ===== Phone ===== */}
            <div className="">
              <label className="block mb-2 font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your number"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"
              />

              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* ===== Address ===== */}
            <div className="">
              <label className="block mb-2 font-medium">Address</label>
              <textarea
                rows="3"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your full Address"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black resize-none"
              ></textarea>

              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>

            {/* ===== City + State ===== */}
            <div className="grid gap-4 grid-cols-2">
              <div className="">
                <label className="block mb-2 font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"
                />

                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>

              <div className="">
                <label className="block mb-2 font-medium">State</label>
                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"
                />

                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                )}
              </div>
            </div>

            {/* ===== PIN code ===== */}
            <div className="">
              <label className="block mb-2 font-medium">PIN Code</label>
              <input
                type="text"
                name="pin"
                value={formData.pin}
                onChange={handleChange}
                placeholder="Your PIN Code"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"
              />

              {errors.pin && (
                <p className="text-red-500 text-sm mt-1">{errors.pin}</p>
              )}
            </div>
          </form>
        </div>

        {/* ========= Order Summary ========= */}
        <div className="border h-fit rounded-xl p-5">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>

          <div className="grid gap-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 object-contain border rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="font-semibold">{item.title}</h2>

                  <p className="text-sm text-gray-500 ">
                    Quantity: {item.quantity}
                  </p>

                  <p className="font-medium mt-1">
                    ${item.price} &times; {item.quantity}
                  </p>

                  <p className="font-bold mt-1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ===== Price Summary ===== */}
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

          {/* ===== Place Order ===== */}
          <button
            type="button"
            onClick={handlePlaceOrder}
            className="w-full mt-5 bg-black border-2 text-white py-3 rounded-lg font-bold hover:bg-white hover:text-black active:scale-98 active:bg-black active:text-white ease-in duration-75 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
