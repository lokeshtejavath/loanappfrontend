import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080', 
});

export const loginUser = (userData) => instance.post('/api/login', userData);
// You can define more API calls here

export default instance;