import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comment, users } = this.props;

    let commenter = users[comment.user_id]

    return (
      <div>

      </div>
    )
  }
};

export default CommentIndexItem;