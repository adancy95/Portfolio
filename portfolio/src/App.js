import React from 'react';
import Landing from './Components/Landing'
import NavBar from './Components/NavBar'
import AboutMe from './Components/AboutMe'
import MyWork from './Components/MyWork'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Landing}/>
        </Switch>
        <AboutMe/>
        <MyWork/>
      </div>
    </Router>
     
    </div>
  );
}

export default App;
