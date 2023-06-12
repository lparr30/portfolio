import night from '../assets/night-sky.jpeg';
import sky from '../assets/sky.jpeg';
import beach from '../assets/beach.jpeg';
// import { useState } from 'react';

function hover(event) {
    const target = event.target.parentElement.parentElement.children[1]
    console.log(event.target);
    if (target.classList.contains('hide')){
        target.classList.remove('hide')
        target.classList.add('show')
    } else {
        target.classList.remove('show')
        target.classList.add('hide')
    }
}

function Projects(){return(
    <div className='margin'>
        <h2 id='projectsSection'>Projects</h2>
        <div className='projects'>
            <div onMouseOver={hover}>
                <a href="http://www.google.com" target="_blank"><img className='sky' src={sky} alt="sky" /></a>
                <div id='test' className='hide overlay'>
                    <p>this is a test description</p>
                    <button>Repo</button>
                    <button>Deployed App</button>
                </div>
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
