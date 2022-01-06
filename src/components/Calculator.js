import React from 'react'
import ProjectsDescription from './ProjectsDescription'
import ProjectsImage from './ProjectsImage'
import StyledAbout from './styles/About.styled'

const Calculator = (props) => {
    const {projectHead, projectDetails, projectLink, projectImage} = props
    return (
        <StyledAbout>
            <ProjectsDescription
                projectDetails={projectDetails} 
                projectHead={projectHead}
                projectLink={projectLink}
            />
            <ProjectsImage projectImage={projectImage}/>
        </StyledAbout>
    )
}

export default Calculator
