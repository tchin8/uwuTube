import { connect } from "react-redux";

import Splash from "./splash";
import { login, signup, logout } from "../../actions/session_actions";

const mSTP = (state) => ({
  currentUser: state.session.id,
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: (user) => dispatch(logout(user)),
});

export default connect(mSTP, mDTP)(Splash);
