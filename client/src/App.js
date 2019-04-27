import React from 'react';
import  Navbar from './Components/Navbar/Navbar';
import  Video from './Components/Video/Video';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Registration/Register';
import Dashboard from './Components/Dashboard/Dashboard';


class App extends React.Component {
  render() {
    return(
      <Router>
        <Navbar />
        <Video />

        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        
      </Router>
    )
  }
}

export default App;
