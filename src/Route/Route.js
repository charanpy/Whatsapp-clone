import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Auth from '../pages/Auth/Auth.container';
import PrivateRoute from './PrivateRoute';
import Profile from '../pages/EditProfile/Profile';

const AppRoute = () => (
  <Switch>
    <PrivateRoute exact path='/' component={Home} />
    <Route exact path='/signin' component={Auth} />
    <PrivateRoute path='/edit' component={Profile} />
  </Switch>
);

export default AppRoute;
