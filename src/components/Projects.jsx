import night from '../assets/night-sky.jpeg';
import sky from '../assets/sky.jpeg';
import beach from '../assets/beach.jpeg';
import Overlay from './Overlay';
import { useState } from 'react';

function Projects(){
    
    const [isClicked, setIsClicked] = useState(false);
    // const [description, setDescription] = useState('');

    function toggleOverlay() {
        setIsClicked(!isClicked);
        console.log("i got clicked");
    }
    
    return(
        <div className='margin'>
            <h2 id='projectsSection'>Projects</h2>
            <div className='projects'>
                <div>
                    <Overlay isClicked={isClicked} description='sky'/>
                    <img id='sky' src={sky} alt="sky" onClick={toggleOverlay}/>
                    {/* <a href="http://www.google.com" target="_blank"></a> */}
                </div>
                <div id='bigScreens'>
                    <div>
                        <Overlay isClicked={isClicked} description='night'/>
                        <img id='night' src={night} alt="night" onClick={toggleOverlay}/>
                        {/* <a href="http://www.google.com" target="_blank"></a> */}
                    </div>
                    <div>
                        <Overlay isClicked={isClicked} description='beach'/>
                        <img id='beach' src={beach} alt="beach" onClick={toggleOverlay}/>
                        {/* <a href="http://www.google.com" target="_blank"></a> */}
                    </div>
                </div>
            </div>
        </div>
)}

export default Projects;
