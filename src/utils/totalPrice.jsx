const totalPrice = (carts) => {
  try {
    return carts?.reduce((total, item) => {
      return (total += +item?.price);
    }, 0);
  } catch (error) {
    console.log("Cart Total Price", error.message);
  }
};

export default totalPrice;
