import { Outlet, Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoLocation } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="shrink-0 ">
      <div className="flex px-[5%] py-2 justify-between">
        <ul className="flex justify-between items-center gap-10">
          <li>
            <Link className="font-bold text-2xl font-serif" to="/">
              e com
            </Link>
          </li>
          {/*className={(e)=>{return e.isActive?"nav-active": "" }}*/}
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>

        <div className="">
          <ul className="flex justify-between items-center gap-10">
            <li>
              <form
                className="bg-white flex justify-between border-gray-300 rounded-full px-5 py-1 border"
                action=""
              >
                <input
                  type="search"
                  placeholder="Search Products"
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
            <li>
              <Link to="/login" className="text-xl">
                <CgProfile />
              </Link>
            </li>
            <li>
              <Link to="/user/cart" className="text-xl">
                <IoCart />
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
