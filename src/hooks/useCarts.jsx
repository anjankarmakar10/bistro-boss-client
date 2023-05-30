import { useAuth } from "../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
const useCarts = () => {
  const { user } = useAuth();

  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/carts?userId=${user?.uid}`
      );
      return await response.json();
    } catch (error) {
      return error.message;
    }
  };

  const { data: carts = [], refetch } = useQuery({
    queryKey: ["carts", user?.uid],
    queryFn: getData,
  });

  return [carts, refetch];
};

export default useCarts;
