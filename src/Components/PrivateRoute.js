import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const { push } = useHistory();

  return(
    <Route
    {...rest}
    render={(props) => {
      if (window.localStorage.getItem('token')) {
        console.log('found the token');
        return <Component {...props} />;
      } else {
        console.log('cant find token');
        push('/signup');
        <Redirect to='/signup' />;
      }
    }}
  />
  );
};

export default PrivateRoute;
