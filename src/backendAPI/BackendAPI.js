import axios from "axios";
import qs from "qs";

const baseUrl = "";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

const backendAPI = {};

export default backendAPI;
