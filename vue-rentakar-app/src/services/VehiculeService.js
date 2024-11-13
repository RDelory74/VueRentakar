import axios from 'axios';

const API_URL = process.env.VUE_APP_ORDER_URL || '192.168.1.239:VehiculeRentakar:9091';

export const VehiculeService = {
    getAllVehicules() {
        return axios.get(API_URL);
    },
    getVehiculeById(id) {
        return axios.get(`${API_URL}/${id}`);
    },
    getVehiculeByDate(startDate, endDate) {

        return axios.get(`${API_URL}/vehicules/available/${startDate},${endDate}`);
        }
};