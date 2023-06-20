import Overlay from './Overlay';
import { useState } from 'react';

function ProjectCard({ id, fileName, alt, title, description  }) {
    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return(
        <div 
            className="project-card"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <Overlay isClicked={isClicked || isHovered} setIsClicked={setIsClicked} title={title} description={description}/>
                {/* <img id={id} src={fileName} alt={alt} onClick={() => setIsClicked(!isClicked)}/> */}
                <img id={id} src={fileName} alt={alt}/>
        </div>
    )}

export default ProjectCard;
