const totalPrice = (carts) => {
  return carts?.reduce((total, item) => {
    return (total += item?.price);
  }, 0);
};

export default totalPrice;
