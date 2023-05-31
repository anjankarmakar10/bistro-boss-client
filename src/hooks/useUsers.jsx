import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const getData = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch("http://localhost:4000/users", {
        headers: {
          authorization: `bearer ${token}`,
        },
      });

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
