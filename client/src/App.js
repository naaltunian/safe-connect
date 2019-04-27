import React from 'react';
import  Navbar from './Components/Navbar/Navbar';
import  Video from './Components/Video/Video';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return(
      <Router>
        <Navbar />
        <Video />

        
      </Router>
    )
  }
}

export default App;
