import axios from 'axios';
import configData from '../config.json';

const token = localStorage.getItem('token');
const baseURL = configData.SERVER_URL;
const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
});

export default axiosInstance;
