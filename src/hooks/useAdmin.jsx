import { useAuth } from "../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axios = useAxios();

  const email = user?.email || `${user?.reloadUserInfo?.screenName}@github.com`;

  const getData = async () => {
    const { data } = await axios.get(`/users/admin/${email}`);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: getData,
    enabled: !loading,
  });

  return [data?.admin, isLoading];
};

export default useAdmin;
