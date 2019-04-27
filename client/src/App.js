import React from 'react';
import  Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Registration from './Components/Registration/Registration';

class App extends React.Component {
  render() {
    return(
      <Router>
        <Navbar />
        <Registration/>
      </Router>
    )
  }
}

export default App;
