import axiosClient from './axiosClient';

const orderApi = {
    addOrder(data) {
        return axiosClient.post('/order/place', data);
    },
    getAll() {
        return axiosClient.get('/order');
    },
    getById(id) {
        return axiosClient.get(`/order/${id}`);
    },
    getOrderItemById(id) {
        return axiosClient.get(`/orderItem/${id}`);
    },
    getAdvancedStatistics(params) {
        // params: { from_date: "2025-04-01", to_date: "2025-04-30", type: "month" }
        return axiosClient.get("/statistics", { params });
    },
    confirmOrder(id, status) {
        return axiosClient.put(`/orders/${id}/update-status`, {
            status: status,
        });
    }



};

export default orderApi;