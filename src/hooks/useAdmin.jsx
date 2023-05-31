import axios from "axios";
import { useAuth } from "../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user } = useAuth();

  const token = localStorage.getItem("access_token");

  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:4000/users/admin/${user?.email}`,
      {
        headers: { Authorization: `bearer ${token}` },
      }
    );

    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: getData,
  });

  return [data?.admin, isLoading];
};

export default useAdmin;
