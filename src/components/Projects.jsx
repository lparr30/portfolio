import night from '../assets/night-sky.jpeg';
import sky from '../assets/sky.jpeg';
import beach from '../assets/beach.jpeg';
import { useState } from 'react';

function Overlay(props) {return(
    <>
    {props.isOpen && (
        <div className='overlay'>{props.children}</div>
    )}
    </>
)}

function Projects(){return(
    <div className='margin'>
        <h2 id='projectsSection'>Projects</h2>
        <div className='projects'>
            <div onMouseOver={hover}>
                <a href="http://www.google.com" target="_blank"><img className='sky' src={sky} alt="sky" /></a>
            </div>
            <div onMouseOver={hover}>
                <a href="http://www.google.com" target="_blank"><img className='night' src={night} alt="night" /></a>
            </div>
            <div onMouseOver={hover}>
                <a href="http://www.google.com" target="_blank"><img className='beach' src={beach} alt="beach" /></a>
            </div>
        </div>
    </div>
)}

export default Projects;
