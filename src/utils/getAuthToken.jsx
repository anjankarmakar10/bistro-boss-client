import axios from "axios";

const getAuthToken = (user) => {
  return axios.post(
    "https://bistro-boss-server-anjankarmakar.vercel.app/jwt",
    user
  );
};

export default getAuthToken;
