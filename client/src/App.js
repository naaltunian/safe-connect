import React from 'react';
import  Navbar from './Components/Navbar/Navbar';
import  Video from './Components/Video/Video';
import Login from './Components/Login/Login';
import Register from './Components/Registration/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Contacts from './Components/Contacts/Contacts';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return(
      <Router>
        <Navbar />
        

        <Route exact path="/" component={Video} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path="/contacts" component={Contacts} />
      </Router>
    )
  }
}

export default App;
