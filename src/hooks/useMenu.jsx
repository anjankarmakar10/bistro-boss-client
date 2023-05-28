import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState(null);

  const getData = async () => {
    const response = await fetch("http://localhost:4000/menu");
    const result = await response.json();
    setMenu(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return menu;
};

export default useMenu;
