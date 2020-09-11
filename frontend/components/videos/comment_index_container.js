import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments } from '../../actions/comment_actions';


const mSTP = state => ({
  newComment: state.comments,
});

const mDTP = dispatch => ({
  fetchComments: videoId => dispatch(fetchComments(videoId)),
});

export default connect(mSTP, mDTP)(CommentIndex);