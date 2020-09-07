import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavContainer from '../nav/nav_container'

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavContainer />
      </>
    )
  }
}

export default Video;