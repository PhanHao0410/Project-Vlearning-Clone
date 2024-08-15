import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';
import { ACCESS_TOKEN, CURRENT_USER } from '../../constants/localStorage';

const sliceName = 'searchCourseSlice';

const slice = createSlice({
  name: sliceName,
  initialState: {
    searchCourseStatus: REQUEST_STATUS.IDLE,
    searchCourseMessage: '',
    dataSearchCourse: [],
  },
  reducers: {
    getSearchCourseRequest: (state) => {
      state.searchCourseStatus = REQUEST_STATUS.REQUESTING;
      state.searchCourseMessage = '';
    },
    getSearchCourseSuccess: (state, action) => {
      state.searchCourseStatus = REQUEST_STATUS.SUCCESS;
      state.dataSearchCourse = action.payload;
    },
    getSearchCourseFail: (state, action) => {
      state.searchCourseStatus = REQUEST_STATUS.ERROR;
      state.searchCourseMessage = action.payload;
    },
  },
});

export const {
  getSearchCourseRequest,
  getSearchCourseSuccess,
  getSearchCourseFail,
} = slice.actions;

export default slice.reducer;
