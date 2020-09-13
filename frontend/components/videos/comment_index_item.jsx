import React from 'react';
import CommentIndex from "./comment_index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CommentIndexItem({ comment, users, video }) {

  const commentedTimeAgo = (datetime) => {
    if (comment.created_at === undefined) {
      return "Just now";
    }

    const now = new Date();
    let then = new Date(datetime);
    // const then = (t - 10800);
    const secs = ((now.getTime() - then) / 1000);

    if (secs < 60) {
      return "1 minute ago"
    } else if (secs < 3600) {
      return parseInt(secs / 60) + " minutes ago";
    } else if (secs < 86400) {
      return parseInt(secs / 3600) + " hours ago";
    } else if (secs < 604800) {
      return parseInt(secs / 86400) + " days ago";
    } else if (secs < 31449600) {
      return parseInt(secs / 604800) + " weeks ago";
    } else {
      return parseInt(secs / 31449600) + " years ago";
    }
  }

  const handleRepliesButton = () => {
    const view = document.getElementById('view');
    const hide = document.getElementById('hide');
    const replies = document.getElementsByClassName('comment-replies')[0];

    view.classList.toggle('show')
    hide.classList.toggle('show')
    replies.classList.toggle('show')
  }

  let commenter = users[comment.user_id];
  let repliesBtn = null, replies = null;
  const reps = comment.replies;
  if (reps) {
    if (reps.length > 0) {
      repliesBtn = (
        <div>
          <button className="replies view show" id='view' onClick={() => handleRepliesButton()}>
            <FontAwesomeIcon icon="caret-down" className="caret" />
            View {reps.length === 1 ? "reply" : `${reps.length} replies`}
          </button>
          <button className="replies hide" id='hide' onClick={() => handleRepliesButton()}>
            <FontAwesomeIcon icon="caret-up" className="caret" />
            Hide {reps.length === 1 ? "reply" : `${reps.length} replies`}
          </button>
        </div>
      );
      replies = reps.map((r, i) => <div className='comment-replies'>
        <CommentIndex key={i} users={users} video={video} newComments={reps}/>
      </div>)
    }
  }

  return (
    <div className="each-comment">
      <div className="user-circle">
        <span>{commenter.fname[0].toUpperCase()}</span>
      </div>
      <div className="comment-details">
        <div className="row-1">
          <span>
            {commenter.fname} {commenter.lname}
          </span>
          <span>{commentedTimeAgo(comment.created_at)}</span>
        </div>
        <span className="actual-comment">{comment.body}</span>
        <div className="row-3">
          <FontAwesomeIcon
            icon="thumbs-up"
            className="thumbs-up"
          />
          <FontAwesomeIcon
            icon="thumbs-down"
            className="thumbs-down"
          />
          <button className="reply">REPLY</button>
        </div>
        {repliesBtn}
        {replies}
      </div>
    </div>
  );
};

export default CommentIndexItem;