import styled from 'styled-components'

const StyledProjectDescription = styled.section`
    margin:  auto 0;
    width: 25rem;

    h3{
        font-size: 2.5rem;
        font-weight: 500;
    }
    p{
        margin-bottom: 1.5rem;
        width:25rem;
    }
    a{
        text-decoration: none;
        color: black;
    }
    a:hover{
        color: orange;
    }

    @media only screen and (max-width:768px){
        margin-bottom: 4rem;
    }
    @media only screen and (max-width:411px){
        p{
            width: 20rem;
        }
        h3{
        font-size: 2rem;
        }
    }

    @media only screen and (max-width:320px){
        width: 19rem;
        text-align: center;
        
        a{
            font-size:0.9rem;
        }
        P{
            font-size:0.9rem;
            width: 17rem; 
        }
        h3{
            font-size: 1.5rem;
        }
    }
    
`
export default StyledProjectDescription