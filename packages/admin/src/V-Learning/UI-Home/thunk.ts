import { getDataRequest, getDataSuccess, getDataFail } from './reducer';
import AuthenticationService from '../../services/AuthenticationService';
import { STATUS_CODE } from '../../constants/common';

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(getDataRequest);
    try {
      const response = await AuthenticationService.getData();
      if (response.status === STATUS_CODE.SUCCESS) {
        dispatch(getDataSuccess(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
