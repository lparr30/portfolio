import ProjectCard from './ProjectCard';
import cardInfo from './CardInfo';
import { styled } from 'styled-components';

const Container = styled.div`
    // background-color: pink;
    border: 1px solid;
    border-radius: 2px;
    padding-top: 48px;
    padding-bottom: 48px;
    width: 100%;
    height: 500px;
    margin-top: 200px;
    margin-bottom: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const TitleBox = styled.div`
    // background-color: green;
    width: 400px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // margin-left: 88px;
`

const ProjectTitle = styled.h2`
    font-size: 32px;
    background-color: rgba(0,0,0,0);
    font-style: italic;
    transform: translateX(${(props) => props.$shiftRight}px);
`

const ProjectsBox = styled.div`
    // background-color: purple;
    width: 700px;
    height: 95%;   
    display: flex;
    flex-direction: column;
    align-items: center;
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

//need alt on images, descriptions

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

    return(
        <Container>
            <TitleBox>
                {titles.map((item, index) => {
                    let shift = index * 32;

                    return (
                            <ProjectTitle key={index} $shiftRight={shift}>{item.name}</ProjectTitle>
                    )
                })}
            </TitleBox>
            <ProjectsBox>
                <Project src={cardInfo[0].image}></Project>
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
