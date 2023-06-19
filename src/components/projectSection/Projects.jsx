import night from '../../assets/night-sky.jpeg';
import sky from '../../assets/sky.jpeg';
import beach from '../../assets/beach.jpeg';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import cardInfo from './CardInfo';

function Projects(){
    // const [isClicked, setIsClicked] = useState(false);
    // const [description, setDescription] = useState('');

    // function toggleOverlay() {
    //     setIsClicked(!isClicked);
    //     console.log("wrong" + isClicked) // console.log appears with the incorrect isClicked value bec. setIsClicked is async. and JS runs async stuff out of order so the console.log runs before setIsClicked is done running
    //     console.log("i got clicked");
    // }

    // useEffect(() => {
    //     console.log("right" + isClicked)
    // }, [isClicked]); //waiting for isClicked to change value before useEffect is activated (in this case, running the console.log)
    

    return(
        <div className='margin'>
            <h2 id='projectsSection'>Projects</h2>
            <div className='projects'>
                {cardInfo.map((card) => {
                    return (
                        <ProjectCard id={card.picName} fileName={card.image} alt={card.alt} title={card.title} description={card.description}/>        
                    )
                })}
                {/* <ProjectCard id={'sky'} picName={sky} alt={'Cloudy sky'} description/>
                <ProjectCard id={'night'} picName={night} alt={'Night sky'}/>
                <ProjectCard id={'beach'} picName={beach} alt={'Beach'}/> */}
            </div>
        </div>
)}

export default Projects;
