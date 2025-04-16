import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fullstackchatapp-frontend.onrender.com",
  withCredentials: true,
});
