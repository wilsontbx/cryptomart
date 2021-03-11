import axios from "axios";
import qs from "qs";

const devurl = "http://localhost:5000";
const produrl = "https://express-cryptomart.herokuapp.com/";

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? devurl : produrl,
  timeout: 5000,
});

const backendAPI = {
  getData: () => {
    return axiosInstance.get("/coin/data");
  },
  getMeta: (symbol) => {
    return axiosInstance.get(`/coin/meta/${symbol}`);
  },
};

export default backendAPI;
