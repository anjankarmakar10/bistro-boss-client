const totalPrice = (carts) => {
  if (carts.error) {
    return [0];
  }

  if (carts) {
    return carts?.reduce((total, item) => {
      return (total += item?.price);
    }, 0);
  } else {
    return [];
  }
};

export default totalPrice;
