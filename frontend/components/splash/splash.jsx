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
    return (
      <section className="splash">
        <section className="left-nav">
          <ul>
            <li className={this.state.focus === "home" ? "focus" : ""}>
              <FontAwesomeIcon icon="home" className="icon" />
              <span>Home</span>
            </li>
            <li className={this.state.focus === "subscription" ? "focus" : ""}>
              <FontAwesomeIcon icon="layer-group" className="icon" />
              <span>Subscriptions</span>
            </li>
            <li className={this.state.focus === "library" ? "focus" : ""}>
              <FontAwesomeIcon icon="play-circle" className="icon" />
              <span>Library</span>
            </li>
            <li className={this.state.focus === "history" ? "focus" : ""}>
              <FontAwesomeIcon icon="history" className="icon" />
              <span>History</span>
            </li>
          </ul>
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