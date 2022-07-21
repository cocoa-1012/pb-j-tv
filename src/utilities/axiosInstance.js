import axios from 'axios';

const token = localStorage.getItem('token');
const baseURL = 'https://dummy.restapiexample.com';
const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
});

export default axiosInstance;
