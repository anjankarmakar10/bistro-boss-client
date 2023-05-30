import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:4000/users");

      return await response.json();
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
