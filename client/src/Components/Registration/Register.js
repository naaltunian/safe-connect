import React from 'react';
import { Link } from 'react-router-dom';

class Registration extends React.Component  {

        state = {
            firstName: '',
            lastName: '',
            email: '',
            telephone: '',
            country: '',
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
          console.log(this.state.email)
          this.setState({
              email: "",
              error: false,
              disabled: false
          });
        } else {
            console.log('Error')
            this.setState({
                email: "",
                error: true,
                disabled: true
          })
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
                        <input type="email" name="email" value={this.state.email} onChange={this.handleEmail} />
                    </label>
                    <label>
                        Birthdate:
                        <input type="text" name="birthdate" value={this.state.birthdate} onChange={this.handleChange} />
                    </label>
                    <label>
                        Telephone:
                        <input type="text" name="telephone" value={this.state.telephone} onChange={this.handleChange} />
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