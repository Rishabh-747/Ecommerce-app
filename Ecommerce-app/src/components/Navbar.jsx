import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shrink-0 flex px-[5%] py-2 bg-blue-300">
      <ul className="flex justify-between w-full gap-4">
        <li>
          <Link className="font-bold" to="/">
            e com
          </Link>
        </li>{" "}
        {/*className={(e)=>{return e.isActive?"nav-active": "" }}*/}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <form className="bg-white flex rounded-full px-5 py-1 w-[30vw]" action="">
            <input
              type="search"
              placeholder="Search Products"
              className="outline-none w-[90%]"
            />
            <button type="submit">Submit</button>
          </form>
        </li>
        <li>location</li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
