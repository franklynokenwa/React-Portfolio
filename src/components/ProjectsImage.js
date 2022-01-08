import React from 'react'
import StyledProjectImage from './styles/ProjectImage.styled'

const ProjectsImage = (props) => {
    const {projectImage} = props
    return (
        <StyledProjectImage data-aos="zoom-out-down">
            <img src={projectImage} alt="A screenshot of the project" />
        </StyledProjectImage>
    )
}

export default ProjectsImage
