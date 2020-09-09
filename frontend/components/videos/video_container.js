import { connect } from 'react-redux';

import Video from "./video";
import { fetchVideo, fetchVideos } from "../../actions/video_actions";
import { fetchUsers } from '../../actions/user_actions';

const mSTP = (state, ownProps) => ({
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id],
  video: state.videos[ownProps.match.params.videoId],
});

const mDTP = dispatch => ({
  fetchVideo: videoId => dispatch(fetchVideo(videoId)),
  fetchVideos: () => dispatch(fetchVideos()),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mSTP, mDTP)(Video);
