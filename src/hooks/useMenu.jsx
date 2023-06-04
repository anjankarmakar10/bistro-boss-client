import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";

const useMenu = () => {
  const getData = async () => {
    const response = await fetch("http://localhost:4000/menu");
    return await response.json();
  };

  const {
    data: menu = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: getData,
  });

  return [menu, refetch, isLoading];
};

export default useMenu;
