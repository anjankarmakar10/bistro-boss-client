import axios from "axios";

const addItem = (item) => {
  return axios.post(
    "https://bistro-boss-server-anjankarmakar.vercel.app/menu",
    item
  );
};

export default addItem;
