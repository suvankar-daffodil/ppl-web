import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const { currentUser } = rest;

  return (
    <Route {...rest}>
      {currentUser ? (
        <Component {...rest} />
      ) : (
        <Redirect
          to={{ pathname: "/auth/signin", state: { from: location } }}
        />
      )}
    </Route>
  );
};

export default PrivateRoute;
