import { ShoppingCart } from "react-feather";
import { NavLink, Link } from "react-router-dom";
import profile from "../../assets/others/profile.png";
import { useAuth } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import useCarts from "../../hooks/useCarts";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const carts = useCarts();

  let cartCount = 0;

  if (user) {
    cartCount = carts?.length;
  }

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign Out",
    }).then((result) => {
      const signOut = async () => {
        try {
          await logOut();
        } catch (error) {
          console.log(error.message);
          return;
        }
      };

      if (result.isConfirmed) {
        signOut();
        Swal.fire("Successfully Sign Out!", "", "success");
      }
    });
  };

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
            <NavItem to={`/shop/foods`} title={"Our Shop"} />
          </li>
        </ul>
        <div className="flex font-bold items-center gap-4">
          <div className="md:w-12 md:h-12 w-8 h-8 bg-[#477430] rounded-full grid place-content-center pr-1 pt-1 relative cursor-pointer mr-2">
            <ShoppingCart size={20} />
            {cartCount !== 0 && (
              <div className="md:w-8 md:h-8 w-6 h-6 flex justify-center items-center rounded-full bg-[#FF0000] font-semibold absolute top-[-10px] right-[-13px]">
                {cartCount}
              </div>
            )}
          </div>

          <>
            {user ? (
              <div className="flex items-center gap-2">
                <button onClick={handleLogOut}>SIGN OUT</button>
                <div title={user?.displayName} className="cursor-pointer ml-2">
                  {user?.photoURL ? (
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={user?.photoURL}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={profile}
                      alt=""
                    />
                  )}
                </div>
              </div>
            ) : (
              <Link to="/signin">SIGN IN</Link>
            )}
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
