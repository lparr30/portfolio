import night from '../assets/night-sky.jpeg';
import sky from '../assets/sky.jpeg';
import beach from '../assets/beach.jpeg';
import Overlay from './Overlay';
import { useState } from 'react';

function Projects(){
    
    const [isClicked, setIsClicked] = useState(false);

    function toggleOverlay() {
        setIsClicked(!isClicked);
        console.log("i got clicked")
    }
    
    return(
        <div className='margin'>
            <h2 id='projectsSection'>Projects</h2>
            <div className='projects'>
                <div>
                    <img className='sky' src={sky} alt="sky" onClick={toggleOverlay}/>
                    <Overlay description='Test description'/>
                    {/* <a href="http://www.google.com" target="_blank"></a> */}
                </div>
                <div>
                    <img className='night' src={night} alt="night" onClick={toggleOverlay}/>
                    {/* <a href="http://www.google.com" target="_blank"></a> */}
                </div>
                <div>
                    <img className='beach' src={beach} alt="beach" onClick={toggleOverlay}/>
                    {/* <a href="http://www.google.com" target="_blank"></a> */}
                </div>
            </div>
        </div>
)}

export default Projects;
