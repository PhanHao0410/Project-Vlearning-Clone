import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';

const sliceName = 'getCourseTopic';

const slice = createSlice({
  name: sliceName,
  initialState: {
    courseTopicStatus: REQUEST_STATUS.IDLE,
    courseTopicMessage: '',
    dataCourseTopic: [],
  },
  reducers: {
    getCourseTopicRequest: (state) => {
      state.courseTopicStatus = REQUEST_STATUS.REQUESTING;
      state.courseTopicMessage = '';
    },
    getCourseTopicSuccess: (state, action) => {
      state.courseTopicStatus = REQUEST_STATUS.SUCCESS;
      state.dataCourseTopic = action.payload;
    },
    getCourseTopicFail: (state, action) => {
      state.courseTopicStatus = REQUEST_STATUS.ERROR;
      state.courseTopicMessage = action.payload;
    },
  },
});

export const {
  getCourseTopicRequest,
  getCourseTopicSuccess,
  getCourseTopicFail,
} = slice.actions;
export default slice.reducer;
