import { useEffect, useState } from "react";

const useMenus = () => {
  const [menus, setMenus] = useState(null);

  const getData = async () => {
    const response = await fetch("menu.json");
    const result = await response.json();
    setMenus(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return menus;
};

export default useMenus;
