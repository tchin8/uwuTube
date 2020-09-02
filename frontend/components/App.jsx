import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import NavContainer from './nav/nav_container';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_container';

const App = () => (
  <div>
    <Route exact path="/" component={NavContainer} />
    <Route path="/signin" component={LoginContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
  </div>
);

export default App;