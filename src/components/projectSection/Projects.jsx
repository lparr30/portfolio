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
    height: 600px;
    margin-top: 175px;
    margin-bottom: 175px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h2`
    font-size: 32px;
    font-style: italic;
    margin: 0;
    margin-bottom: 16px;
`

const ProjectsContainer = styled.div`
    // background-color: purple;
    width: fit-content;
    height: 100%;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    height: 60%;
    width: auto;
    border-radius: 2px;
`

const Description = styled.p`
    font-size: 20px;
`
const Link = styled.button`
    width: 100px;
    height: auto;
    border: none;
    padding: 8px 0;
    cursor: pointer;
    text-align: center;
    border-radius: 2px;
    background-color: var(--cream);
    color: var(--orange);
    font-family: var(--fontNormal);
    font-size: 19px;
    font-style: italic;
    font-weight: bolder;
`

const Button = styled.button`
    width: fit-content;
    height: auto;
    border: none;
    padding: 24px;
    font-family: var(--fontNormal);
    font-size: 22px;
    font-style: italic;
    text-decoration: underline;
    cursor: pointer;
    text-align: center;
    background-color: rgba(0,0,0,0);

    &:hover {
        font-weight: bold;
    }
`

function Projects(){

    return(
        <Container id='projects'>
            <Button>Previous</Button>
            <ProjectsContainer>
                {/* {cardInfo.map((item, index) => {
                    return (
                        <ProjectsContainer key={index}>
                            <Title>{item.title}</Title>
                            <Image src={item.image} alt={item.alt}></Image>
                            <Description>{item.description}</Description>
                            <Link>Website</Link>
                        </ProjectsContainer>
                    )
                })} */}

                
                <Title>Happiest</Title>
                <Image src={cardInfo[0].image}></Image>
                <Description>insert a description here</Description>
                <Link>Website</Link> 
               
            </ProjectsContainer>
            <Button>Next</Button>
        </Container>
)}

export default Projects;
