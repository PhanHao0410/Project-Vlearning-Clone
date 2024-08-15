import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';
import { ACCESS_TOKEN, CURRENT_USER } from '../../constants/localStorage';

const sliceName = 'postSignUp';

const slice = createSlice({
  name: sliceName,
  initialState: {
    signUpStatus: REQUEST_STATUS.IDLE,
    signInStatus: REQUEST_STATUS.IDLE,
    signUpMessage: '',
    signInMessage: '',
    dataSignUp: {},
    dataSignIn: {},
  },
  reducers: {
    getSignUpRequest: (state) => {
      state.signUpStatus = REQUEST_STATUS.REQUESTING;
      state.signUpMessage = '';
    },
    getSignUpSuccess: (state, action) => {
      state.signUpStatus = REQUEST_STATUS.SUCCESS;
      state.dataSignUp = action.payload;
    },
    getSignUpFail: (state, action) => {
      state.signUpStatus = REQUEST_STATUS.ERROR;
      state.signUpMessage = action.payload;
    },
    getSignInRequest: (state) => {
      state.signInStatus = REQUEST_STATUS.REQUESTING;
      state.signInMessage = '';
    },
    getSignInSuccess: (state, action) => {
      if (action.payload.accessToken) {
        localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken);
        localStorage.setItem(CURRENT_USER, JSON.stringify(action.payload));
      }
      state.signInStatus = REQUEST_STATUS.SUCCESS;
      state.dataSignIn = action.payload;
    },
    getSignInFail: (state, action) => {
      state.signInStatus = REQUEST_STATUS.ERROR;
      state.signInMessage = action.payload;
    },
  },
});

export const {
  getSignUpRequest,
  getSignUpSuccess,
  getSignUpFail,
  getSignInRequest,
  getSignInSuccess,
  getSignInFail,
} = slice.actions;

export default slice.reducer;
