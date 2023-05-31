import { useAuth } from "../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
const useCarts = () => {
  const { user } = useAuth();

  const email = user?.email || `anjankarmakar10@github.com`;
  const token = localStorage.getItem("access_token");

  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/carts?email=${email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return await response.json();
    } catch (error) {
      return error.message;
    }
  };

  const { data: carts = [], refetch } = useQuery({
    queryKey: ["carts", email],
    queryFn: getData,
  });

  return [carts, refetch];
};

export default useCarts;
