import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Auth from '../pages/Auth/Auth.container';
import PrivateRoute from './PrivateRoute';
import Messages from '../pages/Messages/Messages';

const AppRoute = () => (
  <Switch>
    <PrivateRoute exact path='/' component={Home} />
    <Route exact path='/signin' component={Auth} />
    <PrivateRoute exact path='/message/:userId' component={Messages} />
  </Switch>
);

export default AppRoute;
