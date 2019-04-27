import React from 'react';
import './Login.css';

class Login extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email: 
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password: 
                        <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Login;