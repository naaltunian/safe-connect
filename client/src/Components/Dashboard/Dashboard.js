import React from 'react';
import "./Dashboard.css";
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    render() {
        return(
            <div>
                <h1>Dashboard</h1>
                <Link to="/contacts">Contacts</Link>
                <Link to="/add-contacts">Add Contact</Link>
                <Link to="/status" >Status</Link>
            </div>
        )
    }
}

export default Dashboard;