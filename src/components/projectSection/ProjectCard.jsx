import useWindowDimensions from '../../hooks/useWindowDimensions';
import Overlay from './Overlay';
import { useState } from 'react';

function ProjectCard({ id, fileName, alt, title, description  }) {
    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    let { width } = useWindowDimensions();
    let isMobileDevice = width < 768;

    const handleClick = (event) => {
        console.log(event);
        if(isMobileDevice && !isClicked) {
            setIsClicked(true);
        } else if (isMobileDevice && isClicked && event.target.classList.contains('closeOverlay')) {
            setIsClicked(false);
        }
    };

    const handleMouseEnter = () => {
        if(!isMobileDevice) {
            setIsHovered(true);
        }
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return(
        <div 
            className="project-card"
            onClick={(event) => handleClick(event)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <Overlay isClicked={isClicked || isHovered} setIsClicked={setIsClicked} isMobileDevice={isMobileDevice} title={title} description={description}/>
                <img id={id} src={fileName} alt={alt}/>
        </div>
    )}

export default ProjectCard;
