import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentIndexContainer from './comment_index_container';
import CommentFormContainer from './comment_form_container';

import NavContainer from '../nav/nav_container'

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers()
      .then(() => this.props.fetchVideos())
      .then(() => this.props.fetchComments(this.props.match.params.videoId));
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
      "Dec",
    ];

    let date = new Date(datetime);
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  render() {
    const { video, users, currentUser } = this.props;
    if (!video || !video.comments) return null;
    let uploader = users[video.user_id];
    let numComments = video.comments.length;

    return (
      <section className="video-show">
        <NavContainer />
        <section className="main">
          <div className="left">
            <div className="video-container">
              <video src={video.videoUrl} controls></video>
            </div>
            <div className="info">
              <div className="row-1">
                <span className="title">{video.title}</span>
                <span>0 views • {this.dateUploaded(video.created_at)}</span>
                {/* make dynamic views later when add views column */}
              </div>

              <div className="row-2">
                <div className="col-thumbnail">
                  <div className="user-circle">
                    <span>{uploader.fname[0].toUpperCase()}</span>
                  </div>
                </div>
                <div className="col-info">
                  <span className="name">
                    {uploader.fname} {uploader.lname}
                  </span>
                  <span>0 subscribers</span>
                  {/* make dynamic subs later */}
                  <p>{video.description}</p>
                </div>

                <div className="sub">
                  {/* make this button functional */}
                  <button>SUBSCRIBE</button>
                  {currentUser ? (
                    <FontAwesomeIcon icon={["far", "bell"]} className="bell" />
                  ) : null}
                </div>
              </div>
            </div>

            <div className="comments">
              <span>
                {numComments} {numComments === 1 ? "comment" : "comments"}
              </span>
              <CommentFormContainer video={video}/>
              <CommentIndexContainer
                users={users}
                video={video}
                currentUser={currentUser}
              />
            </div>
          </div>

          <div className="right">
            <span>Up Next</span>
            {/* ul, li's of videos */}
          </div>
        </section>
      </section>
    );
  }
}

export default Video;