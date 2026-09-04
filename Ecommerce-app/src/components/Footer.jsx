import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="shrink-0 bg-black text-white mt-10">
      <div className="px-[5%] py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ====== Brands ====== */}
          <div className="">
            <h2 className="text-2xl font-bold mb-4">ShopEase</h2>
            <p className="text-gray-400 leading-6">
              Discover quality products at great prices. Simple, reliable and
              convenient shopping.
            </p>
          </div>

          {/* ====== Quick Links ====== */}
          <div className="">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>

              <Link to="/shop" className="hover:text-white transition">
                Shop
              </Link>

              <Link to="/wishlist" className="hover:text-white transition">
                Wishlist
              </Link>

              <Link to="/cart" className="hover:text-white transition">
                Cart
              </Link>
            </div>
          </div>

          {/* ====== Customer ====== */}
          <div className="">
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <p>Easy Returns</p>
              <p>Secure Payment</p>
              <p>Free Shipping</p>
              <p>24/7 Support</p>
            </div>
          </div>

          {/* ====== Contact ====== */}
          <div className="">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="flex flex-col gap-3 wrap-break-word text-gray-400">
              <p>📧 support@shopease.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 India</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 px-[5%] py-5 text-center text-gray-500 text-sm">
        &copy; 2026 ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
