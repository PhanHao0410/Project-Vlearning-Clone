import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useMediaQuery } from '@material-ui/core';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import history from '../../utils/history';
import path from '../../constants/clientPath';
import { fetchDataSignUp, fetchDataSignIn } from './thunk';
import { REQUEST_STATUS } from '../../constants/common';
import { isHavingToken } from '../../utils/localStorage';
import {
  SignInSignUpContain,
  SignInSignUpContent,
  SignInContain,
  SignUpContain,
  OverlayContain,
  ToastContentContain,
} from './styles';

type TFormInput = {
  SignUp: {
    taiKhoan: string;
    hoTen: string;
    matKhau: string;
    email: string;
    soDT: string;
    maNhom: string;
  };
};
type TFormSignIn = {
  SignIn: {
    taiKhoan: string;
    matKhau: string;
  };
};

const currencies = [
  {
    value: 'GP01',
    label: 'GP01',
  },
  {
    value: 'GP02',
    label: 'GP02',
  },
  {
    value: 'GP03',
    label: 'GP03',
  },
  {
    value: 'GP04',
    label: 'GP04',
  },
  {
    value: 'GP05',
    label: 'GP05',
  },
  {
    value: 'GP06',
    label: 'GP06',
  },
  {
    value: 'GP07',
    label: 'GP07',
  },
  {
    value: 'GP08',
    label: 'GP08',
  },
  {
    value: 'GP09',
    label: 'GP09',
  },
  {
    value: 'GP10',
    label: 'GP10',
  },
];
const MsgSignUp = ({ signUpStatus, SignUpMessage }) => (
  <ToastContentContain>
    <span>
      {signUpStatus === REQUEST_STATUS.SUCCESS ? (
        <CheckCircleOutlineIcon className="icon-toastify" />
      ) : (
        <ErrorOutlineIcon
          className="icon-toastify"
          style={{ color: 'RGB(246 186 53)' }}
        />
      )}
    </span>
    <h3>
      {signUpStatus === REQUEST_STATUS.SUCCESS
        ? 'Đăng ký tài khoản thành công'
        : SignUpMessage}
    </h3>
    {signUpStatus === REQUEST_STATUS.ERROR ? (
      <p>Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại</p>
    ) : (
      <p>Đã đăng ký tài khoản vui lòng đến trang đăng nhập</p>
    )}
  </ToastContentContain>
);
const MsgSignIn = () => (
  <ToastContentContain>
    <span>
      <ErrorOutlineIcon
        className="icon-toastify"
        style={{ color: 'RGB(246 186 53)' }}
      />
    </span>
    <h3 style={{ color: 'RGB(54 134 123)', fontSize: '20px' }}>
      Tài khoản hoặc mật khẩu không đúng
    </h3>

    <p>Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại</p>
  </ToastContentContain>
);

