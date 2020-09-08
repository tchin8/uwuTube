import { connect } from 'react-redux';

import Video from "./video";
import { fetchVideo } from "../../actions/video_actions";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  video: state.videos[ownProps.match.params.videoId],
});

const mDTP = dispatch => ({
  fetchVideo: videoId => dispatch(fetchVideo(videoId)),
});

export default connect(mSTP, mDTP)(Video);
