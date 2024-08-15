import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';

const sliceName = 'getInformAccount';

const slice = createSlice({
  name: sliceName,
  initialState: {
    informAccountStatus: REQUEST_STATUS.IDLE,
    cancelCourseStatus: REQUEST_STATUS.IDLE,
    updateAccountStatus: REQUEST_STATUS.IDLE,
    dataAccount: {},
    dataCancelCourse: '',
    dataUpdateAccount: {},
    informAccountMessage: '',
    cancelCourseMessage: '',
    updateAccountMessage: '',
  },
  reducers: {
    getAccountRequest: (state) => {
      state.informAccountStatus = REQUEST_STATUS.REQUESTING;
      state.informAccountMessage = '';
    },
    getAccountSuccess: (state, action) => {
      state.informAccountStatus = REQUEST_STATUS.SUCCESS;
      state.dataAccount = action.payload;
    },
    getAccountFail: (state, action) => {
      state.informAccountStatus = REQUEST_STATUS.ERROR;
      state.informAccountMessage = action.payload;
    },
    getCancelCourseRequest: (state) => {
      state.cancelCourseStatus = REQUEST_STATUS.REQUESTING;
      state.cancelCourseMessage = '';
    },
    getCancelCourseSuccess: (state, action) => {
      state.cancelCourseStatus = REQUEST_STATUS.SUCCESS;
      state.dataCancelCourse = action.payload;
    },
    getCancelCourseFail: (state, action) => {
      state.cancelCourseStatus = REQUEST_STATUS.ERROR;
      state.cancelCourseMessage = action.payload;
    },
    getUpdateAccountRequest: (state) => {
      state.updateAccountStatus = REQUEST_STATUS.REQUESTING;
      state.updateAccountMessage = '';
    },
    getUpdateAccountSuccess: (state, action) => {
      state.updateAccountStatus = REQUEST_STATUS.SUCCESS;
      state.dataUpdateAccount = action.payload;
    },
    getUpdateAccountFail: (state, action) => {
      state.updateAccountStatus = REQUEST_STATUS.ERROR;
      state.updateAccountMessage = action.payload;
    },
    clearStatusUpdate: (state) => {
      state.updateAccountStatus = REQUEST_STATUS.IDLE;
    },
  },
});

export const {
  getAccountRequest,
  getAccountSuccess,
  getAccountFail,
  getCancelCourseRequest,
  getCancelCourseSuccess,
  getCancelCourseFail,
  getUpdateAccountRequest,
  getUpdateAccountSuccess,
  getUpdateAccountFail,
  clearStatusUpdate,
} = slice.actions;

export default slice.reducer;
