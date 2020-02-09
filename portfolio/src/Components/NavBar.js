import React from 'react';
import {BrowserRouter as Router,NavLink} from "react-router-dom";
  

const NavBar = () => {
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About Me</NavLink>
                    </li>
                    <li> 
                        <NavLink to="/mywork">My Work</NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume">Resume</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactme">Contact Me</NavLink>
                    </li>
                </ul>
            </div>
        </Router>
        
    )
}

export default NavBar