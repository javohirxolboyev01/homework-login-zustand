
import axios from "axios";
import { useAuth } from "../components/zustand/store";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000, 
});

api.interceptors.request.use((config) => {
  const token = useAuth.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.log("API Error:", error);
//     return Promise.reject(error);
//   }
// );
