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
import SplashContainer from './splash/splash_container';
import ModalContainer from './modal/modal_container';

const App = () => (
  <div>
    <Route path="/" component={ModalContainer} />
    <Route exact path="/" component={NavContainer} />
    <Route exact path="/" component={SplashContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
  </div>
);

export default App;