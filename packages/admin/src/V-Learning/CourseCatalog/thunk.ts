import {
  getCourseTopicRequest,
  getCourseTopicSuccess,
  getCourseTopicFail,
} from './reducer';
import AuthenticationService from '../../services/AuthenticationService';
import { STATUS_CODE } from '../../constants/common';

export const fetchDataCourseTopic = ({ codeGroup, CodeCourse }) => {
  return async (dispatch) => {
    dispatch(getCourseTopicRequest);
    try {
      const response = await AuthenticationService.getCourseTopic({
        codeGroup,
        CodeCourse,
      });
      if (response.status === STATUS_CODE.SUCCESS) {
        dispatch(getCourseTopicSuccess(response.data));
      }
    } catch (err) {
      dispatch(getCourseTopicFail(err.response.data.message));
    }
  };
};
