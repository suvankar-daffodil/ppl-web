import React from "react";
import { Switch } from "react-router-dom";

import PrivateRoute from "./routes/private-route";
import CustomAccessRoute from "./routes/custom-route";
import HomePage from "../pages/home";
import AuthPage from "../pages/authentication";
import SinglePostPage from "../pages/single-post";

const Main = props => {
  const { currentUser } = props;

  return (
    <Switch>
      <PrivateRoute
        exact
        path="/"
        component={HomePage}
        currentUser={currentUser}
      />

      <CustomAccessRoute
        path="/auth"
        component={AuthPage}
        currentUser={currentUser}
      />

      <PrivateRoute
        path="/posts/:postId"
        component={SinglePostPage}
        currentUser={currentUser}
      />
    </Switch>
  );
};

export default Main;
