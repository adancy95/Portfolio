import React from 'react';
import {FaRegFileCode} from "react-icons/fa";
import { GiStoneCrafting } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";

const AboutMe = () => {
    return(
        <section id="aboutMe">
            <h1 className="section-header">About Me</h1>
            <div className="aboutme">
                <div className="aboutme-section">
                    <FaRegFileCode className="icon"/>
                    <h3>Developer</h3>
                    <p>I enjoy creating software solutions that solve people's pain points</p>
                </div>
                <div className="aboutme-section">
                    <GiBrain className="icon"/>
                    <h3>Problem Solver</h3>
                    <p>I’m a developer who likes to experiment through trial and error</p>
                </div>
                <div className="aboutme-section">
                    <GiStoneCrafting className="icon"/>
                    <h3>Diyer</h3>
                    <p>I’m a die hard diyer, and a pinterest fanatic who has a knack for making crafts.</p>
                </div>
            </div>
           

        </section>
    )
}

export default AboutMe