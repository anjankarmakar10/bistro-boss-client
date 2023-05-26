import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import Shop from "../page/Shop/Shop";
import OurMenus from "../page/OurMenus/OurMenus";
import Dashboard from "../page/Dashboard/Dashboard";
import Contact from "../page/Contact/Contact";
import SignIn from "../page/SignIn/SignIn";
import SignUp from "../page/SignUp/SignUp";

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
        path: "/dashboard",
        element: <Dashboard />,
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
]);

export default router;
