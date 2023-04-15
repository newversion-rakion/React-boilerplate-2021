/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React from 'react';
import { Helmet } from 'react-helmet';
// import { Switch, Route } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
// import RouterInterceptor from 'utils/routerInterceptor';

// import AdminLayout from 'layouts/AdminLayout';
import ScrolToTop from 'components/ScrollToTop';

// import { ROUTER_LOGIN } from 'utils/constants';

// import Login from 'containers/Login/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

import reducer from './reducer';
import saga from './saga';
import MainPageContainer from '../../layouts/MainPageContainer';
export default function App() {
  useInjectReducer({ key: 'global', reducer });
  useInjectSaga({ key: 'global', saga });
  return (
    <div>
      <Helmet titleTemplate="Indochina" defaultTitle="Indochina">
        <meta name="description" content="Indochina" />
      </Helmet>
      <ScrolToTop />
      <MainPageContainer />
      {/* <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/home" component={MainPageContainer} />
        <Route path={ROUTER_LOGIN} exact component={Login} />
        <Route path="/in" component={AdminLayout} />
        <Route path="" component={NotFoundPage} />
      </Switch> */}
      <GlobalStyle />
    </div>
  );
}
