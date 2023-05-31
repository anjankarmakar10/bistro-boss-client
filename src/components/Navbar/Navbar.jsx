import { ShoppingCart } from "react-feather";
import { Link } from "react-router-dom";
import useCarts from "../../hooks/useCarts";
import NavItem from "./NavItem";
import MobileNav from "./MobileNav";
import ProfileBar from "./ProfileBar";
import totalPrice from "../../utils/totalPrice";
import { useAuth } from "../../contexts/AuthProvider";

const Navbar = () => {
  const [carts] = useCarts();
  const price = totalPrice(carts);
  const { user } = useAuth();

  return (
    <header className="bg-[#1515157f] text-white fixed w-full top-0 z-50">
      <nav className="navbar flex max-w-7xl items-center mx-auto px-4 justify-between">
        <div>
          <MobileNav />

          <Link to="/" className="flex flex-col font2 ml-2">
            <span className="sm:text-2xl text-lg font-black mb-[-1px]">
              BISTRO BOSS
            </span>
            <span
              style={{ letterSpacing: "5px" }}
              className="sm:text-xl text-base font-bold"
            >
              Restaurant
            </span>
          </Link>
        </div>

        <div>
          <ul className="hidden font-bold  md:flex items-center gap-4 ">
            <li>
              <NavItem to={"/"} title={"Home"} />
            </li>
            <li>
              <NavItem to={"/contact"} title={"Contact us"} />
            </li>

            <li>
              <NavItem to={"/menus"} title={"Our Menu"} />
            </li>
            <li>
              <NavItem to={`/shop/foods`} title={"Our Shop"} />
            </li>
          </ul>
        </div>
        <div className="flex gap-1 items-center">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator mt-1 mr-1">
                <ShoppingCart />
                <span className="badge badge-sm indicator-item">
                  {carts?.length || 0}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body text-black">
                <span className="font-bold text-lg">
                  {carts?.length || 0} Items
                </span>
                <span className="text-info">Total Price: ${price}</span>
                <Link to={"/dashboard/mycart"} className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            {user ? (
              <ProfileBar />
            ) : (
              <Link to="/signin" className="btn">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
