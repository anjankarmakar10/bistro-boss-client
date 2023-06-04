import React from "react";
import useAdmin from "../../../hooks/useAdmin";
import AdminHome from "./AdminHome";
import UserHome from "./UserHome";

const DashboardHome = () => {
  const [admin] = useAdmin();
  console.log(admin);

  return <div>{admin ? <AdminHome /> : <UserHome />}</div>;
};

export default DashboardHome;
