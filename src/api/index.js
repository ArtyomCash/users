import axios from 'axios';
import Raven from 'raven-js';

export const baseInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

baseInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer`;
    return config;
  },
  (error) => {
    Raven.captureException(error);
    return Promise.reject(error);
  }
);

baseInstance.interceptors.response.use(
  (response) => response?.data,
  (error) => {
    Raven.captureException(error);
    if (error?.response?.status === 401) {
      const timer = localStorage.getItem('access_token');
      localStorage.clear();
      localStorage.setItem('access_token', timer);

      store.store.dispatch(actions.signOut());
    } else if (error?.response) {
      // Global path to error message
      throw new Error(error?.response?.data?.message);
    } else {
      throw new Error(error?.message);
    }
  }
);
