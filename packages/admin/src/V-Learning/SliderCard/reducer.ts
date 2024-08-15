import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';

const sliceName = 'getListCourse';

const slice = createSlice({
  name: sliceName,
  initialState: {
    getListCourseStatus: REQUEST_STATUS.IDLE,
    getListCourseMessage: '',
    dataListCourse: [],
  },
  reducers: {
    getListCourseRequest: (state, action) => {
      state.getListCourseStatus = REQUEST_STATUS.REQUESTING;
      state.getListCourseMessage = '';
    },
    getListCourseSuccess: (state, action) => {
      state.getListCourseStatus = REQUEST_STATUS.SUCCESS;
      state.dataListCourse = action.payload;
    },
    getListCourseFail: (state, action) => {
      state.getListCourseStatus = REQUEST_STATUS.ERROR;
      state.getListCourseMessage = action.payload;
    },
  },
});

export const { getListCourseRequest, getListCourseSuccess, getListCourseFail } =
  slice.actions;
export default slice.reducer;
