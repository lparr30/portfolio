import { styled } from "styled-components";

const Container = styled.div`
    // background-color: pink;
    width: 100%;
    height: 95vh;
    display: grid;

    @media (max-width: 320px) {
        height: 50vh;
    }

    @media (min-width: 321px) and (max-width: 767px) {
        height: 60vh;
        
    }

    @media (min-width: 768px) {
        
    }
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

    @media (max-width: 320px) {
        font-size: 30px;
    }

    @media (min-width: 321px) and (max-width: 767px) {
        font-size: 10vw;
        
    }

    @media (min-width: 768px) {
        font-size: 12vw;
    }

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

    @media (max-width: 320px) {
        font-size: 8px;
        top: 110%;
    }

    @media (min-width: 321px) and (max-width: 767px) {
        font-size: 1.5vw;
        top: 110%;
        
    }

    @media (min-width: 768px) {
        font-size: 1.2vw;
        
    }

`

const Dev = styled.h3`
    font-size: 160px;
    margin: 0;
    font-family: var(--fontFancy);

    @media (max-width: 320px) {
        font-size: 30px;
    }

    @media (min-width: 321px) and (max-width: 767px) {
        font-size: 10vw;
        
    }

    @media (min-width: 768px) {
        font-size: 12vw;
    }

`

function Landing() {return(
    <Container id="landing">
        <TitleBox>
            <Name>LIZA PARR</Name>
            <Summary>I enjoy building clean, engaging websites<br />Focus in frontend development & UX/UI design<br/>Creative mind, dynamic skills, diligent nature</Summary>
            <Dev>WEB DEVELOPER</Dev>
        </TitleBox>
    </Container>
)};

export default Landing;
