import React from "react";
import { Route, Switch } from "react-router-dom";

import Welcome from "../components/welcome-box";
import SignIn from "../components/forms/signin";
import Register from "../components/forms/signup";
import ResetPassword from "../components/forms/password-reset";

const AuthPage = props => {
  return (
    <div className="container">
      <div className="content">
        <Welcome />
        <Switch>
          <Route path="/auth/signin">
            <SignIn />
          </Route>

          <Route path="/auth/signup">
            <Register />
          </Route>

          <Route path="/auth/password-reset">
            <ResetPassword />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default AuthPage;
