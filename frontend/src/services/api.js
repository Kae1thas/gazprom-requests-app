import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Адрес твоего backend
});

export default api;