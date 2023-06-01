import { useAuth } from "../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
const useCarts = () => {
  const { user, loading } = useAuth();
  const axios = useAxios();

  const email = user?.email || `${user?.reloadUserInfo?.screenName}@github.com`;

  const getData = async () => {
    try {
      const { data } = await axios.get(`/carts?email=${email}`);
      return data;
    } catch (error) {
      return error.message;
    }
  };

  const { data: carts = [], refetch } = useQuery({
    queryKey: ["carts", email],
    queryFn: getData,
    enabled: !loading,
  });

  return [carts, refetch];
};

export default useCarts;
