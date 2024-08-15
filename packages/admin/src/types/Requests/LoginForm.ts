export interface LoginForm {
  email: string;
  password: string;
}

export interface SignUpForm {
  email: string;
  hoTen: string;
  maNhom: string;
  matKhau: string;
  soDT: string;
  taiKhoan: string;
}
export interface SignInForm {
  taiKhoan: string;
  matKhau: string;
}
export interface SubmitForm {
  maKhoaHoc: string;
  taiKhoan: string;
}
