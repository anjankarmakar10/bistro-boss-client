import { Menu } from "react-feather";
import NavItem from "./NavItem";

const MobileNav = () => {
  return (
    <article className="dropdown text-black">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <Menu size={30} color="white" />
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 mobile"
      >
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
    </article>
  );
};

export default MobileNav;
