import React from 'react'
import { FaGithub, FaLinkedinIn} from "react-icons/fa"
import { MdEmail } from "react-icons/md";
const Contact = () => {
    return(
       <section id="contact">
           <h1 className="section-header">Contact Me</h1>
           <ul className="contact">
               <li><a rel="noopener noreferrer" href="https://www.linkedin.com/in/adancy95/" target="_blank"><FaLinkedinIn className="icon"/></a></li>
               <li><a rel="noopener noreferrer" href="https://github.com/adancy95" target="_blank"><FaGithub className="icon"/></a></li>
               <li><a rel="noopener noreferrer" href="mailto:antdancy95@gmail.com" target="_blank"><MdEmail className="icon"/></a></li>
           </ul>
       </section>
    )
}

export default Contact