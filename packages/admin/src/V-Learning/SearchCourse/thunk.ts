import {
  getSearchCourseRequest,
  getSearchCourseSuccess,
  getSearchCourseFail,
} from './reducer';
import AuthenticationService from '../../services/AuthenticationService';
import { STATUS_CODE } from '../../constants/common';

export const fetchDataSearchCourse = ({ codeSearch, codeGroup }) => {
  return async (dispatch) => {
    dispatch(getSearchCourseRequest());
    try {
      const response = await AuthenticationService.getSearchCourse({
        codeSearch,
        codeGroup,
      });
      if (response.status === STATUS_CODE.SUCCESS) {
        dispatch(getSearchCourseSuccess(response.data));
      }
    } catch (err) {
      dispatch(getSearchCourseFail(err.response.data));
    }
  };
};
