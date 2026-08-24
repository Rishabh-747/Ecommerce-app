import { Outlet, Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoLocation } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="shrink-0 flex px-[5%] py-2">
      <ul className="flex justify-between items-center w-full gap-4">
        <li>
          <Link className="font-bold" to="/">
            e com
          </Link>
        </li>
        {/*className={(e)=>{return e.isActive?"nav-active": "" }}*/}
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <form className="bg-white flex rounded-full px-5 py-1 w-[30vw]" action="">
            <input
              type="search"
              placeholder="Search Products"
              className="outline-none w-[90%]"
            />
            <button type="submit"><FaSearch /></button>
          </form>
        </li>
        <li><IoLocation /><span className="text-xs">Delivery location</span></li>
        <li>
          <Link to="/login" className="text-xl"><CgProfile /></Link>
        </li>
        <li>
          <Link to="/user/cart" className="text-xl"><IoCart /></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
