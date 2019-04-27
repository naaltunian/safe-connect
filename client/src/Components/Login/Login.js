import React from 'react';
import './Login.css';
import { userInfo } from 'os';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
        const user = {
            email:    this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:5000/users/login', user, {
            headers: {"Access-Control-Allow-Origin": "*"}
        })
            .then(res => {
                console.log(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
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
                   <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
                   <Link to='/dashboard'></Link>
                </form>
            </div>
        )
    }
}

export default Login;