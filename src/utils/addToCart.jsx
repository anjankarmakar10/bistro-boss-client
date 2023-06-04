const addToCart = (item) => {
  return fetch("https://bistro-boss-server-anjankarmakar.vercel.app/carts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(item),
  });
};

export default addToCart;
