import axios from 'axios';

const GATEWAY_URL = process.env.VUE_APP_GATEWAY_URL || 'http://localhost:8080';

axios.defaults.withCredentials = true;


const apiClient = axios.create({
    baseURL: GATEWAY_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export const VehiculeService = {
    getAllVehicules() {
        return apiClient.get(`${GATEWAY_URL}/vehicules`);
    },
    getVehiculeById(id) {
        return apiClient.get(`${GATEWAY_URL}/vehicules/${id}`);
    },
    getVehiculeByDate(startDate, endDate) {
        return apiClient.get(`${GATEWAY_URL}/vehicules/available/${startDate},${endDate}`);
        },
    addVehicule(vehicule) {
        return apiClient.post(`${GATEWAY_URL}/vehicules`, vehicule);
    },

    handleError(error) {
        if (error.response) {
            console.error('Response error:', error.response.data);
            return error.response.data;
        } else if (error.request) {
            console.error('Request error:', error.request);
            return 'Network error';
        } else {
            console.error('Error:', error.message);
            return error.message;
        }
    }
};

