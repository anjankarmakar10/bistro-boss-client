const getCetagory = (menus, query) => {
  return menus?.filter((menu) => menu.category === query);
};

export default getCetagory;
