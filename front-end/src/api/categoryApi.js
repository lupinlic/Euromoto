// src/api/userApi.js
import axiosClient from './axiosClient';

const categoryApi = {
    getCategorybyPrarent(CategoryParentID) {
        return axiosClient.get(`category/${CategoryParentID}/category`);
    }
};

export default categoryApi;

