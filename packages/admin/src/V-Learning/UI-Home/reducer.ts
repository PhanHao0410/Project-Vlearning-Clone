import { createSlice } from '@reduxjs/toolkit';

const sliceName = 'getData';

const slice = createSlice({
  name: sliceName,
  initialState: {
    isLoading: false,
    dataList: [],
    error: '',
  },
  reducers: {
    getDataRequest: (state, action) => {
      state.isLoading = true;
    },
    getDataSuccess: (state, action) => {
      state.dataList = action.payload;
    },
    getDataFail: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { getDataRequest, getDataSuccess, getDataFail } = slice.actions;

export default slice.reducer;
