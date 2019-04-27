import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Registration extends React.Component  {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        country: ''
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        First Name:
                        <input type="text" name="firstName"/>
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" />
                    </label>
                    <label>
                        email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Birthdate:
                        <input type="text" name="birthdate" />
                    </label>
                    <label>
                        Telephone:
                        <input type="text" name="telephone" />
                    </label>
                    <label>
                        Country:
                        <input type="text" name="country" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Registration;