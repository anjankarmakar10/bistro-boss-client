import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useUsers = () => {
  const axios = useAxios();

  const getData = async () => {
    try {
      const { data } = await axios.get("/users");
      return data;
    } catch (error) {
      return error.message;
    }
  };

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getData,
  });

  return [users, refetch];
};

export default useUsers;
