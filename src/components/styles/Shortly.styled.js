import styled from 'styled-components'

const ProjectDetails = styled.section`
    display: flex;
    justify-content: space-between;
    padding-right: 4rem;
    padding-left: 4rem;
    margin-top: 6rem;
    margin-bottom: 3rem;
    height: 35rem;

    @media only screen and (max-width:768px){
        flex-direction: column;
        margin-bottom: 15rem;
    }
    @media only screen and (max-width:540px){
        padding-right: 1.5rem;
        padding-left: 1.5rem;
    }
`
export default ProjectDetails