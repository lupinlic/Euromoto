import axiosClient from './axiosClient';

const addressApi = {
    getAdress() {
        return axiosClient.get('/address');
    },
    updateAdress(id) {
        return axiosClient.put(`/address/${id}`);
    },
    addAdress(data) {
        return axiosClient.post('/address', data);
    },
    deleteAdress(id) {
        return axiosClient.delete(`/address/${id}`);
    },
    getbyUser(id) {
        return axiosClient.get(`/address/user/${id}`);
    },
    getDefaultAddress(id) {
        return axiosClient.get(`/user/${id}/defaultaddress`);
    },
    setDefaultAddress(userid, addressid) {
        return axiosClient.post(`/user/${userid}/setdefaultaddress/${addressid}`);
    }
};

export default addressApi;
