import ProjectCard from './ProjectCard';
import cardInfo from './CardInfo';
import { styled } from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
    // background-color: pink;
    border: 1px solid;
    border-radius: 2px;
    padding-top: 48px;
    padding-bottom: 48px;
    width: 100%;
    height: 500px;
    margin-top: 175px;
    margin-bottom: 175px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const TitleBox = styled.div`
    // background-color: green;
    width: 400px;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    // margin-left: 88px;
`

const ProjectTitle = styled.button`
    border: none;
    margin: 0;
    width: fit-content;
    font-size: 32px;
    background-color: rgba(0,0,0,0);
    font-style: italic;
    cursor: pointer;
    transform: translateX(${(props) => props.$shiftRight}px);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateX(${(props) => props.$hover}px);
        // transition-duration: 0.3s;
    }
`

const ProjectsBox = styled.div`
    // background-color: purple;
    width: 700px;
    height: 95%;   
    display: flex;
    flex-direction: column;
    align-items: center;
    visibility: ${(props) => props.$visibility};
`

const Project = styled.img`
    height: 70%;
    width: auto;
`

const Description = styled.p`
    font-size: 20px;
`

const Button = styled.button`
    width: 110px;
    height: auto;
    border: none;
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

const titles = [
    {
        name: 'Happiest Hour'
    },
    {
        name: 'TSF Applications'
    },
    {
        name: 'Tweeter'
    },
    {
        name: 'Intodoitive'
    }
];

function Projects(){
    const [titleClick, setTitleClick] = useState(false);

    const handleCardVisibility = () => {
        setTitleClick(true)
    };

    const cardVisibility = {
        visibility: titleClick ? 'visible' : 'hidden'
    };

    return(
        <Container id='projects'>
            <TitleBox>
                {cardInfo.map((item, index) => {
                    let shift = index * 32;
                    let hover = shift + 16;

                    return (
                            <ProjectTitle onClick={() => handleCardVisibility} key={index} $shiftRight={shift} $hover={hover}>{item.title}</ProjectTitle>
                    )
                })}
            </TitleBox>
            <ProjectsBox $visibility={cardVisibility.visibility}>
                {/* {cardInfo.map((item, index) => {
                    return (
                        <Project key={index} src={item.image}></Project>
                    )
                })} */}


                <Project src={cardInfo[0].image} alt={cardInfo[0].alt}></Project>
                <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dolores maiores deleniti, laborum, quaerat exercitationem reprehenderit modi eaque possimus</Description>
                <Button>Website</Button>
            </ProjectsBox>

            {/* <h2>The Stuff I've Been Working On</h2>
            <div className='projects'>
                {cardInfo.map((card) => {
                    return (
                        <ProjectCard id={card.picName} fileName={card.image} alt={card.alt} title={card.title} description={card.description} repoLink={card.repoLink} deployLink={card.deployLink}/>        
                    )
                })}
            </div> */}
        </Container>
)}

export default Projects;
