import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faChevronDown, faEye, faEyeSlash, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', 
            password:'',
            emailInput: 'n',
            inputPassword: 'password',
        } 
        this.handleSubmitEmail = this.handleSubmitEmail.bind(this);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        this.switchEmail = this.switchEmail.bind(this);
        this.showPassword = this.showPassword.bind(this);
        this.checkEmailExist = this.checkEmailExist.bind(this);
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        }
    }

    checkEmailExist(userObjects) {
        let emailValid = 'n';
        for(let i = 0; i < userObjects.length; i++) {
            if(this.state.email === userObjects[i].email) {
                emailValid = 't';
            }
        }
        if(emailValid === 't') {
            this.setState({ emailInput: 'y' });
        } else {
            this.setState({emailInput: 'e'});
        }
    }

    handleSubmitEmail(e) {
        e.preventDefault();
        this.props.fetchUsers().then(() => {
            this.checkEmailExist(Object.values(this.props.users));
        });
    }

    handleSubmitLogin(e) {
        e.preventDefault();
        this.props.login(this.state).then(() => {
        }, () => {
            this.setState({emailInput: 'pe'})
        });
    }

    switchEmail() {
        this.setState({emailInput: 'n'})
    }

    showPassword() {
        if (this.state.inputPassword === 'password') {
            this.setState({inputPassword: 'text'});
        } else {
            this.setState({inputPassword: 'password'});
        }
    }

    render() {
        let loginForm, passwordIcon;
        if (this.state.inputPassword === 'password') {
            passwordIcon = <FontAwesomeIcon className="login-password-icon" icon={faEye} onClick={this.showPassword} />
        } else {
            passwordIcon = <FontAwesomeIcon className="login-password-icon" icon={faEyeSlash} onClick={this.showPassword} />
        }
        if (this.state.emailInput === 'n') {
            loginForm =
                <>
                    <span className="login-logo">uWuTube</span>
                    <div className="login-signin">Sign in</div>
                    <div className="login-signin-two">to continue to uWuTube</div>
                    <div className="login-email-wrapper">
                        <form className="login-email" onSubmit={this.handleSubmitEmail}>
                            <input type="text" value={this.state.email} onChange={this.handleChange("email")} />
                            <span className={this.state.email.length ? "stay" : ""}>Email or Phone</span>
                        </form>
                        <span className="login-forgot-email">Forgot email?</span>
                        <span className="login-lm-1">Not your computer? Use Guest mode to sign in privately.</span>
                        <span className="login-lm-2">Learn more</span>

                        <div className="login-create-account-next">
                            <Link to="/signup" style={{ textDecoration: 'none' }}>
                                <span className="login-create-account">Create account</span>
                            </Link>
                            <div className="login-next" onClick={this.handleSubmitEmail}>
                                <span className="login-next-text">Next</span>
                            </div>
                        </div>
                    </div>
                </>
        } else if (this.state.emailInput === 'y') {
            loginForm = 
                    <>
                        <span className="login-logo">uWuTube</span>
                        <div className="login-signin">Welcome</div>
                        <div className="login-signin-two">
                            <div className="login-email-border" onClick={this.switchEmail}>
                                <FontAwesomeIcon className="login-user-icon" icon={faUserCircle} />
                                <span className="login-p-email">{this.state.email}</span>
                                <FontAwesomeIcon className="login-chervon-icon" icon={faChevronDown} />
                            </div>
                        </div>
                        <div className="login-email-wrapper">
                            <form className="login-email" onSubmit={this.handleSubmitLogin}>
                                <input type={this.state.inputPassword} value={this.state.password} onChange={this.handleChange("password")} />
                                <span className={this.state.password.length ? "stay" : ""}>Enter your password</span>
                                {passwordIcon}
                            </form>
                            <div className="login-forget-next">
                                <div className="login-forgot-password">
                                    <span className="login-forgot-password-text">Forgot Password?</span>
                                </div>
                                <div className="login-next" onClick={this.handleSubmitLogin}>
                                    <span className="login-next-text">Next</span>
                                </div>
                            </div>
                        </div>
                    </>
        } else if (this.state.emailInput === 'e'){
            loginForm =
                <>
                    <span className="login-logo">uWuTube</span>
                    <div className="login-signin">Sign in</div>
                    <div className="login-signin-two">to continue to uWuTube</div>
                    <div className="login-email-wrapper">
                        <form className="login-email" onSubmit={this.handleSubmitEmail}>
                            <input className="login-red" type="text" value={this.state.email} onChange={this.handleChange("email")} />
                            <span className={this.state.email.length ? "login-text-red" : ""}>Email or Phone</span>
                        </form>
                        <div className="login-error-wrapper">
                            <FontAwesomeIcon className="login-exclamation-icon" icon={faExclamationCircle} />
                            <span className="login-error-text">Couldn't find your uWuTube account.</span>
                        </div> 
                        <span className="login-forgot-email">Forgot email?</span>
                        <span className="login-lm-1">Not your computer? Use Guest mode to sign in privately.</span>
                        <span className="login-lm-2">Learn more</span>

                        <div className="login-create-account-next">
                            <Link to="/signup" style={{ textDecoration: 'none' }}>
                                <span className="login-create-account">Create account</span>
                            </Link>
                            <div className="login-next" onClick={this.handleSubmitEmail}>
                                <span className="login-next-text">Next</span>
                            </div>
                        </div>
                    </div>
                </>
        } else {
            loginForm =
                <>
                    <span className="login-logo">uWuTube</span>
                    <div className="login-signin">Welcome</div>
                    <div className="login-signin-two">
                        <div className="login-email-border" onClick={this.switchEmail}>
                            <FontAwesomeIcon className="login-user-icon" icon={faUserCircle} />
                            <span className="login-p-email">{this.state.email}</span>
                            <FontAwesomeIcon className="login-chervon-icon" icon={faChevronDown} />
                        </div>
                    </div>
                    <div className="login-email-wrapper">
                        <form className="login-email" onSubmit={this.handleSubmitLogin}>
                            <input className="login-red" type={this.state.inputPassword} value={this.state.password} onChange={this.handleChange("password")} />
                            <span className={this.state.password.length ? "login-text-red" : ""}>Enter your password</span>
                            {passwordIcon}
                        </form>
                        <div className="login-error-wrapper">
                            <FontAwesomeIcon className="login-exclamation-icon login-password-error" icon={faExclamationCircle} />
                            <span className="login-error-text">Wrong password. Try again or click Forgot password to reset it.</span>
                        </div> 
                        <div className="login-forget-next">
                            <div className="login-forgot-password">
                                <span className="login-forgot-password-text">Forgot Password?</span>
                            </div>
                            <div className="login-next" onClick={this.handleSubmitLogin}>
                                <span className="login-next-text">Next</span>
                            </div>
                        </div>
                    </div>
                </>
        }
        return (
            <>
                <div className="login">
                    <div className="login-border">
                        {loginForm}
                    </div>
                </div>
            </>
        )
    }
}

export default LoginForm