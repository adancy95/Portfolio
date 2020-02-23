import React from 'react';

const ProjectCard = (props) => {
    return(
        <div className="card">
            <img src={props.projectImage} alt={props.title} className="card-image" />
            <div className="card-overlay">
                <div className="card-text">
                    <h2 className="project-title"><a href="{props.url}">{props.title}</a></h2>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectCard