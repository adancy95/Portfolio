import React from 'react'
import ProjectCard from './ProjectCard'

const MyWork = () => {
    return(
        <section id="myWork">
            <h1 className="section-header">My Work</h1>
            <div className="my-works">
                <div className="works">
                    <ProjectCard title="Connect4"  projectImage="/connect-4.png" url="https://adancy95.github.io/Connect4"/>            
                </div>
                <div className="works">
                    <ProjectCard title="daWeekly"  projectImage="/daweekly.png" url="https://da-weekly.herokuapp.com/" />
                </div>
                <div className="works">
                    <ProjectCard title="MinaCre8s"  projectImage="/mina.png" url="http://minacre8s.herokuapp.com/" />
                </div>
                <div className="works">
                    <ProjectCard title="Calculator"  projectImage="/calculator.png" url="https://adancy95.github.io/calculator/" />
                </div>
            </div>
        </section>
    )
}

export default MyWork