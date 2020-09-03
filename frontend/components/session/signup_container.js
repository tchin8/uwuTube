import { connect } from "react-redux";

import Signup from "./signup";
import { signup } from "../../actions/session_actions";

const mSTP = (state) => ({
  errors: Object.values(state.errors.session),
});

const mDTP = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
});

export default connect(mSTP, mDTP)(Signup);
