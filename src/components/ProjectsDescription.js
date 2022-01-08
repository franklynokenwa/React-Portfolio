import React from 'react'
import StyledProjectDescription from './styles/ProjectsDescription.styled'

const ProjectsDescription = (props) => {
    const {projectHead, projectDetails, projectLink} = props
    return (
        <StyledProjectDescription data-aos="zoom-out-up">
            <h3>{projectHead}</h3>
            <p>{projectDetails} </p>
            <a href={projectLink} >{projectLink} </a>
        </StyledProjectDescription>
    )
}

export default ProjectsDescription
