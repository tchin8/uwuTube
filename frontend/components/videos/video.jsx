import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavContainer from '../nav/nav_container'

class Video extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId);
  }

  dateUploaded(datetime) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]

    let date = new Date(datetime);
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    return `${month} ${day}, ${year}`;
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
            <div className="info">
              <div className='row-1'>
                <span className='title'>{video.title}</span>
                <span>0 views • {this.dateUploaded(video.created_at)}</span>
                {/* make dynamic views later when add views column */}
              </div>
            </div>

            <div className='comments'>
              {/* comments go here */}
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