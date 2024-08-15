import { PayloadAction } from '@reduxjs/toolkit';
import {
  getSignUpRequest,
  getSignUpSuccess,
  getSignUpFail,
  getSignInRequest,
  getSignInSuccess,
  getSignInFail,
} from './reducer';
import AuthenticationService from '../../services/AuthenticationService';
import { STATUS_CODE } from '../../constants/common';
import { SignUpForm, SignInForm } from '../../types/Requests';

export const fetchDataSignUp = (action: PayloadAction<SignUpForm>) => {
  return async (dispatch) => {
    dispatch(getSignUpRequest());
    try {
      const response = await AuthenticationService.postSignUp(action);
      if (response.status === STATUS_CODE.SUCCESS) {
        dispatch(getSignUpSuccess(response.data));
      }
    } catch (err) {
      dispatch(getSignUpFail(err.response.data));
    }
  };
};
export const fetchDataSignIn = (action: PayloadAction<SignInForm>) => {
  return async (dispatch) => {
    dispatch(getSignInRequest());
    try {
      const response = await AuthenticationService.postSignIn(action);
      if (response.status === STATUS_CODE.SUCCESS) {
        dispatch(getSignInSuccess(response.data));
      }
    } catch (err) {
      dispatch(getSignInFail(err.response.data));
    }
  };
};
