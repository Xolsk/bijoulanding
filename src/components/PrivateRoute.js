import React from "react";
import { Route, Redirect } from 'react-router-dom';
import {isLogin} from "../services/login.js";


const PrivateRoute = ({component: Component, ...rest}) => {
  return (

      <Route {...rest} render={props => (
          isLogin() ?
              <Component {...props} />
          : <Redirect to="/admin" />
      )} />
  );
};

  export default PrivateRoute;