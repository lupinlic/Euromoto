import axiosClient from './axiosClient';

const favoriteProductApi = {
    getfavorites(id) {
        return axiosClient.get(`favorite/byuser/${id}`);
    },
    addfavorites(data) {
        return axiosClient.post('/favorite', data);
    }

};

export default favoriteProductApi;