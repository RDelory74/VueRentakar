import axios from "axios";

const GATEWAY_URL = process.env.VUE_APP_GATEWAY_URL || 'http://localhost:8080';

axios.defaults.withCredentials = true;


const apiClient = axios.create({
    baseURL: GATEWAY_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});
export const OrderService = {
    getAllOrders() {
        return apiClient.get(`${GATEWAY_URL}/orders`);
    }
};