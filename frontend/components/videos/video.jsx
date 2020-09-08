import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavContainer from '../nav/nav_container'

class Video extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId);
  }

  render() {
    const { video } = this.props;
    if (!video) return null;

    return (
      <section className="video-show">
        <NavContainer />
        <section className="main">
          <div className="left">
            <div className='video-container'>
              <video src={video.videoUrl} controls>

              </video>
            </div>
          </div>

          <div className='right'>
            <span>Up Next</span>
            {/* ul, li's of videos */}
          </div>
        </section>
      </section>
    )
  }
}

export default Video;