/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import RouterInterceptor from 'utils/routerInterceptor';
import MainLayout from 'layouts/MainLayout';
import ScrolToTop from 'components/ScrollToTop';
import Login from 'containers/Login/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';
import reducer from './reducer';
import saga from './saga';

export default function App() {
  useInjectReducer({ key: 'global', reducer });
  useInjectSaga({ key: 'global', saga });
  return (
    <div>
      <Helmet
        titleTemplate="Video Generator Admin"
        defaultTitle="Video Generator Admin"
      >
        <meta name="description" content="Video Generator Admin" />
      </Helmet>
      <ScrolToTop />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <RouterInterceptor path="/in" component={MainLayout} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
