import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {
        return (
            <>
                <div className="signin-border">

                </div>
            </>
        )
    }


}

export default LoginForm