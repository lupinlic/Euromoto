import axiosClient from './axiosClient';

const orderApi = {
    addOrder(data) {
        return axiosClient.post('/order/place', data);
    },

};

export default orderApi;