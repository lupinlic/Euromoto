// src/api/axiosClient.js
import axios from 'axios';
// import { apiUrl } from '../config';

const apiUrl = process.env.REACT_APP_API_URL;

const axiosClient = axios.create({
  baseURL: {apiUrl} + '/api',  
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor để xử lý request và response
axiosClient.interceptors.request.use(config => {
  // Thêm token nếu cần
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (config.headers['Custom-Upload']) {
    config.headers["Content-Type"] = "multipart/form-data";
  }
  return config;
});

axiosClient.interceptors.response.use(
  response => response.data,  // Lấy trực tiếp data từ response
  error => {
    // Xử lý lỗi
    return Promise.reject(error);
  }
);
console.log("Calling login:", 'http://127.0.0.1:8000' + '/api/login');

export default axiosClient;
