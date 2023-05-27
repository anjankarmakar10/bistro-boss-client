import { Navigate, useLocation } from "react-router-dom";
import { useAuh } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuh();
  const { pathname } = useLocation();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ path: pathname }} to={"/signin"} />;
};

export default PrivateRoute;
