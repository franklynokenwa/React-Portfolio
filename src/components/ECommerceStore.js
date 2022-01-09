import React from 'react'
import ProjectsDescription from './ProjectsDescription'
import ProjectsImage from './ProjectsImage'
import ProjectDetails from './styles/ECommerceStore.styled'


const ECommerceStore = (props) => {
    const {projectHead, projectDetails, projectLink, projectImage} = props

    return (
        <ProjectDetails>
            <ProjectsImage projectImage={projectImage}/>
            <ProjectsDescription
                projectDetails={projectDetails} 
                projectHead={projectHead}
                projectLink={projectLink}
            />
        </ProjectDetails>
    )
}

export default ECommerceStore
