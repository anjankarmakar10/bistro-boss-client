import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
const useAdminStats = () => {
  const axios = useAxios();
  const getData = async () => {
    try {
      const { data } = await axios.get(`/adminstats`);
      return data;
    } catch (error) {
      return error.message;
    }
  };

  const { data: stats = [], refetch } = useQuery({
    queryKey: ["adminstats"],
    queryFn: getData,
  });

  return [stats, refetch];
};

export default useAdminStats;
