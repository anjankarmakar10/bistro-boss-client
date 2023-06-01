import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import Shop from "../page/Shop/Shop";
import OurMenus from "../page/OurMenus/OurMenus";
import Dashboard from "../page/Dashboard/Dashboard";
import Contact from "../page/Contact/Contact";
import SignIn from "../page/SignIn/SignIn";
import SignUp from "../page/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../page/Dashboard/Home/DashboardHome";
import AddItems from "../page/Dashboard/AddItems/AddItems";
import ManageItems from "../page/Dashboard/ManageItems/ManageItems";
import AllUsers from "../page/Dashboard/AllUsers/AllUsers";
import MyCart from "../page/Dashboard/MyCart/MyCart";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/menus",
        element: <OurMenus />,
      },
      {
        path: "/shop/:category",
        element: <Shop />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/home",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/additems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageitems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/mycart",
        element: <MyCart />,
      },
    ],
  },
]);

export default router;
