import { connect } from 'react-redux';

import Nav from './nav';
import { login, signup, logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  logout: user => dispatch(logout(user)),
  openModal: modal => dispatch(openModal(modal)),
})

export default connect(mSTP, mDTP)(Nav);