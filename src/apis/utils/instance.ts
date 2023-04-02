import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://3.36.79.222:8080/";
const TEST_URL = "http://localhost:8080/";
const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  withCredentials: true,
};
export const baseApi = axios.create(axiosConfig);
