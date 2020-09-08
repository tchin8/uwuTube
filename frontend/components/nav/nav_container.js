import { connect } from 'react-redux';

import Nav from './nav';
import { fetchVideos } from '../../actions/video_actions';
import { login, signup, logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  logout: user => dispatch(logout(user)),
  openModal: modal => dispatch(openModal(modal)),
  fetchVideos: () => dispatch(fetchVideos()),
  fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mSTP, mDTP)(Nav);