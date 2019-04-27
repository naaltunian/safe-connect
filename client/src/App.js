import React from 'react';
import  Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Register from './Components/Registration/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return(
      <Router>
        <Navbar />

        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        
      </Router>
    )
  }
}

export default App;
