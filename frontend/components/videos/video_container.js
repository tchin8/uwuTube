import { connect } from 'react-redux';

import Video from "./video";
// import { login, signup, logout } from "../../actions/session_actions";

const mSTP = (state, ownProps) => ({
  currentUser: state.session.id,
  video: state.entities.videos[ownProps.match.params.videoId],
});

const mDTP = dispatch => ({
  // login: (user) => dispatch(login(user)),
  // signup: (user) => dispatch(signup(user)),
  // logout: (user) => dispatch(logout(user)),
});

export default connect(mSTP, mDTP)(Video);
