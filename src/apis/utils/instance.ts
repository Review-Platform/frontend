import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://3.36.79.222:3000/";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  withCredentials: true,
};
export const baseApi = axios.create(axiosConfig);
