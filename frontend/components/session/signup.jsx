import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <section className="signup">
        <form className="signup">
          <span>HELLO!!</span>
        </form>
      </section>
    )
  }
}

export default Signup;