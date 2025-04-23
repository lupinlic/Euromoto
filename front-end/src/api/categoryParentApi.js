// src/api/userApi.js
import axiosClient from './axiosClient';

const categoryParentApi = {
    getCategoryPrarent() {
        return axiosClient.get('category_parent');
    }
};

export default categoryParentApi;

