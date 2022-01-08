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

`
export default StyledProjectImage