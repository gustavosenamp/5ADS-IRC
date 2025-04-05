import axios from 'axios';

const api = axios.create({
    baseURL: 'http://52.91.196.170:5000/'
});

export default api;