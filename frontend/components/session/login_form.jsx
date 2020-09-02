import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', 
            password:'',
        } 
        this.handleSubmitEmail = this.handleSubmitEmail.bind(this);
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmitEmail(e) {
        e.preventDefault();
        this.props.fetchUsers().then(console.log(this.props.users))
    }

    render() {
        return (
            <>
                <div className="login"> 
                    <div className="login-border">
                        <div className="login-signin">Sign in</div>
                        <div className="login-signin-two">to continue to uWuTube</div>
                        <div className="login-email-wrapper">
                            <form className="login-email" onSubmit={this.handleSubmitEmail}>
                                <input type="text" value={this.state.email} onChange={this.handleChange("email")}/>
                                <span className={this.state.email.length ? "stay" : ""}>Email or Phone</span>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LoginForm