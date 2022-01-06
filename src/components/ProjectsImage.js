import React from 'react'

const ProjectsImage = (props) => {
    const {projectImage} = props
    return (
        <div>
            <img src={projectImage} alt="A screenshot of the project" />
        </div>
    )
}

export default ProjectsImage
