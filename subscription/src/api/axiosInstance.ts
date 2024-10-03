import axios from 'axios';
import { getCookie } from 'cookies-next';

export const axiosInstance = axios.create({
  baseURL: 'https://subscription.apinext.in/api', 
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = getCookie('token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

