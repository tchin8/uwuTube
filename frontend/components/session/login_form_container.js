import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';
import LoginForm from '../session/login_form';

const mapStateToProps = state => ({
    loginErrors: state.errors.session,
    users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
    login: user => { return dispatch(login(user)) },
    fetchUsers: () => { return dispatch(fetchUsers()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);