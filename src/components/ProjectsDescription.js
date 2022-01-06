import React from 'react'

const ProjectsDescription = (props) => {
    const {projectHead, projectDetails, projectLink} = props
    return (
        <div>
            <h3>{projectHead}</h3>
            <p>{projectDetails} </p>
            <p>{projectLink}</p>
        </div>
    )
}

export default ProjectsDescription
