import axios from 'axios';

const api = axios.create({
    baseURL: 'http://54.89.255.106:5000/'
});

export default api;
