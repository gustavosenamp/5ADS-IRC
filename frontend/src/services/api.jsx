import axios from 'axios';

const api = axios.create({
    baseURL: 'http://100.24.31.133:5000/'
});

export default api;
