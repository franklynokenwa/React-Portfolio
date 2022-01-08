import React from 'react'
import ProjectsDescription from './ProjectsDescription'
import ProjectsImage from './ProjectsImage'
import ProjectDetails from './styles/Shortly.styled'

const Shortly = (props) => {
    const {projectHead, projectDetails, projectLink, projectImage} = props
    return (
        <ProjectDetails>
            <ProjectsDescription
                projectDetails={projectDetails} 
                projectHead={projectHead}
                projectLink={projectLink}
            />
            <ProjectsImage projectImage={projectImage}/>
        </ProjectDetails>
    )
}

export default Shortly
