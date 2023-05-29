import { NavLink, Link, Outlet } from "react-router-dom";

import {
  AlignLeft,
  Book,
  Calendar,
  CheckSquare,
  Clipboard,
  CreditCard,
  Home,
  Mail,
  Menu,
  MessageSquare,
  PlusSquare,
  ShoppingBag,
  ShoppingCart,
  User,
} from "react-feather";

const Dashboard = () => {
  const admin = false;

  return (
    <>
      <aside className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button m-4 lg:hidden"
          >
            <Menu />
          </label>
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu flex flex-col  p-4 w-60 text-base-content bg-[#D1A054]">
            <Link to="/" className="flex flex-col font2  ml-2 mb-4">
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

            <>
              {admin ? (
                <div className="flex flex-col ">
                  <li>
                    <AsideLink
                      to={"/dashboard/home"}
                      title={"Admin Home"}
                      icon={<Home />}
                    />
                  </li>
                  <li>
                    <AsideLink
                      to={"/dashboard/additems"}
                      title={"Add Items"}
                      icon={<PlusSquare />}
                    />
                  </li>
                  <li>
                    <AsideLink
                      to={"/dashboard/manageitems"}
                      title={"Magnage Items"}
                      icon={<Clipboard />}
                    />
                  </li>
                  <li>
                    <AsideLink
                      to={"/dashboard/managebooking"}
                      title={"Magnage Booking"}
                      icon={<Book />}
                    />
                  </li>
                  <li>
                    <AsideLink
                      to={"/dashboard/manageusers"}
                      title={"All Users"}
                      icon={<User />}
                    />
                  </li>
                </div>
              ) : (
                <div className="flex flex-col">
                  <li>
                    <AsideLink
                      to={"/dashboard/home"}
                      title={"User Home"}
                      icon={<Home />}
                    />
                  </li>
                  <li>
                    <AsideLink
                      to={"/dashboard/reservation"}
                      title={"Reservation"}
                      icon={<Calendar />}
                    />
                  </li>
                  <li>
                    <AsideLink
                      to={"/dashboard/paymenthistory"}
                      title={"payment history"}
                      icon={<CreditCard />}
                    />
                  </li>
                  <li>
                    <AsideLink
                      to={"/dashboard/mycart"}
                      title={"My Cart"}
                      icon={<ShoppingCart />}
                    />
                  </li>
                  <li>
                    <AsideLink
                      to={"/dashboard/addreview"}
                      title={"Add Review"}
                      icon={<MessageSquare />}
                    />
                  </li>
                  <li>
                    <AsideLink
                      to={"/dashboard/mybooking"}
                      title={"My Booking"}
                      icon={<CheckSquare />}
                    />
                  </li>
                </div>
              )}
            </>

            <span className=" h-1 text-white border-b-2 my-2"></span>
            <li>
              <AsideLink to={"/"} title={"Home"} icon={<Home />} />
            </li>

            <li>
              <AsideLink to={"/menus"} title={"Menu"} icon={<AlignLeft />} />
            </li>
            <li>
              <AsideLink
                to={"/shop/foods"}
                title={"Shop"}
                icon={<ShoppingBag />}
              />
            </li>
            <li>
              <AsideLink to={"/contact"} title={"Contact"} icon={<Mail />} />
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

const AsideLink = ({ icon, to, title }) => {
  return (
    <NavLink className="flex font-medium items-center capitalize" to={to}>
      {icon}
      {title}
    </NavLink>
  );
};

export default Dashboard;
