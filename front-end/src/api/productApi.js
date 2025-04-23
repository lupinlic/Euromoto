// src/api/userApi.js
import axiosClient from './axiosClient';

const productApi = {
    getproductbyCategory(CategoryID) {
        return axiosClient.get(`/products/bycategory/${CategoryID}`);
    },
    getproductbyCategoryparent(CategoryID) {
        return axiosClient.get(`/products/bycategoryparent/${CategoryID}`);
    },
    getproductbyID(CategoryID) {
        return axiosClient.get(`/products/${CategoryID}`);
    },
    getAll() {
        return axiosClient.get('/products');
    },
    getProductVersionByID(ProductID) {
        return axiosClient.get(`productversion/byproduct/${ProductID}`);
    },
    getProductColorByID(ProductID) {
        return axiosClient.get(`productcolor/byproduct/${ProductID}`);
    }
};

export default productApi;

