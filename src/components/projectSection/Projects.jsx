import ProjectCard from './ProjectCard';
import cardInfo from './CardInfo';

function Projects(){

    return(
        // <div id='projectsSection' className='sectionContainer'>
        <div className='sectionContainer'>
            <h2>The Stuff I've Been Working On</h2>
            <div className='projects'>
                {cardInfo.map((card) => {
                    return (
                        <ProjectCard id={card.picName} fileName={card.image} alt={card.alt} title={card.title} description={card.description} repoLink={card.repoLink} deployLink={card.deployLink}/>        
                    )
                })}
            </div>
        </div>
)}

export default Projects;
