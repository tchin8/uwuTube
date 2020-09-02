import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import { withRouter } from 'react-router-dom'; 

export const Nav = props => {

  return (
    <section  className="top-nav">
      {/* need dynamic button, logged in then it's our initial */}
      <button className="signin">SIGN IN</button>
    </section>
  )
}