import React from 'react'
import ProjectsDescription from './ProjectsDescription'
import ProjectsImage from './ProjectsImage'
import ProjectDetails from './styles/CountryDataApp.styled'


const CountryDataApp = (props) => {
    const {projectHead, projectDetails, projectLink, projectImage} = props
    return (
        <ProjectDetails>
            <ProjectsImage projectImage={projectImage} projectLink={projectLink}/>
            <ProjectsDescription 
                projectDetails={projectDetails} 
                projectHead={projectHead}
                projectLink={projectLink}
            />
        </ProjectDetails>
    )
}

export default CountryDataApp
