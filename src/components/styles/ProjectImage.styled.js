import styled from 'styled-components'

const StyledProjectImage = styled.section`
        margin:  auto 0;

    img{
        width: 40rem;
        height: 25rem;
        border: 2px solid green;
        border-radius: 20px;

    }
    img:hover{
        transform: scale(1.1);
        transition: all 5s ease-in-out;;
        -webkit-transition: all 5s ease-in-out;
        -moz-transition: all 5s ease-in-out;
        border-radius: 30px;
    }

    @media only screen and (max-width:540px){
       img{
         width: 30rem;
       }
        
    }
    @media only screen and (max-width:411px){
        padding-left: 1rem;
        padding-right: 1rem;
        img{
            width:21rem;
        }
    }
    @media only screen and (max-width:320px){
        padding-right: 0.2rem;
        padding-left: 0.2rem;
        img{
            width: 18.5rem;
        }

    }

`
export default StyledProjectImage