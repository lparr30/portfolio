import { styled } from "styled-components";
import Header from "./Header";

const Container = styled.div`
    // background-color: pink;
    margin-top: 3vh;
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
    margin: 100px 0 0 0;
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
    // position: absolute;
    // margin: 0;
    // top: 9%;
    // right: 0;
    text-align: right;
    // font-size: 28px;
    font-style: italic;
    line-height: 1.8;
    // gap: 20px;

    @media (max-width: 320px) {
        font-size: 8px;
        top: 110%;
    }

    @media (min-width: 321px) and (max-width: 767px) {
        font-size: 1.5vw;
        // font-size: 1.8vw;
        top: 110%;
        
    }

    @media (min-width: 768px) {
        font-size: 1.4vw;
        
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
        <Header />
            <Name>LIZA PARR</Name>
            <Dev>WEB DESIGNER</Dev>
            <Summary>Building bold, authentic websites<br/>to showcase women-run businesses<br/>that cultivate the vitality of other women.</Summary>
        </TitleBox>
    </Container>
)};

export default Landing;
