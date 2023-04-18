import React from 'react';
import { Switch, Route } from 'react-router-dom';
import clsx from 'clsx';
import Login from 'containers/Login/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { Home } from '../pages/Home';
import { Mypage } from '../pages/Mypage';

import { DepartmentSetupPage } from '../pages/DepartmentSetupPage';
import { SubDepartmentSetupPage } from '../pages/SubDepartmentSetupPage';
import { DeviceSetupPage } from '../pages/DeviceSetupPage';
import { useStyles } from '../static/MiniDrawerStyles';
import SimpleAppBar from './SimpleAppBar';
import { CustomPaginationActionsTable } from '../pages/ManagerAccount';
import { AddRule } from '../pages/AddRule';

export const Routing = props => {
  const { content, contentShift } = useStyles();
  const { openSideBar } = props;

  return (
    <main
      className={clsx(content, {
        [contentShift]: openSideBar,
      })}
    >
      <SimpleAppBar />
      {/* <div className={toolbar} /> */}
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="/mypage" component={Mypage} />
        <Route
          path="/accountManager"
          exact
          component={CustomPaginationActionsTable}
        />
        <Route path="/accountManager/addRule" component={AddRule} />
        <Route
          path="/generalSetup/department"
          component={DepartmentSetupPage}
        />
        <Route
          path="/generalSetup/sub-department"
          component={SubDepartmentSetupPage}
        />
        <Route path="/device" component={DeviceSetupPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </main>
  );
};
