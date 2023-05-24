import { ShoppingCart, User } from "react-feather";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#1515157f] text-white fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto p-4  flex items-center justify-between">
        <Link to="/" className="flex flex-col font2">
          <span className="sm:text-2xl text-lg font-black">BISTRO BOSS</span>
          <span
            style={{ letterSpacing: "5px" }}
            className="sm:text-xl text-base font-bold"
          >
            Restaurant
          </span>
        </Link>
        <ul className="hidden font-bold  md:flex items-center gap-4 ">
          <li>
            <NavItem to={"/"} title={"Home"} />
          </li>
          <li>
            <NavItem to={"/contact"} title={"Contact us"} />
          </li>
          <li>
            <NavItem to={"/dashboard"} title={"DASHBOARD"} />
          </li>
          <li>
            <NavItem to={"/menus"} title={"Our Menu"} />
          </li>
          <li>
            <NavItem to={"/shop"} title={"Our Shop"} />
          </li>
        </ul>
        <div className="flex font-bold items-center gap-4">
          <div className="md:w-12 md:h-12 w-8 h-8 bg-[#477430] rounded-full grid place-content-center pr-1 pt-1 relative cursor-pointer mr-2">
            <ShoppingCart size={20} />
            <div className="md:w-8 md:h-8 w-6 h-6 flex justify-center items-center rounded-full bg-[#FF0000] font-semibold absolute top-[-10px] right-[-13px]">
              12
            </div>
          </div>

          <>
            <Link to="/signin">SIGN IN</Link>
            {/* <div className="flex items-center gap-2">
              <button>SIGN OUT</button>
              <div className="hidden md:grid cursor-pointer md:w-10 md:h-10 w-8 h-8 bg-white rounded-full  place-content-center">
                <User color="black" />
              </div>
            </div> */}
          </>
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({ title, to }) => {
  return (
    <NavLink
      to={to}
      className="uppercase text-white hover:text-[#EEFF25]"
      href=""
    >
      {title}
    </NavLink>
  );
};

export default Navbar;
