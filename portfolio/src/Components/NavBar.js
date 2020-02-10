import React from 'react';
import {BrowserRouter as Router,NavLink} from "react-router-dom";
import '../App.css'  

const NavBar = () => {
    return(
        <Router>
            <header>
                <nav className="nav-bar">
                 <NavLink className="nav-links nav-logo" to="/">Ant-quanique Dancy</NavLink>
                    <ul className="nav-ul" >
                        <li>
                            <NavLink className="nav-links" to="/about">About Me</NavLink>
                        </li>
                        <li> 
                            <NavLink className="nav-links" to="/mywork">My Work</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-links" to="/resume">Resume</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-links nav-btn" to="/contactme">Contact Me</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </Router>
        
    )
}

export default NavBar