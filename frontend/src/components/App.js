import React from "react";
import { Route } from "react-router-dom";
import Welcome from "./welcome";
import Login from "./login";
import Signup from "./signup";
import Dashboard from "./dashboard";
import { AuthRoute, ProtectedRoute } from "../util/route";

export default () => (
  <>
    <Route exact path="/" component={Welcome} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/dashboard" component={Dashboard} />
    <AuthRoute path="/login" component={Login} />
    <AuthRoute path="/signup" component={Signup} />
    <ProtectedRoute path="/dashboard" component={Dashboard} />
  </>
);
