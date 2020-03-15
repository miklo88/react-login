import React from "react";
import { Route, Switch } from "react-router-dom";
// import routes below

import Landing from "../components/Landing";
import Signup from "../login/Signup";
import Login from "../login/Login";
import Users from "../user/users";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/users' component={Users} />
      </Switch>
    </>
  );
};

export default Routes;
