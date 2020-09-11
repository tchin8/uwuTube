import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CommentIndexItem({ comment, users }) {

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

  let commenter = users[comment.user_id];

  return (
    <div className="each-comment">
      <div className="user-circle">
        <span>{commenter.fname[0].toUpperCase()}</span>
      </div>
      <div className='comment-details'>
        <div className='row-1'>
          <span>{commenter.fname} {commenter.lname}</span>
          <span>{commentedTimeAgo(comment.created_at)}</span>
        </div>
        <span className='actual-comment'>{comment.body}</span>
        <div className='row-3'>
          <button className='reply'>REPLY</button>
        </div>
      </div>
    </div>
  );
};

export default CommentIndexItem;