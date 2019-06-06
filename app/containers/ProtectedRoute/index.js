/**
 *
 * Auth
 * Higher Order Component that blocks navigation when the user is not logged in
 * and redirect the user to login page
 *
 * Wrap your protected routes to secure your container
 */

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import currentUser from 'utils/userService';

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    currentUser.getUserInfo() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/auth',
        state: { from: props.location }
      }}/>
    )
  )}/>
);
