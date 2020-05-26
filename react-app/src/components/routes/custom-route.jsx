import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

const CustomAccessRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const { currentUser } = rest;

  return (
    <Route {...rest}>
      {currentUser ? (
        <Redirect to={{ pathname: "/", state: { from: location } }} />
      ) : (
        <Component {...rest} />
      )}
    </Route>
  );
};

export default CustomAccessRoute;
