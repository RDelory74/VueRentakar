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
export const UserService = {
    getAllUsers() {
        return apiClient.get(`${GATEWAY_URL}/users`);
    },
    deleteUser() {
        return apiClient.delete(`${GATEWAY_URL}/users`);
    }
};