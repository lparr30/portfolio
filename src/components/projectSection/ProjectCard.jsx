import Overlay from './Overlay';
import { useState,useEffect } from 'react';
import cardInfo from './CardInfo';

function ProjectCard({ id, fileName, alt, title, description  }) {
    const [isClicked, setIsClicked] = useState(false);
    // const [description, setDescription] =useState('');
    
    // useEffect(() => {
    //     //stuff
    // }, [isClicked]);

    return(
        <div className="project-card">
            <Overlay isClicked={isClicked} setIsClicked={setIsClicked} title={title} description={description}/>
            <img id={id} src={fileName} alt={alt} onClick={() => setIsClicked(!isClicked)}/>
        </div>
    )}

export default ProjectCard;
