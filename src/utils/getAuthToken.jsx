import axios from "axios";

const getAuthToken = (user) => {
  return axios.post("http://localhost:4000/jwt", user);
};

export default getAuthToken;
