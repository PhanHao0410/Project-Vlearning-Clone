import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';

const sliceName = 'getCoursePage';

const slice = createSlice({
  name: sliceName,
  initialState: {
    coursePageStatus: REQUEST_STATUS.IDLE,
    dataCoursePage: [],
    coursePageMessage: '',
  },
  reducers: {
    getCoursePageRequest: (state) => {
      state.coursePageStatus = REQUEST_STATUS.REQUESTING;
      state.coursePageMessage = '';
    },
    getCoursePageSuccess: (state, action) => {
      state.coursePageStatus = REQUEST_STATUS.SUCCESS;
      state.dataCoursePage = action.payload;
    },
    getCoursePageFail: (state, action) => {
      state.coursePageStatus = REQUEST_STATUS.ERROR;
      state.coursePageMessage = action.payload;
    },
  },
});

export const { getCoursePageRequest, getCoursePageSuccess, getCoursePageFail } =
  slice.actions;

export default slice.reducer;
