import { ShoppingCart, User } from "react-feather";

const Navbar = () => {
  return (
    <header className="bg-[#1515157f] text-white">
      <nav className="container mx-auto px-4 py-5  flex items-center justify-between">
        <a href="#" className="flex flex-col font2">
          <span className="text-2xl font-black">BISTRO BOSS</span>
          <span style={{ letterSpacing: "5px" }} className="text-xl font-bold">
            Restaurant
          </span>
        </a>
        <div className="font-bold flex items-center gap-5">
          <ul className="hidden md:flex items-center gap-4 ">
            <li>
              <NavItem title={"Home"} />
            </li>
            <li>
              <NavItem title={"Contact us"} />
            </li>
            <li>
              <NavItem title={"DASHBOARD"} />
            </li>
            <li>
              <NavItem title={"Our Menu"} />
            </li>
            <li>
              <NavItem title={"Our Shop"} />
            </li>
          </ul>
          <div className="w-12 h-12 bg-[#477430] rounded-full grid place-content-center pr-1 pt-1 relative cursor-pointer">
            <ShoppingCart />
            <div className="w-8 h-8 flex justify-center items-center rounded-full bg-[#FF0000] font-semibold absolute top-[-10px] right-[-13px]">
              12
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden md:block">SIGN OUT</button>
            <div className="cursor-pointer w-10 h-10 bg-white rounded-full grid place-content-center">
              <User color="black" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({ title, to }) => {
  return (
    <a className="uppercase text-white hover:text-[#EEFF25]" href="">
      {title}
    </a>
  );
};

export default Navbar;
