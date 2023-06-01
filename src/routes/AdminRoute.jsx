import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const [admin, isLoading] = useAdmin();

  const { pathname } = useLocation();

  if (loading || isLoading) {
    return <h1>Loading...</h1>;
  }

  if (user && admin) {
    return children;
  }

  return <Navigate state={{ path: pathname }} to={"/"} />;
};

export default AdminRoute;
