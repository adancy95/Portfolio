import React from 'react';
import {Link} from "react-router-dom";

const Landing = () => {
    return(
        <div className="jumbotron">
            <div>
                <img className="jumbotron-img" src="/antheadshot.svg" alt="Antquanique's headshot"/>
            </div>
            <div className="jumbotron-text jumbotron-text-margin">
                <h1 className="jumbotron-text-margin">Ant-quanique Dancy</h1>
                <h4 className="jumbotron-text-margin">[Ant-qua-nique Dan-cy] (noun)</h4>
                <hr className="jumbotron-text-margin"/>
                <ol>
                    <li className="jumbotron-text-margin">AKA Ant (if you can't pronounce my first name)</li>
                    <li className="jumbotron-text-margin">The Ex QA Engineer turned developer who is passonate about breaking down complex problems, and solving those problems with code.</li>
                </ol>
                <Link className="jumbotron-btn" to="/contactme">Contact Me</Link>
            </div>
           
        </div>
    )
}

export default Landing