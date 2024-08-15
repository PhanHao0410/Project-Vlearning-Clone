import axios from 'axios';
import { ACCESS_TOKEN } from '../constants/localStorage';
import { removeCachedUrl } from '../utils/localStorage';
import { STATUS_CODE } from '../constants/common';
import PATH from '../constants/clientPath';
import history from '../utils/history';
import API_HOST from '../constants/apiHosts';

const mainRequestConfig = {
  baseURL: API_HOST.BASE_URL,
};

const tokenExtra =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJUcmFpbmluZyBnaeG6o25nIHZpw6puIGN5YmVyc29mdCAyMDIyIiwiSGV0SGFuU3RyaW5nIjoiMzAvMTEvMjAyOCIsIkhldEhhblRpbWUiOiIxODU5MTU1MjAwMDAwIiwibmJmIjoxNTg0MjkxNjAwLCJleHAiOjE4NTkzMDI4MDB9.9nOWAOoO7NtipuO-A-4_8kwzVp7j5HSdXjEegqTgcXI';

const baseService = axios.create(mainRequestConfig);

baseService.interceptors.request.use(
  (config) => {
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
        tokencybersoft: tokenExtra,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  },
);

baseService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === STATUS_CODE.UNAUTHORIZED) {
      localStorage.removeItem(ACCESS_TOKEN);
      removeCachedUrl();
      history.replace(PATH.LOGIN);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export default baseService;
