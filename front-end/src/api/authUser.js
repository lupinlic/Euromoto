// src/api/userApi.js
import axiosClient from './axiosClient';

const authUser = {
  logout() {
    return axiosClient.get('/logout');
  },
  get_user_id() {
    return axiosClient.get('/user/getuserID');
  },
  get_user(id) {
    return axiosClient.get(`/user/${id}`);
  },
  login(data) {
    return axiosClient.post('/login', data);
  },
  register(data) {
    return axiosClient.post('/register', data);
  },
  resetpass(id, data) {
    return axiosClient.put(`/user/${id}`, data);
  },
  changepass(data) {
    return axiosClient.post('/change-password', data);
  }
};

export default authUser;

