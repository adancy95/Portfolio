import React from 'react';
import Landing from './Components/Landing';
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import MyWork from './Components/MyWork';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <NavBar/>
        <Landing />
        <AboutMe/>
        <MyWork/>
        <Contact />
        <Footer/>
      </div>
    </Router>
     
    </div>
  );
}

export default App;
