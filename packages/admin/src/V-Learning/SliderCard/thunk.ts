import {
  getListCourseRequest,
  getListCourseSuccess,
  getListCourseFail,
} from './reducer';
import AuthenticationService from '../../services/AuthenticationService';
import { STATUS_CODE } from '../../constants/common';

export const fetchDataListCourse = () => {
  return async (dispatch) => {
    dispatch(getListCourseRequest);
    try {
      const response = await AuthenticationService.getListCourse();
      if (response.status === STATUS_CODE.SUCCESS) {
        dispatch(getListCourseSuccess(response.data));
      }
    } catch (err) {
      dispatch(getListCourseFail(err.response.data.message));
    }
  };
};
