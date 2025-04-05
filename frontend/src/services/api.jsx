import axios from 'axios';

const api = axios.create({
    baseURL: 'http://52.91.196.170:3333/'
});

export default api;