import { Link, useNavigate } from "react-router-dom";
import { IoCart, IoLocation } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

const Navbar = () => {
  const { search, setSearch } = useContext(ProductContext);
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/shop");
    setMenuOpen(false);
  };

  return (
    <nav className="shrink-0 bg-white">
      {/* ====== Main Navbar ====== */}
      <div className="flex px-[5%] py-3 gap-5 items-center justify-between">
        {/* ====== Brand ====== */}
        <Link
          to="/"
          className="font-bold text-2xl font-serif shrink-0 transition-all duration-300 hover:text-shadow-lg"
        >
          ShopEase
        </Link>

        {/* ====== Desktop Shop ====== */}
        {/*className={(e)=>{return e.isActive?"nav-active": "" }}*/}

        <Link
          to="/shop"
          className="hidden md:block hover:scale-105 transition-transform duration-300"
        >
          Shop
        </Link>

        {/* ====== Desktop Right Section ====== */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {/* ====== Search ====== */}
          <form
            className="bg-white flex items-center border border-gray-300 rounded-full px-4 py-2 w-64"
            action=""
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Search Products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none w-full"
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>

          {/* ====== Location ====== */}
          <div className="flex gap-1 items-center">
            <IoLocation />
            <span className="text-xs ">Delivery location</span>
          </div>

          {/* ====== Profile ====== */}
          <Link
            to="/login"
            className="text-xl hover:scale-110 transition-transform"
          >
            <CgProfile />
          </Link>

          {/* ====== Cart ====== */}
          <Link
            to="/user/cart"
            className="relative text-xl hover:scale-110 transition-transform"
          >
            <IoCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex justify-center items-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* ====== Mobile Icons ====== */}
        <div className="flex md:hidden items-center gap-5">
          <Link to="/user/cart" className="relative text-xl">
            <IoCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex justify-center items-center">
                {cartCount}
              </span>
            )}
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          {/* ====== Dark Overlay ====== */}
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 md:hidden animate-fadeIn"
          ></div>

          {/* ====== Mobile Menu ====== */}

          <div className="md:hidden fixed top-18 left-4 right-4 bg-white rounded border z-50 p-6 animate-menuDown shadow-xl">
            {/* ====== Menu Header ====== */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-8 h-8 rounded border-2 flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white"
              >
                <FaTimes />
              </button>
            </div>

            {/* ====== Search ====== */}
            <form
              className=" flex items-center border border-gray-300 rounded-full px-4 py-2 mb-5"
              action=""
              onSubmit={handleSearch}
            >
              <input
                type="text"
                placeholder="Search Products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none w-full"
              />
              <button type="submit">
                <FaSearch />
              </button>
            </form>

{/* ====== Menu Links ====== */}
            <div className="flex flex-col gap-5 ">
              <Link to="/shop" onClick={() => setMenuOpen(false)} className="font-medium transition-transform hover:translate-x-1 duration-200 ease-in">
                Shop
              </Link>

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 font-medium transition-transform hover:translate-x-1 duration-200 ease-in"
              >
                <CgProfile />
                Profile
              </Link>

              <div className="flex items-center gap-2 text-gray-600">
                <IoLocation />
                <span className="text-sm">Delivery Location</span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ====== Category Bar ====== */}
      <div className="bg-black text-white p-2 px-5 text-sm text-center">
        Men <span className="mx-2">|</span>
        Women <span className="mx-2">|</span> Accessories
      </div>
    </nav>
  );
};

export default Navbar;
