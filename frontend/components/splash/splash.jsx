import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: props.currentUser,
      focus: 'home',
    }
  }

  render() {
    let moreSelectionsOrLogIn;
    if (!this.state.currentUser) {
      moreSelectionsOrLogIn = (
        <>
        <div className="div"></div>
        <div className="login">
          <span>Sign in to like videos, comment, and subscribe.</span>
          <br />
          <Link to="/login">
            <button className="signin">
              <FontAwesomeIcon icon="user-circle" className="user-circle" />
              <span>SIGN IN</span>
            </button>
          </Link>
        </div>
        </>
      )
    } else {
      moreSelectionsOrLogIn = (
        <>
          <li className={this.state.focus === "your videos" ? "focus" : ""}>
            <FontAwesomeIcon icon="cloud-upload-alt" className="icon cloud" />
            <span>Your videos</span>
          </li>
          <li className={this.state.focus === "watch later" ? "focus" : ""}>
            <FontAwesomeIcon icon="clock" className="icon" />
            <span>Watch later</span>
          </li>
          <li className={this.state.focus === "liked videos" ? "focus" : ""}>
            <FontAwesomeIcon icon="thumbs-up" className="icon" />
            <span>Liked videos</span>
          </li>
        </>
      )
    }

    return (
      <section className="splash">
        <section className="left-nav">
          <ul>
            <li className={this.state.focus === "home" ? "focus" : ""}>
              <FontAwesomeIcon icon="home" className="icon home" />
              <span>Home</span>
            </li>
            <li className={this.state.focus === "trending" ? "focus" : ""}>
              <FontAwesomeIcon icon="fire" className="icon trending" />
              <span>Trending</span>
            </li>
            <li className={this.state.focus === "subscription" ? "focus" : ""}>
              <FontAwesomeIcon icon="layer-group" className="icon" />
              <span>Subscriptions</span>
            </li>
            <div className="div"></div>
            <li className={this.state.focus === "library" ? "focus" : ""}>
              <FontAwesomeIcon icon="play-circle" className="icon" />
              <span>Library</span>
            </li>
            <li className={this.state.focus === "history" ? "focus" : ""}>
              <FontAwesomeIcon icon="history" className="icon" />
              <span>History</span>
            </li>

            {moreSelectionsOrLogIn}
          </ul>
        </section>
        <section className="main">
          <span>
            HELLOOO MAIN!!
          </span>
        </section>
      </section>
    );
  }
}

export default Splash;