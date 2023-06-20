import ProjectCard from './ProjectCard';
import cardInfo from './CardInfo';

function Projects(){

    return(
        <div className='margin'>
            <h2 id='projectsSection'>Projects</h2>
            <div className='projects'>
                {cardInfo.map((card) => {
                    return (
                        <ProjectCard id={card.picName} fileName={card.image} alt={card.alt} title={card.title} description={card.description}/>        
                    )
                })}
            </div>
        </div>
)}

export default Projects;
