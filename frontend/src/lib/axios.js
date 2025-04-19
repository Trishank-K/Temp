// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: "http://localhost:5001/api",
//   withCredentials: true, // THIS IS IMPORTANT
// });

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
  withCredentials: true,
});
