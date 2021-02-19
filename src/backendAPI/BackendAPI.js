import axios from "axios";
import qs from "qs";

const devurl = "http://localhost:5000";
const produrl = "https://express-cryptomart.netlify.app/";

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? devurl : produrl,
  timeout: 5000,
});

const backendAPI = {
  render: (limit = "100") => {
    return axiosInstance.post(
      "/render",
      qs.stringify({
        limit: limit,
      })
    );
  },
};

export default backendAPI;
