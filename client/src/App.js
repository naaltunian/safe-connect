import React from 'react';
import  Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Components/Login/Login';

class App extends React.Component {
  render() {
    return(
      <Router>
        <Navbar />
        
      </Router>
    )
  }
}

export default App;
