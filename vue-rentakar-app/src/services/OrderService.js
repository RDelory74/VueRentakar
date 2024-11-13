import axios from 'axios';

const API_URL = process.env.VUE_APP_ORDER_URL || 'http://192.168.1.239:OrderRentakar:9093';

export const OrderService = {
    getAllOrders() {
        return axios.get(API_URL);
    },
    getOrderById(id) {
        return axios.get(`${API_URL}/${id}`);
    }
};