import { useEffect, useState } from "react";

const useCarts = () => {
  const [carts, setCarts] = useState(null);

  const getData = async () => {
    const response = await fetch("http://localhost:4000/carts");
    const result = await response.json();
    setCarts(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return carts;
};

export default useCarts;
