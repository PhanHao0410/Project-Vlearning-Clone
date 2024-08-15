import {
  getCourseCatalogRequest,
  getCourseCatalogSuccess,
  getCourseCatalogFail,
} from './reducer';
import AuthenticationService from '../../services/AuthenticationService';
import { STATUS_CODE } from '../../constants/common';

export const fetchDataCourseCatalog = () => {
  return async (dispatch) => {
    dispatch(getCourseCatalogRequest);
    try {
      const response = await AuthenticationService.getCourseCatalog();
      if (response.status === STATUS_CODE.SUCCESS) {
        dispatch(getCourseCatalogSuccess(response.data));
      }
    } catch (err) {
      dispatch(getCourseCatalogFail(err.response.data.message));
    }
  };
};
