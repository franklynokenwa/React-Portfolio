import styled from 'styled-components'

const StyledMission = styled.section`
    background-color: black;
    color: white;
    height: 40rem;
    display: flex;
    align-items: center;
    padding-right: 4rem;
    padding-left: 4rem;


    p{
        font-family: 'Moon Dance', cursive;
        font-size: 4rem;
        width: 55rem;
        margin: 0 auto;
        color: orange;
    }
    @media only screen and (max-width:411px){
        padding-right: 1.5rem;
        padding-left: 1.5rem;
        p{
            width: 30rem;
            text-align: center;
        }
    }

`
export default StyledMission