import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';

const sliceName = 'getDetailCourse';

const slice = createSlice({
  name: sliceName,
  initialState: {
    detailCourseStatus: REQUEST_STATUS.IDLE,
    submitCourseStatus: REQUEST_STATUS.IDLE,
    detailCourseMessage: '',
    submitCourseMessage: '',
    dataCourse: {},
    dataSubmit: '',
  },
  reducers: {
    getDetailCourseRequest: (state) => {
      state.detailCourseStatus = REQUEST_STATUS.REQUESTING;
      state.detailCourseMessage = '';
    },
    getDetailCourseSuccess: (state, action) => {
      state.detailCourseStatus = REQUEST_STATUS.SUCCESS;
      state.dataCourse = action.payload;
    },
    getDetailCourseFail: (state, action) => {
      state.detailCourseStatus = REQUEST_STATUS.ERROR;
      state.detailCourseMessage = action.payload;
    },
    getSubmitCourseRequest: (state) => {
      state.submitCourseStatus = REQUEST_STATUS.REQUESTING;
      state.submitCourseMessage = '';
    },
    getSubmitCourseSuccess: (state, action) => {
      state.submitCourseStatus = REQUEST_STATUS.SUCCESS;
      state.dataSubmit = action.payload;
    },
    getSubmitCourseFail: (state, action) => {
      state.submitCourseStatus = REQUEST_STATUS.ERROR;
      state.submitCourseMessage = action.payload;
    },
    clearStatus: (state) => {
      state.submitCourseStatus = REQUEST_STATUS.IDLE;
    },
  },
});

export const {
  getDetailCourseRequest,
  getDetailCourseSuccess,
  getDetailCourseFail,
  getSubmitCourseRequest,
  getSubmitCourseSuccess,
  getSubmitCourseFail,
  clearStatus,
} = slice.actions;
export default slice.reducer;
