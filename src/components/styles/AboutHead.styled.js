import styled from 'styled-components'

const AboutHead = styled.div `
    width: 25rem;
    margin: auto 0;

    h3{
        font-size: 9rem;
        font-family: 'Moon Dance', cursive;
        color: green;
    }
    p{
        position: relative;
        top: -10rem;
    }
    @media only screen and (max-width:411px){
        h3{
            width: 20rem;
            font-size: 6rem;
        }
        p{
        position: relative;
        top: -5rem;
    }
    }

`

export default AboutHead