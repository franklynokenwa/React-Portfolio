import React from 'react'
import StyledProjectImage from './styles/ProjectImage.styled'

const ProjectsImage = (props) => {
    const {projectImage, projectLink} = props
    return (
        <StyledProjectImage data-aos="zoom-out-down">
            <a href={projectLink} >
                <img src={projectImage} alt="A screenshot of the project" />
            </a>
        </StyledProjectImage>
    )
}

export default ProjectsImage
