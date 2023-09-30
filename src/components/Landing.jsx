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
    transform: translateY(-72px);
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
    top: 10%;
    right: 0;
    text-align: right;
    font-size: 18px;
    font-style: italic;
    line-height: 1.3;
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
            <Summary>Just some random stuff that I'm writing about myself <br /> talk about being creative and mention UI UX <br/> I enjoy building polished and intuitive websites</Summary>
            <Dev>WEB DEVELOPER</Dev>
        </TitleBox>
    </Container>
)};

export default Landing;
