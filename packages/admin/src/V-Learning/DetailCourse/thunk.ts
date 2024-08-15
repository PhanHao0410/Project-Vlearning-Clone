import { PayloadAction } from '@reduxjs/toolkit';
import {
  getDetailCourseRequest,
  getDetailCourseSuccess,
  getDetailCourseFail,
  getSubmitCourseRequest,
  getSubmitCourseSuccess,
  getSubmitCourseFail,
} from './reducer';
import AuthenticationService from '../../services/AuthenticationService';
import { STATUS_CODE } from '../../constants/common';
import { SubmitForm } from '../../types/Requests';

export const fetchDataDetailCourse = (action) => {
  return async (dispatch) => {
    dispatch(getDetailCourseRequest());
    try {
      const response = await AuthenticationService.getDetailCourse(action);
      if (response.status === STATUS_CODE.SUCCESS) {
        dispatch(getDetailCourseSuccess(response.data));
      }
    } catch (err) {
      dispatch(getDetailCourseFail(err.response.data.message));
    }
  };
};
export const fetchDataSubmitCourse = (action) => {
  return async (dispatch) => {
    dispatch(getSubmitCourseRequest());
    try {
      const response = await AuthenticationService.postSubmitCourse(action);
      if (response.status === STATUS_CODE.SUCCESS) {
        dispatch(getSubmitCourseSuccess(response.data));
      }
    } catch (err) {
      dispatch(getSubmitCourseFail(err.response.data));
    }
  };
};
