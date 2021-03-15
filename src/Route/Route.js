import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Spinner from '../components/Spinner/SpinnerOverlay';
import ErrorBoundary from '../components/error-boundary/Error-boundary';

const Home = lazy(() => import('../pages/Home/Home'));
const Auth = lazy(() => import('../pages/Auth/Auth.container'));
const Profile = lazy(() => import('../pages/EditProfile/Profile'));

const AppRoute = () => (
  <Switch>
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/signin' component={Auth} />
        <PrivateRoute path='/edit' component={Profile} />
      </Suspense>
    </ErrorBoundary>
  </Switch>
);

export default AppRoute;
