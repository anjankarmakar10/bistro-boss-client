import axios from "axios";

const addItem = (item) => {
  return axios.post("http://localhost:4000/menu", item);
};

export default addItem;
