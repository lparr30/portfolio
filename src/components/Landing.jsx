import { styled } from "styled-components";

const Container = styled.div`
    // background-color: pink;
    width: 100%;
    height: 95vh;
    display: grid;
`

const TitleBox = styled.div`
    // background-color: yellow;
    position: absolute;
    align-self: center;
    justify-self: center;
    // transform: translateY(-72px);
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const Name = styled.h1`
    font-size: 160px;
    margin: 0;
    font-family: var(--fontFancy);
`

const Summary = styled.p`
    position: absolute;
    margin: 0;
    top: 9%;
    right: 0;
    text-align: right;
    font-size: 18px;
    font-style: italic;
    line-height: 1.5;
`

const Dev = styled.h3`
    font-size: 160px;
    margin: 0;
    font-family: var(--fontFancy);
`

function Landing() {return(
    <Container>
        <TitleBox>
            <Name>LIZA PARR</Name>
            <Summary>I enjoy building clean, engaging websites<br />Focus in frontend development & UX/UI design<br/>Creative mind, dynamic skills, diligent nature</Summary>
            <Dev>WEB DEVELOPER</Dev>
        </TitleBox>
    </Container>
)};

export default Landing;
