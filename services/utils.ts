import axios from "axios";
import { getToken } from "./auth";



 export const BASE_URL = 'http://192.168.1.51:5252/api';

const apiClient = axios.create({
  baseURL: 'http://192.168.1.51:5252/api',
});

apiClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"]= "application/json"
  }
  return config;
});

export default apiClient;


