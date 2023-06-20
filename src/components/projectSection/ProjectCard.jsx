import Overlay from './Overlay';
import { useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
// import WindowWidth from './WindowWidth';

function ProjectCard({ id, fileName, alt, title, description  }) {
    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const { width } = useWindowDimensions();
    const isMobileDevice = width <= 768;
    
    const handleClick = (event) => {
        if (isMobileDevice){
 
            if (isClicked && event.target.classList.contains("closeOverlay")) {
                    setIsClicked(false);
            } else {
                setIsClicked(true);
            }
        }
    };
    
    const handleMouseEnter = () => {
        if (!isMobileDevice) {
            setIsHovered(true);
        }
    };
    
    const handleMouseLeave = () => {
        if (!isMobileDevice) {
            setIsHovered(false);
        }
    };
        
    // let screenSize = window.innerWidth < 769 ? handleClick() : handleMouseEnter();

    return(
        <div 
            className="project-card"
            onClick={(event) => handleClick(event)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
                <Overlay isClicked={isClicked} isHovered={isHovered} setIsClicked={setIsClicked} isMobileDevice={isMobileDevice} title={title} description={description}/>
                {/* <img id={id} src={fileName} alt={alt} onClick={() => setIsClicked(!isClicked)}/> */}
                <img id={id} src={fileName} alt={alt}/>
        </div>
    )}

export default ProjectCard;
