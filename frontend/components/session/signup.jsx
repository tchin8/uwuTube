import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirm: "",
      confirmError: false,
      inputPassword: "password",
    };

    this.fnameError = false;
    this.lnameError = false;
    this.emailError = false;
    this.emailError2 = false;
    this.passwordError = false;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.showPassword = this.showPassword.bind(this);

    /*
      Enter first name
      Enter last name
      Choose an email address
      This email is already in use
      Use 8 characters or more for your password
      Those passwords didn't match. Try again.
    */
  }

  handleErrors() {
    const errors = Array.from(this.props.errors);
    for (let i = 0; i < errors.length; i++) {
      const error = errors[i];

      if (error.includes("Fname")) {
        this.fnameError = true;
      } else if (error.includes("Lname")) {
        this.lnameError = true;
      } else if (error.includes("Email")) {
        if (error.includes("blank")) {
          this.emailError = true;
        } else {
          this.emailError2 = true;
        }
      } else if (error.includes("Password")) {
        this.passwordError = true;
      }
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fnameError = false;
    this.lnameError = false;
    this.emailError = false;
    this.emailError2 = false;
    this.passwordError = false;
    if (this.state.password !== this.state.confirm) {
      this.setState({ confirmError: true });
    }
    this.props.signup(this.state);
    // .then( fetchUser ??? )
  }

  showPassword() {
    if (this.state.inputPassword === "password") {
      this.setState({ inputPassword: "text" });
    } else {
      this.setState({ inputPassword: "password" });
    }
  }

  render() {
    const errors = Array.from(this.props.errors);
    if (errors.length) this.handleErrors();

    let passwordIcon;    
    if (this.state.inputPassword === 'password') {
        passwordIcon = <FontAwesomeIcon className="login-password-icon" icon={faEye} onClick={this.showPassword} />
    } else {
        passwordIcon = <FontAwesomeIcon className="login-password-icon" icon={faEyeSlash} onClick={this.showPassword} />
    }

    return (
      <section className="signup">
        <form className="signup" onSubmit={this.handleSubmit}>
          <div className="form-contents">
            <div className="header">
              <p>Create your Account</p>
              <p>to continue to uwuTube</p>
            </div>

            <div className="main">
              <div className="row-1">
                <div>
                  <input
                    type="text"
                    value={this.state.fname}
                    onChange={this.update("fname")}
                    className={this.fnameError ? "error" : ""}
                  />
                  <span className={this.state.fname.length ? "stay" : ""}>
                    First name
                  </span>
                </div>
                <div>
                  <input
                    type="text"
                    value={this.state.lname}
                    onChange={this.update("lname")}
                    className={this.lnameError ? "error" : ""}
                  />
                  <span className={this.state.lname.length ? "stay" : ""}>
                    Last name
                  </span>
                </div>
              </div>

              <div className="name-errors">
                <span
                  className={
                    this.fnameError ? "show fname-error" : "fname-error"
                  }
                >
                  <FontAwesomeIcon
                    icon="exclamation-circle"
                    className="exclamation-circle"
                  />
                  Enter first name
                </span>
                <span
                  className={
                    this.lnameError ? "show lname-error" : "lname-error"
                  }
                >
                  <FontAwesomeIcon
                    icon="exclamation-circle"
                    className="exclamation-circle"
                  />
                  Enter last name
                </span>
              </div>
              <div className="email">
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className={this.emailError || this.emailError2 ? "error" : ""}
                />
                <span className={this.state.email.length ? "stay" : ""}>
                  Your email address
                </span>
              </div>
              <div className="email-errors">
                <span
                  className={
                    this.emailError || this.emailError2
                      ? "show email-error"
                      : "email-error"
                  }
                >
                  <FontAwesomeIcon
                    icon="exclamation-circle"
                    className="exclamation-circle"
                  />
                  {this.emailError ? "Choose an email address" : ""}
                  {this.emailError2 ? "This email is already in use" : ""}
                </span>
              </div>

              <div className="row-3">
                <div>
                  <input
                    type={this.state.inputPassword}
                    value={this.state.password}
                    onChange={this.update("password")}
                    className={this.passwordError ? "error" : ""}
                  />
                  <span className={this.state.password.length ? "stay" : ""}>
                    Password
                  </span>
                </div>
                <div>
                  <input
                    type={this.state.inputPassword}
                    value={this.state.confirm}
                    onChange={this.update("confirm")}
                    className={this.state.confirmError ? "error" : ""}
                  />
                  <span className={this.state.confirm.length ? "stay" : ""}>
                    Confirm
                  </span>
                </div>
                {passwordIcon}
              </div>

              <div className="pw-errors">
                <span
                  className={
                    this.passwordError
                      ? "show password-error"
                      : "password-error"
                  }
                >
                  <FontAwesomeIcon
                    icon="exclamation-circle"
                    className="exclamation-circle"
                  />
                  <span>Use 6 characters or more for your password</span>
                </span>
                <span
                  className={
                    this.state.confirmError
                      ? "show confirm-error"
                      : "confirm-error"
                  }
                >
                  <FontAwesomeIcon
                    icon="exclamation-circle"
                    className="exclamation-circle"
                  />
                  <span>Those passwords didn't match. Try again.</span>
                </span>
              </div>

              <p
                className={
                  this.passwordError || this.state.confirmError ? "hidden" : ""
                }
              >
                Use 6 or more characters with a mix of letters, numbers &
                symbols
              </p>

              <div className="btns">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <div className="login">Sign in instead</div>
                </Link>
                <button type="submit" className="next">
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default Signup;