import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import '../App.css'  

const NavBar = () => {
    return(
        <Router>
            <header>
                <nav className="nav-bar">
                 <NavLink className="nav-links nav-logo" to="/">Ant-quanique Dancy</NavLink>
                    <ul className="nav-ul" >
                        <li>
                            <NavLink className="nav-links" to="/#aboutMe">About Me</NavLink>
                        </li>
                        <li> 
                            <NavLink className="nav-links" to="/#myWork">My Work</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-links nav-btn" to="/#contact">Contact Me</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </Router>
        
    )
}

export default NavBar