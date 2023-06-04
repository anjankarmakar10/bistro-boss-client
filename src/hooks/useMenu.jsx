import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const getData = async () => {
    const response = await fetch(
      "https://bistro-boss-server-anjankarmakar.vercel.app/menu"
    );
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
