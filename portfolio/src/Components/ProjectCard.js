import React from 'react'

const ProjectCard = (props) => {
    return(
        <div>
            <div>
                <img src={props.projectImage} alt={props.title} className="project-image" />
            </div>
            <div>
                <h1 className="project-title">{props.title}</h1>
                <p className="project-technology"> {props.technology}</p>
            </div>
            
        </div>
    )
}

export default ProjectCard