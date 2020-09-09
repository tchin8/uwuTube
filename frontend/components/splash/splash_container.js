import { connect } from "react-redux";

import Splash from "./splash";
import { login, signup, logout } from "../../actions/session_actions"; 
import { fetchVideos } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = (state) => ({
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id],
  videos: state.videos,
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: (user) => dispatch(logout(user)),
  fetchVideos: () => dispatch(fetchVideos()),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mSTP, mDTP)(Splash);
