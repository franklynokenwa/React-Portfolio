import React from 'react'
import ProjectsDescription from './ProjectsDescription'
import ProjectsImage from './ProjectsImage'

const CountryDataApp = (props) => {
    const {projectHead, projectDetails, projectLink, projectImage} = props
    return (
        <div>
            <ProjectsDescription 
                projectDetails={projectDetails} 
                projectHead={projectHead}
                projectLink={projectLink}
            />
            <ProjectsImage projectImage={projectImage}/>
        </div>
    )
}

export default CountryDataApp
