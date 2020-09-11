import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentIndexContainer from './comment_index_container';

import NavContainer from '../nav/nav_container'

class Video extends React.Component {
  constructor(props) {
    super(props);

    let currUser = props.currentUser ? props.currentUser.id : '';
    this.state = {
      user_id: currUser,
      video_id: undefined,
      body: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers()
      .then(() => this.props.fetchVideos())
      .then(() => this.props.fetchComments(this.props.match.params.videoId))
      .then(() => this.setState = ({
        user_id: this.props.currentUser,
        video_id: this.props.video.id,
      }));
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

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
  }

  render() {
    const { video, users, currentUser } = this.props;
    if (!video || !video.comments || !this.state) return null;
    let uploader = users[video.user_id];
    let numComments = video.comments.length;

    const defaultThumb = window.default_thumb;
    let commentThumbnail = !currentUser ? 
      <img src={defaultThumb} className='default-thumb'/> : 
      <span>{currentUser.fname[0].toUpperCase()}</span>

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

                {/* make this button functional */}
                <button>SUBSCRIBE</button>
                <FontAwesomeIcon icon={['far', 'bell']}
                  className="bell" />
              </div>
            </div>

            <div className='comments'>
              <span>{numComments} {numComments === 1 ? 'comment' : 'comments'}</span>
              <form className='comment' onSubmit={this.handleSumbit}>
                <div className='user-circle'>
                  {commentThumbnail}
                </div>
                <div>
                  <textarea placeholder='Add a public comment' 
                    onChange={this.update('body')}
                    value={this.state.body}></textarea>
                  <div className='btns'>
                    <span className='cxl hidden'>CANCEL</span>
                    <button className='hidden' disabled={!this.state.body.length}>COMMENT</button>
                  </div>
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