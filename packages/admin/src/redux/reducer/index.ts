import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../utils/history';
import globalStore from '../../containers/Global/reducer';
import loginSlice from '../../containers/Login/reducer';
import dataSlice from '../../V-Learning/UIHome/reducer';
import listCourseReducer from '../../V-Learning/SliderCard/reducer';
import listCourseCatalogReducer from '../../components/AppBar/reducer';
import coursePageReducer from '../../V-Learning/Course/reducer';
import courseTopicReducer from '../../V-Learning/CourseCatalog/reducer';
import signUpReducer from '../../V-Learning/SignIn/reducer';
import detailCourseReducer from '../../V-Learning/DetailCourse/reducer';
import informAccountReducer from '../../V-Learning/Accounts/reducer';
import searchCourseReducer from '../../V-Learning/SearchCourse/reducer';

const rootReducer = combineReducers({
  router: connectRouter(history),
  globalStore,
  loginSlice,
  dataSlice,
  listCourseReducer,
  listCourseCatalogReducer,
  coursePageReducer,
  courseTopicReducer,
  signUpReducer,
  detailCourseReducer,
  informAccountReducer,
  searchCourseReducer,
});

export default rootReducer;
