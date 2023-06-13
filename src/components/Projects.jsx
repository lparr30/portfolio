import night from '../assets/night-sky.jpeg';
import sky from '../assets/sky.jpeg';
import beach from '../assets/beach.jpeg';
import { useState } from 'react';

function repo() {
    console.log('repo');
}

function deployed() {
    console.log('deployed');
}

function closeOverlay() {
    console.log('x');
}

function Overlay(props) {return(
    <>
    {props.isClicked && (
        <div className='overlay'>
            <p>{props.description}</p>
            <button onClick={repo}>Repository</button>
            <button onClick={deployed}>Deployed App</button>
            <button onClick={closeOverlay}>X</button>
        </div>
    )}
    </>
)}

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
