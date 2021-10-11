import React from 'react';
import { Switch } from 'react-router-dom';
import RouterInterceptor from 'utils/routerInterceptor';

// import {} from 'utils/constants';

import MainLayoutStyle from './MainLayoutStyle';

// eslint-disable-next-line react/prop-types
const MainLayout = props => (
  <MainLayoutStyle>
    <MainNav {...props} />
    <main className="mainPage">
      <Switch>
        <RouterInterceptor
          path={''}
          exact
          component={QueryManagementUserDetail}
        />
      </Switch>
    </main>
  </MainLayoutStyle>
);

export default MainLayout;
