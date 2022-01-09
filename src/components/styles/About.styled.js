import styled from 'styled-components'

const StyledAbout = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding-left: 4rem;
    padding-right: 4rem;

    @media only screen and (max-width:540px){
        flex-direction: column;

        section p{
            width: 25rem;
        }
    }

    @media only screen and (max-width:411px){
        padding-right: 1.5rem;
        padding-left: 1.5rem;

        section p{
            width: 20rem;
        }
    }

`
export default StyledAbout