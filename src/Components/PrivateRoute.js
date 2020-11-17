import React from 'react';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return(
    <PrivateRoute
    {...rest}
    render={(props) => {
      if (window.localStorage.getItem('token')) {
        return <Component {...props} />;
      } else {
        <Redirect to='/signup' />;
      }
    }}
  />
  );
};

export default PrivateRoute;
