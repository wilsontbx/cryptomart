import axios from "axios";
import qs from "qs";

const baseUrl = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: baseUrl,
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
