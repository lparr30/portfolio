import ProjectCard from './ProjectCard';
import cardInfo from './CardInfo';
import { styled } from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
    // background-color: pink;
    border: 1px solid;
    border-radius: 2px;
    padding-top: 24px;
    padding-bottom: 24px;
    width: 100%;
    height: 55vw;
    margin-top: 175px;
    margin-bottom: 175px;
    // display: block;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 320px) {
        height: 375px;
        margin-top: 0;
        margin-bottom: 25px;
    }

    @media (min-width: 321px) and (max-width: 767px) {
        height: 425px;
        margin-top: 75px;
        margin-bottom: 75px;
        
    }

    @media (min-width: 768px) {
        
    }

`

const ProjectsContainer = styled.div`
    // background-color: purple;
    position: absolute;
    // width: fit-content;
    width: 55vw;
    height: fit-content;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    visibility: ${(props) => props.$projectVisibility};
    gap: 20px;

    @media (max-width: 320px) {
      
    }

    @media (min-width: 321px) and (max-width: 767px) {
        width: 40vw;
        
    }

    @media (min-width: 768px) {
        
    }

`

const Title = styled.h2`
    // font-family: var(--fontFancy);
    font-size: 44px;
    font-style: italic;
    margin: 0;
    margin-bottom: 16px;

    @media (max-width: 320px) {
        font-size: 16px;
    }

    @media (min-width: 321px) and (max-width: 767px) {
        font-size: 24px;
        
    }

    @media (min-width: 768px) {
        
    }

`

const Image = styled.img`
    // height: 400px;
    // width: auto;
    width: 55vw;
    height: auto;
    border-radius: 2px;

    @media (max-width: 320px) {
        width: 50vw;
    }

    @media (min-width: 321px) and (max-width: 767px) {
        width: 45vw;
        
    }

    @media (min-width: 768px) {
        
    }

`

const Description = styled.p`
    // font-size: 20px;
    // width: 600px;
    width: 55vw;
    text-align: center;

    @media (max-width: 320px) {
        font-size: 10px;
    }

    @media (min-width: 321px) and (max-width: 767px) {
        font-size: 12px;
        
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 12px;
    }

    @media (min-width: 1024px) {
        font-size: 16px;
    }

`
const Link = styled.button`
    // width: 100px;
    width: fit-content;
    height: auto;
    border: none;
    // padding: 2px 8px;
    padding: 6px;
    cursor: pointer;
    text-align: center;
    border-radius: 2px;
    border: 1px solid var(--cream);
    background-color: var(--orange);
    color: var(--cream);
    font-family: var(--fontNormal);
    font-size: 19px;
    font-style: italic;
    font-weight: bolder;

    @media (max-width: 320px) {
        font-size: 10px;
    }

    @media (min-width: 321px) and (max-width: 767px) {
        font-size: 12px;
        
    }

    @media (min-width: 768px) {
        
    }

`

const Button = styled.button`
    width: fit-content;
    height: auto;
    border: none;
    // margin: 0 350px;
    margin: 0 30vw;
    font-family: var(--fontNormal);
    font-size: 22px;
    font-style: italic;
    border: 1px solid var(--cream);
    padding: 6px 8px;
    border-radius: 2px;
    // text-decoration: underline;
    cursor: pointer;
    text-align: center;
    background-color: rgba(0,0,0,0);
    z-index: 2;

    &:hover {
        font-weight: bold;
    }

    @media (max-width: 320px) {
        position: relative;
        font-size: 8px;
        top: 180px;
        margin: 0 12vw;
    }

    @media (min-width: 321px) and (max-width: 767px) {
        position: relative;
        font-size: 14px;
        top: 180px;
        margin: 0 16vw;
        
    }

    @media (min-width: 768px) {
        
    }

`

function Projects(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevButton = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cardInfo.length) % cardInfo.length);
    };

    const handleNextButton = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardInfo.length);
    };

    const openWebsite = () => {
        window.open(cardInfo[currentIndex].deployLink)
    };



    return(
        <Container id='projects'>
            <Button onClick={handlePrevButton}>Previous</Button>
            {/* <Button onClick={handleNextButton}>Next</Button> */}

            {/* <CenterBox> */}
                {cardInfo.map((item, index) => {
                    return (
                        <ProjectsContainer className='projectContainer' $projectVisibility={ index === currentIndex ? 'visible' : 'hidden'} key={index}>
                            <Title>{item.title}</Title>
                            <Image src={item.image} alt={item.alt}></Image>
                            <Description>{item.description}</Description>
                            <Link onClick={openWebsite}>Website</Link>
                        </ProjectsContainer>
                    )
                })}
            {/* </CenterBox> */}
            <Button onClick={handleNextButton}>Next</Button>
        </Container>
)}

export default Projects;
