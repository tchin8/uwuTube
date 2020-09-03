import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import { withRouter } from 'react-router-dom'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: props.currentUser,
    }
  }

  render() {
    let signInOrLoggedIn = this.state.currentUser ? 
      <button className="user-circle" onClick={this.props.logout}>
        {/* after fetch user, get user's first initial fname[0].toUpperCase() */}
      </button> : 
      <Link to="/login">
        <button className="signin">
          <FontAwesomeIcon icon="user-circle" className="user-circle" />
          <span>SIGN IN</span>
        </button>
      </Link>
  
    return (
      <section className="top-nav">
        <div className="left">
          <button>
            <FontAwesomeIcon icon="bars" className="bars" />
          </button>
  
          <Link to="/">
            <button className="logo">
              <FontAwesomeIcon icon={["fab", "youtube"]} className="youtube" />
              <span>uwuTube</span>
            </button>
          </Link>
        </div>
  
        <form className="search" >
          <input type="text" placeholder="Search" />
          <button type="submit">
            <FontAwesomeIcon icon="search" className="search" />
          </button>
        </form>
  
        {signInOrLoggedIn}
      </section>
    );
  }
}

export default Nav;