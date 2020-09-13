import React from 'react';
import CommentIndexItem from './comment_index_item';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { video, users, fetchComments, newComments } = this.props;
    if (!video.comments) return null;

    let comments;
    comments = Object.values(newComments);
    return (
      <ul className="comments-index">
        {comments.map(comment => (
          <CommentIndexItem key={comment.id}
            // fetchComments={fetchComments}
            comment={comment}
            video={video}
            users={users} />
        ))}
      </ul>
    )
  }
};

export default CommentIndex;