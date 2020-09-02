import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import NavContainer from './nav/nav_container';

const App = () => (
  <div>
    <Route exact path="/" component={NavContainer} />
  </div>
);

export default App;