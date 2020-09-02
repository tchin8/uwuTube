import { connect } from 'react-redux';

import Nav from './nav';
import { login, signup, logout } from '../../actions/session_actions';

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  logout: user => dispatch(logout(user))
})

export default connect(null, mDTP)(Nav);