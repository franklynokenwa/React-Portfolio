import styled from 'styled-components'

const StyledHeader = styled.div `
    background-color: green;
    height: 30rem;
    padding-left: 4rem;
    margin-top: -4rem;

    h1{
        font-size: 5rem;
        width:35rem;
        padding-top: 3rem;
    }
    p{
        font-size: 3.5rem;
        font-family: 'Moon Dance', cursive;

    }
    @media only screen and (max-width:411px){
        padding-right: 1.5rem;
        padding-left: 1.5rem;

        h1{
            width: 20rem;
            font-size: 3rem;
        }
        p{
            font-size: 2.5rem;
        }
    }

`

export default StyledHeader