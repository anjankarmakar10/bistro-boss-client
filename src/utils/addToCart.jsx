const addToCart = (item) => {
  return fetch("http://localhost:4000/carts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(item),
  });
};

export default addToCart;
