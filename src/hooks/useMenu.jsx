import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";

const useMenu = () => {
  const getData = async () => {
    const response = await fetch("http://localhost:4000/menu");
    return await response.json();
  };

  const { data: menu = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: getData,
  });

  return [menu, refetch];
};

export default useMenu;
