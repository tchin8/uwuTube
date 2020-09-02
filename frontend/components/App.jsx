import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import NavContainer from './nav/nav_container';
import LoginContainer from './session/login_form_container';

const App = () => (
  <div>
    <Route exact path="/" component={NavContainer} />
    <Route path="/signin" component={LoginContainer} />
  </div>
);

export default App;