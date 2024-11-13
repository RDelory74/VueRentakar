import axios from 'axios';

const API_URL = process.env.VUE_APP_ORDER_URL || 'http://192.168.1.239:UserRentakar:9090';

export const UserService = {
    getAllUsers() {
        return axios.get(API_URL);
    },
    getUserById(id) {
        return axios.get(`${API_URL}/${id}`);
    }
};