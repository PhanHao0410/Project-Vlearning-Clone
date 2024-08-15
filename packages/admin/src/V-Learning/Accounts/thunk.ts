import {
  getAccountRequest,
  getAccountSuccess,
  getAccountFail,
  getCancelCourseRequest,
  getCancelCourseSuccess,
  getCancelCourseFail,
  getUpdateAccountRequest,
  getUpdateAccountSuccess,
  getUpdateAccountFail,
} from './reducer';
import AuthenticationService from '../../services/AuthenticationService';
import { STATUS_CODE } from '../../constants/common';

export const fetchDataAccount = (action) => {
  return async (dispatch) => {
    dispatch(getAccountRequest());
    try {
      const response = await AuthenticationService.getInformAccount(action);
      if (response.status === STATUS_CODE.SUCCESS) {
        dispatch(getAccountSuccess(response.data));
      }
    } catch (err) {
      dispatch(getAccountFail(err.response.data));
    }
  };
};

export const fetchDataCancelCourse = (action) => {
  return async (dispatch) => {
    dispatch(getCancelCourseRequest());
    try {
      const response = await AuthenticationService.cancelCourseAccount(action);
      if (response.status === STATUS_CODE.SUCCESS) {
        dispatch(getCancelCourseSuccess(response.data));
      }
    } catch (err) {
      dispatch(getCancelCourseFail(err.response.data));
    }
  };
};

export const fetchDataUpdateAccount = (action) => {
  return async (dispatch) => {
    dispatch(getUpdateAccountRequest());
    try {
      const response = await AuthenticationService.updateAccount(action);
      if (response.status === STATUS_CODE.SUCCESS) {
        dispatch(getUpdateAccountSuccess(response.data));
      }
    } catch (err) {
      dispatch(getUpdateAccountFail(err.response.data));
    }
  };
};
