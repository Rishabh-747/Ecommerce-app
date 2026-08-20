import React from "react";

const Navbar = () => {
  return (
    <nav className="shrink-0 flex justify-end p-3 bg-blue-300">
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
