import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: props.currentUser,
    }
  }

  render() {
    let { currentUser } = this.state;

    let signInOrLoggedIn = currentUser ? 
      <button className="user-circle" onClick={this.props.logout}>
        <span>{currentUser.fname[0].toUpperCase()}</span>
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
  
        <div className="right">
          <div className="upload">
            {/* onClick open modal */}
            <FontAwesomeIcon icon="video" className="video" />
            <FontAwesomeIcon icon="plus" className="plus" />
          </div>
          {signInOrLoggedIn}
        </div>
      </section>
    );
  }
}

export default Nav;