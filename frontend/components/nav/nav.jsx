import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import { withRouter } from 'react-router-dom'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = props => {

  return (
    <section className="top-nav">
      
      <form className="search">
        <input type="text"
          placeholder="Search"/>
        <button type="submit">
          <FontAwesomeIcon icon="search" className="search" />
        </button>
      </form>

      {/* need dynamic button, logged in then it's our initial */}
      <button className="signin">
        <FontAwesomeIcon icon="user-circle" className="user-circle" />
        <span>SIGN IN</span>
      </button>
    </section>
  );
}

export default Nav;