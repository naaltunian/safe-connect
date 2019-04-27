import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Registration extends React.Component  {

        state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            country: '',
            password: '',
            safe: true,
            error: false,
            disabled: true
        }

    validateEmail(inputText)  {
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
        // /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.email.match(mailformat)) {
          this.setState({error: false, disabled: false});
          return true;
        } else  {
          this.setState({error: true, disabled: true});
          return false;
        }
    };

    handleEmail = email => {
        this.validateEmail(email)
        this.setState({
          email: email.target.value
        });
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      }

    onSubmit = async e => {
        e.preventDefault();
        if(this.validateEmail(this.state.email)) {
          const user = {
              firstName: this.state.firstName,
              lastName:  this.state.lastName,
              phone: this.state.phone,
              birthday: this.state.birthday,
              email:     this.state.email,
              country:   this.state.country,
              safe:      true,
              password:  this.state.password
          }
          
          axios.post('http://localhost:5000/users', user, {
              headers: {"Access-Control-Allow-Origin": "*"}
          })
            .then(res => {
                console.log(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
        } else {
            console.log('Error')
        }
    };

    render() {
        return (
            <div>
                <form>
                    <label>
                        First Name:
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    </label>
                    <label>
                        email:
                        <input type="text" name="email" value={this.state.email} onChange={this.handleEmail} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <label>
                        Birthday:
                        <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleChange} />
                    </label>
                    <label>
                        Phone:
                        <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                    </label>
                    <label>
                        Country:
                        <input type="text" name="country" value={this.state.country} onChange={this.handleChange} />
                    </label>
                    <button type="submit" value="Submit" disabled={this.state.disabled} onClick={this.onSubmit} >Submit</button>
                </form>
            </div>
        )
    }
}

export default Registration;