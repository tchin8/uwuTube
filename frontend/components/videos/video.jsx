import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentIndexContainer from './comment_index_container';

import NavContainer from '../nav/nav_container'

class Video extends React.Component {
  constructor(props) {
    super(props);

    if (props.video) {
      this.state = {
        user_id: props.currentUser.id || '',
        video_id: props.match.params.videoId,
        body: ''
      }
    }
  }

  componentDidMount() {
    this.props.fetchUsers()
      .then(() => this.props.fetchVideos())
      .then(() => this.props.fetchComments(this.props.match.params.videoId));
      // .then(() => this.props.fetchVideo(this.props.match.params.videoId));
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
    const { video, users, currentUser } = this.props;
    if (!video || !video.comments) return null;
    let uploader = users[video.user_id];
    let numComments = video.comments.length;

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

              <div className='row-2'>
                <div className='col-thumbnail'>
                  <div className='user-circle'>
                    <span>{uploader.fname[0].toUpperCase()}</span>
                  </div>
                </div>
                <div className='col-info'>
                  <span className='name'>{uploader.fname} {uploader.lname}</span>
                  <span>0 subscribers</span>
                  {/* make dynamic subs later */}
                  <p>{video.description}</p>
                </div>

                <button>SUBSCRIBE</button>
                {/* make this button functional */}
              </div>
            </div>

            <div className='comments'>
              <span>{numComments} {numComments === 1 ? 'comment' : 'comments'}</span>
              <form className='comment'>
                {/* <div className='user-circle'>
                  <span>{currentUser.fname[0].toUpperCase()}</span>
                </div> */}
                <div>
                  <textarea placeholder='Add a public comment'></textarea>
                  <span className='hidden'>Cancel</span>
                  {/* <button className='hidden' disabled={this.state.body.length}>COMMENT</button> */}
                </div>
              </form>
              <CommentIndexContainer users={users} video={video}/>
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