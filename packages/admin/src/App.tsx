import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import path from 'admin/src/constants/clientPath';
import HomeUI from './V-Learning/UIHome';
import AppBar from './components/AppBar';
import Course from './V-Learning/Course';
import Blog from './V-Learning/BlogUi';
import EventUi from './V-Learning/EventUi';
import Information from './V-Learning/Information';
import ErrorUi from './components/Errors';
import CourseCatalog from './V-Learning/CourseCatalog';
import DetailCourse from './V-Learning/DetailCourse';
import SignIn from './V-Learning/SignIn';
import Accounts from './V-Learning/Accounts';
import SearchCourse from './V-Learning/SearchCourse';
import history from './utils/history';

function App() {
  const s3ConfigPath = (/#!(\/.*)$/.exec(history.location.hash) || [])[1];
  if (s3ConfigPath) {
    history.replace(s3ConfigPath);
  }
  return (
    <>
      {/* <AppBar /> */}

      <HashRouter>
        <Switch>
          <Route exact path={path.ROOT} component={HomeUI} />
          <Route path={path.COURSE} component={Course} />
          <Route path={path.BLOG} component={Blog} />
          <Route path={path.EVENT} component={EventUi} />
          <Route path={path.INFORMATION} component={Information} />
          <Route path={path.LOGIN} component={SignIn} />
          <Route path={path.ACCOUNT} component={Accounts} />
          <Route path="/danhmuckhoahoc/:codecourse" component={CourseCatalog} />
          <Route path="/sukien/:codeEvent" component={ErrorUi} />
          <Route path="/chitiet/:codeDetail" component={DetailCourse} />
          <Route path="/chitiet/" component={ErrorUi} />
          <Route path="/timkiem/:codeSearch" component={SearchCourse} />

          {/* <Route exact path={path.LOGIN} component={LoginPage} /> */}
          {/**
           * PROTECTED PATHS
           */}
          {/* <ProtectedRoute path={path.ROOT} component={DefaultSidebar} /> */}
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
