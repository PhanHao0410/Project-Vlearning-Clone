import { AxiosPromise, AxiosResponse } from 'axios';
import BaseService from './BaseService';
import { LoginForm } from '../types/Requests';
import { UserResponse } from '../types/Responses';

const BASE_URL = '/api/v1';
const BASE_URL_LEARNING = 'https://elearningnew.cybersoft.edu.vn/api';
const login = (data: LoginForm): Promise<AxiosResponse<UserResponse>> => {
  return BaseService.post(`${BASE_URL}/auth/signin`, data);
};
const getData = (): Promise<AxiosResponse> => {
  return BaseService.get(
    'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
  );
};

const getListCourse = (): Promise<AxiosResponse> => {
  return BaseService.get(
    `${BASE_URL_LEARNING}/QuanLyKhoaHoc/LayDanhSachKhoaHoc`,
  );
};

const getCourseCatalog = (): Promise<AxiosResponse> => {
  return BaseService.get(
    `${BASE_URL_LEARNING}/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
  );
};

const getCoursePage = ({
  codeGroup,
  page,
  pageSize,
}): Promise<AxiosResponse> => {
  return BaseService.get(
    `${BASE_URL_LEARNING}/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${pageSize}&MaNhom=${codeGroup}`,
  );
};
const getCourseTopic = ({ codeGroup, CodeCourse }): Promise<AxiosResponse> => {
  return BaseService.get(
    `${BASE_URL_LEARNING}/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${CodeCourse}&MaNhom=${codeGroup}`,
  );
};
const postSignUp = (data): Promise<AxiosResponse> => {
  return BaseService.post(`${BASE_URL_LEARNING}/QuanLyNguoiDung/DangKy`, data);
};
const postSignIn = (data): Promise<AxiosResponse> => {
  return BaseService.post(
    `${BASE_URL_LEARNING}/QuanLyNguoiDung/DangNhap`,
    data,
  );
};
const getDetailCourse = (data): Promise<AxiosResponse> => {
  return BaseService.get(
    `${BASE_URL_LEARNING}/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${data}`,
  );
};
const postSubmitCourse = (data): Promise<AxiosResponse> => {
  return BaseService.post(
    `${BASE_URL_LEARNING}/QuanLyKhoaHoc/DangKyKhoaHoc`,
    data,
  );
};
const getInformAccount = (data): Promise<AxiosResponse> => {
  return BaseService.post(
    `${BASE_URL_LEARNING}/QuanLyNguoiDung/ThongTinTaiKhoan`,
    data,
  );
};
const cancelCourseAccount = (data): Promise<AxiosResponse> => {
  return BaseService.post(
    `${BASE_URL_LEARNING}/QuanLyKhoaHoc/HuyGhiDanh`,
    data,
  );
};
const updateAccount = (data): Promise<AxiosResponse> => {
  return BaseService.put(
    `${BASE_URL_LEARNING}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
    data,
  );
};

const getSearchCourse = (data): Promise<AxiosResponse> => {
  return BaseService.get(
    `${BASE_URL_LEARNING}/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${data.codeSearch}&MaNhom=${data.codeGroup}`,
  );
};
export default {
  login,
  getData,
  getListCourse,
  getCourseCatalog,
  getCoursePage,
  getCourseTopic,
  postSignUp,
  postSignIn,
  getDetailCourse,
  postSubmitCourse,
  getInformAccount,
  cancelCourseAccount,
  updateAccount,
  getSearchCourse,
};
