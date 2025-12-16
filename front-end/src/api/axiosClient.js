import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL; 

const axiosClient = axios.create({
  baseURL: apiUrl + "/api",
  timeout: 10000, // 10s → giúp tránh treo request
  headers: {
    "Content-Type": "application/json",
  },
});

// ---------------------------------------------------------------------
// REQUEST INTERCEPTOR
// ---------------------------------------------------------------------
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Nếu là upload file
    if (config.headers["Custom-Upload"]) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ---------------------------------------------------------------------
// RESPONSE INTERCEPTOR
// ---------------------------------------------------------------------
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Token hết hạn → logout hoặc refresh token
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      // window.location.href = "/login"; // nếu muốn tự logout
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
