import { styled } from "styled-components";

const Container = styled.div`
    // background-color: pink;
    width: 100%;
    // height: 500px;
    height: 100vh;
`

const Name = styled.h1`
    position: absolute;
    font-size: 160px;
    margin-top: 80px;
    left: 200px;
    font-family: var(--fontFancy);
`

// const Design = styled.h3`
//     position: absolute;
//     font-size: 160px;
//     top: 100px;
// `

const Dev = styled.h3`
    position: absolute;
    font-size: 160px;
    margin-top: 300px;
    left: 280px;
    font-family: var(--fontFancy);
`

function Landing() {return(
    <Container>
        <Name>LIZA PARR</Name>
        <Dev>WEB DEVELOPER</Dev>
    </Container>
)};

export default Landing;
