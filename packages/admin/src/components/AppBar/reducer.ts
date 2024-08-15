import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';

const sliceName = 'getCourseCatalog';

const slice = createSlice({
  name: sliceName,
  initialState: {
    courseCatalogStatus: REQUEST_STATUS.IDLE,
    courseCatalogMessage: '',
    dataCourseCatalog: [],
  },
  reducers: {
    getCourseCatalogRequest: (state) => {
      state.courseCatalogStatus = REQUEST_STATUS.REQUESTING;
      state.courseCatalogMessage = '';
    },
    getCourseCatalogSuccess: (state, action) => {
      state.courseCatalogStatus = REQUEST_STATUS.SUCCESS;
      state.dataCourseCatalog = action.payload;
    },
    getCourseCatalogFail: (state, action) => {
      state.courseCatalogStatus = REQUEST_STATUS.ERROR;
      state.courseCatalogMessage = action.payload;
    },
  },
});

export const {
  getCourseCatalogRequest,
  getCourseCatalogSuccess,
  getCourseCatalogFail,
} = slice.actions;

export default slice.reducer;
