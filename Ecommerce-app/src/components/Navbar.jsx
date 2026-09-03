import { Outlet, Link, useNavigate } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoLocation } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

const Navbar = () => {
  const { search, setSearch } = useContext(ProductContext);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity, 0
  );

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/shop");
  };
  return (
    <nav className="shrink-0 ">
      <div className="flex px-[5%] py-2 justify-between">
        <ul className="flex justify-between items-center gap-10">
          <li>
            <Link className="font-bold text-2xl font-serif transition-all duration-300 hover:text-shadow-lg" to="/">
              e com
            </Link>
          </li >
          {/*className={(e)=>{return e.isActive?"nav-active": "" }}*/}
          <li className="hover:scale-108 transition-all ease-in-out duration-300">
            <Link to="/shop">Shop</Link>
          </li>
        </ul>

        <div className="">
          <ul className="flex justify-between items-center gap-10">
            <li>
              <form
                className="bg-white flex justify-between border-gray-300 rounded-full px-5 py-1 border"
                action=""
                onSubmit={handleSearch}
              >
                <input
                  type="text"
                  placeholder="Search Products"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="outline-none"
                />
                <button type="submit">
                  <FaSearch />
                </button>
              </form>
            </li>
            <li>
              <div className="flex gap-1 items-center">
                <IoLocation />
                <span className="text-xs ">Delivery location</span>
              </div>
            </li>
            <li className="hover:scale-108 transition-all ease-in-out duration-300">
              <Link to="/login" className="text-xl">
                <CgProfile />
              </Link>
            </li>
            <li className="hover:scale-108 transition-all ease-in-out duration-300">
              <Link to="/user/cart" className="text-xl flex">
                <IoCart /><span className="text-xs">{cartCount}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black text-white p-2 text-sm text-center">
        Men | Women | Accessories
      </div>
    </nav>
  );
};

export default Navbar;
