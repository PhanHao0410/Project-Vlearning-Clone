import { AxiosResponse } from 'axios';
import BaseService from './BaseService';
import { LoginForm } from '../types/Requests';
import { UserResponse } from '../types/Responses';

const BASE_URL = '/api/v1';

const login = (data: LoginForm): Promise<AxiosResponse<UserResponse>> => {
  return BaseService.post(`${BASE_URL}/auth/signin`, data);
};
const getData = (): Promise<AxiosResponse> => {
  return BaseService.get(
    'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
  );
};
export default {
  login,
  getData,
};
