import { NavLink } from "react-router-dom";

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

export default NavItem;
