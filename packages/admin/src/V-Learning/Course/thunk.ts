import {
  getCoursePageRequest,
  getCoursePageSuccess,
  getCoursePageFail,
} from './reducer';
import AuthenticationService from '../../services/AuthenticationService';
import { STATUS_CODE } from '../../constants/common';

export const fetchDataCoursePage = ({ codeGroup, page, pageSize }) => {
  return async (dispatch) => {
    dispatch(getCoursePageRequest);
    try {
      const response = await AuthenticationService.getCoursePage({
        codeGroup,
        page,
        pageSize,
      });
      if (response.status === STATUS_CODE.SUCCESS) {
        dispatch(getCoursePageSuccess(response.data));
      }
    } catch (err) {
      dispatch(getCoursePageFail(err.response.data.message));
    }
  };
};
