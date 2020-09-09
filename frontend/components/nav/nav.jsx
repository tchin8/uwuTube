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

  componentDidMount() {
    if (this.props.match) {
      this.props.fetchUsers()
        .then(() => this.props.fetchVideos());
    }
  }

  render() {
    let { currentUser } = this.state;
    let { openModal } = this.props;

    let signInOrLoggedIn, logInOrUpload;
    if (currentUser) {
      signInOrLoggedIn = (
        <button className="user-circle" onClick={this.props.logout}>
          <span>{currentUser.fname[0].toUpperCase()}</span>
        </button>
      )
      
      logInOrUpload = (
        <div className="upload" onClick={() => openModal('Upload Video')}>
          <FontAwesomeIcon icon="video" className="video" />
          <FontAwesomeIcon icon="plus" className="plus" />
        </div>
      )
    } else {
      signInOrLoggedIn = (
        <Link to="/login">
          <button className="signin">
            <FontAwesomeIcon icon="user-circle" className="user-circle" />
            <span>SIGN IN</span>
          </button>
        </Link>
      )

      logInOrUpload = (
        <Link to="/login" className="upload">
          <FontAwesomeIcon icon="video" className="video" />
          <FontAwesomeIcon icon="plus" className="plus" />
        </Link>
      )
    }

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
          {logInOrUpload}
          {signInOrLoggedIn}
        </div>
      </section>
    );
  }
}

export default Nav;