const SignIn = (props) => {
  const { signUpStatus, signUpMessage, signInStatus, signInMessage } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInput>();
  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm<TFormSignIn>();
  const matches = useMediaQuery('(max-width: 960px)');
  const [signInForm, setSignInForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordSignUp, setShowPasswordSignUp] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      signUpStatus === REQUEST_STATUS.SUCCESS ||
      signUpStatus === REQUEST_STATUS.ERROR
    ) {
      toast.success(
        <MsgSignUp signUpStatus={signUpStatus} SignUpMessage={signUpMessage} />,
        {
          icon: false,
          position: 'top-center',
          style: {
            marginTop: '50%',
            width: '90%',
            maxWidth: '444px',
            minWidth: '320px',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          closeButton: false,
          hideProgressBar: true,
          pauseOnHover: false,
          autoClose: 2000,
        },
      );
    } else if (signInStatus === REQUEST_STATUS.ERROR) {
      toast.warning(<MsgSignIn />, {
        icon: false,
        position: 'top-center',
        style: {
          marginTop: '50%',
          width: '90%',
          maxWidth: '444px',
          minWidth: '320px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        closeButton: false,
        hideProgressBar: true,
        pauseOnHover: false,
        autoClose: 2000,
      });
    }
  }, [signUpStatus, signInStatus]);

  useEffect(() => {
    if (isHavingToken()) {
      history.replace(path.ROOT);
    }
  }, [isHavingToken()]);

  const onSubmit = (data) => {
    if (data.SignUp) {
      dispatch(fetchDataSignUp(data.SignUp));
    }
  };
  const onSubmitSignIn = (data) => {
    if (data.SignIn) {
      dispatch(fetchDataSignIn(data.SignIn));
    }
  };
  return (
    <SignInSignUpContain>
      <SignInSignUpContent>
        <SignInContain>
          <form
            key={2}
            className="form-login"
            onSubmit={handleSubmit2(onSubmitSignIn)}
          >
            <h1>Đăng nhập</h1>
            <p>hoặc sử dụng tài khoản đã đăng ký của bạn</p>
            <input
              placeholder="Tài khoản"
              className="account-login"
              {...register2('SignIn.taiKhoan', {
                required: 'Tài khoản ko được để trống',
                minLength: {
                  value: 2,
                  message: 'Tài khoản quá ít ký tự!',
                },
              })}
            />
            <p className="text-error">{errors2.SignIn?.taiKhoan?.message}</p>
            <div
              style={{
                width: '100%',
                transform: 'translateX(-4px)',
                position: 'relative',
              }}
            >
              <input
                placeholder="Mật khẩu"
                type={showPassword ? 'text' : 'password'}
                className="account-login"
                {...register2('SignIn.matKhau', {
                  required: 'Mật khẩu không được để trống',
                  pattern: {
                    value: /^([A-Z])([a-zA-Z0-9.-])(?=.*\d@).{6,100}$/,
                    message:
                      'Mật khẩu phải có ít nhất 8 kí tự và kí tự đặc biệt!',
                  },
                })}
              />

              <span
                className="icon-show-password"
                onClick={() => setShowPassword(!showPassword)}
                role="presentation"
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </span>
            </div>
            <p className="text-error">{errors2.SignIn?.matKhau?.message}</p>
            <h6>Quên mật khẩu?</h6>
            <div style={{ height: '50px' }}>
              <Button className="btn-login" type="submit">
                Đăng nhập
              </Button>
            </div>
          </form>
        </SignInContain>
        <SignUpContain>
          <form
            key={1}
            className="signup-contain"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2>Đăng ký</h2>
            <div style={{ height: '70px' }}>
              <input
                placeholder="Tài khoản"
                className="input-sign-up"
                {...register('SignUp.taiKhoan', {
                  required: 'Tài khoản ko được để trống',
                  minLength: {
                    value: 2,
                    message: 'Tài khoản quá ít ký tự!',
                  },
                })}
              />
              <p className="text-error">{errors.SignUp?.taiKhoan?.message}</p>
            </div>
            <div style={{ height: '70px' }}>
              <input
                placeholder="Họ tên"
                className="input-sign-up"
                {...register('SignUp.hoTen', {
                  required: 'Tên không được để trống',
                  pattern: {
                    value: /^[a-zA-Z]{0,100}$/,
                    message: 'Chỉ nhập ký tự chữ!',
                  },
                })}
              />
              <p className="text-error">{errors.SignUp?.hoTen?.message}</p>
            </div>
            <div style={{ height: '70px' }}>
              <div
                style={{
                  width: '100%',
                  transform: 'translateX(-4px)',
                  position: 'relative',
                }}
              >
                <input
                  type={showPasswordSignUp ? 'text' : 'password'}
                  placeholder="Mật khẩu"
                  className="input-sign-up"
                  {...register('SignUp.matKhau', {
                    required: 'Mật khẩu không được để trống',
                    pattern: {
                      value: /^([A-Z])([a-zA-Z0-9.-])(?=.*\d@).{7,100}$/,
                      message:
                        'Mật khẩu phải có ít nhất 8 kí tự và kí tự đặc biệt!',
                    },
                  })}
                />
                <span
                  className="icon-show-password"
                  onClick={() => setShowPasswordSignUp(!showPasswordSignUp)}
                  role="presentation"
                >
                  {showPasswordSignUp ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </span>
              </div>
              <p className="text-error">{errors.SignUp?.matKhau?.message}</p>
            </div>
            <div style={{ height: '70px' }}>
              <input
                placeholder="Email"
                className="input-sign-up"
                {...register('SignUp.email', {
                  required: 'Email không được để trống',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Email không hợp lệ!',
                  },
                })}
              />
              <p className="text-error">{errors.SignUp?.email?.message}</p>
            </div>
            <div style={{ height: '70px' }}>
              <input
                placeholder="Số điện thoại"
                className="input-sign-up"
                {...register('SignUp.soDT', {
                  required: 'Số điện thoại không được để trống',
                  pattern: {
                    value: /^0[0-9]{9}$/,
                    message: 'Số điện thoại chưa đúng định dạng!',
                  },
                })}
              />
              <p className="text-error">{errors.SignUp?.soDT?.message}</p>
            </div>
            <TextField
              id="outlined-select-currency"
              select
              defaultValue="GP01"
              sx={{ textAlign: 'left' }}
              {...register('SignUp.maNhom', {
                required: 'Đây là trường bắt buộc !',
              })}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ width: '100%', textAlign: 'center', height: '60px' }}>
              <Button className="btn-sign-up" type="submit">
                Đăng ký
              </Button>
            </div>
          </form>
        </SignUpContain>
        {matches ? (
          <OverlayContain style={!signInForm ? { top: '50%' } : { top: '0%' }}>
            <div className="overlay-content">
              {!signInForm ? (
                <div className="overlay-right">
                  <h1>Xin chào!</h1>
                  <p>
                    Vui lòng đăng ký để thiết lập thông tin tài khoản ngân hàng
                  </p>
                  <Button
                    className="btn-load-signup"
                    onClick={() => setSignInForm(true)}
                  >
                    Đăng ký
                  </Button>
                </div>
              ) : (
                <div className="overlay-right">
                  <h1>Chào mừng bạn đã trở lại</h1>
                  <p>Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
                  <Button
                    className="btn-load-signup"
                    onClick={() => setSignInForm(false)}
                  >
                    Đăng nhập
                  </Button>
                </div>
              )}
            </div>
          </OverlayContain>
        ) : (
          <OverlayContain
            style={!signInForm ? { left: '50%' } : { left: '0%' }}
          >
            <div className="overlay-content">
              {!signInForm ? (
                <div className="overlay-right">
                  <h1>Xin chào!</h1>
                  <p>
                    Vui lòng đăng ký để thiết lập thông tin tài khoản ngân hàng
                  </p>
                  <Button
                    className="btn-load-signup"
                    onClick={() => setSignInForm(true)}
                  >
                    Đăng ký
                  </Button>
                </div>
              ) : (
                <div className="overlay-right">
                  <h1>Chào mừng bạn đã trở lại</h1>
                  <p>Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
                  <Button
                    className="btn-load-signup"
                    onClick={() => setSignInForm(false)}
                  >
                    Đăng nhập
                  </Button>
                </div>
              )}
            </div>
          </OverlayContain>
        )}
      </SignInSignUpContent>
    </SignInSignUpContain>
  );
};

const mapStateToProps = (state) => {
  return {
    signUpStatus:
      state.signUpReducer.signUpStatus && state.signUpReducer.signUpStatus,
    signUpMessage:
      state.signUpReducer.signUpMessage && state.signUpReducer.signUpMessage,
    signInStatus:
      state.signUpReducer.signInStatus && state.signUpReducer.signInStatus,
    signInMessage:
      state.signUpReducer.signInMessage && state.signUpReducer.signInMessage,
  };
};

export default connect(mapStateToProps)(SignIn);
