import React from 'react';
import {FaRegFileCode} from "react-icons/fa";
import { GiStoneCrafting } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";

const AboutMe = () => {
    return(
        <section>
            <h1 className="section-header">About Me</h1>
            <div className="aboutme">
                <div className="aboutme-section">
                    <FaRegFileCode className="aboutme-icon"/>
                    <h3>Developer</h3>
                    <p>I enjoy creating software solutions that people the pain points of business</p>
                </div>
                <div className="aboutme-section">
                    <GiBrain className="aboutme-icon"/>
                    <h3>Problem Solver</h3>
                    <p>I’m a developer who likes to experiment through trial and error</p>
                </div>
                <div className="aboutme-section">
                    <GiStoneCrafting className="aboutme-icon"/>
                    <h3>Diyer</h3>
                    <p>I’m a die hard diyer, and a pinterest fanatic who has a knack for making crafts.</p>
                </div>
            </div>
           

        </section>
    )
}

export default AboutMe