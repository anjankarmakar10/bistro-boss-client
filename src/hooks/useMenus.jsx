import { useEffect, useState } from "react";

const useMenus = () => {
  const [menus, setMenus] = useState(null);

  const getData = async () => {
    const response = await fetch("http://localhost:4000/menus");
    const result = await response.json();
    setMenus(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return menus;
};

export default useMenus;
