import night from '../assets/night-sky.jpeg';
import sky from '../assets/sky.jpeg';
import beach from '../assets/beach.jpeg';

function Projects(){return(
    <div className='margin'>
        <h2>Projects</h2>
        <div className='projects'>
            <div>
                <a href="http://www.google.com" target="_blank"><img className='sky' src={sky} alt="sky" /></a>
            </div>
            <div>
                <a href="http://www.google.com" target="_blank"><img className='night' src={night} alt="night" /></a>
            </div>
            <div>
                <a href="http://www.google.com" target="_blank"><img className='beach' src={beach} alt="beach" /></a>
            </div>
        </div>
    </div>
)}

export default Projects;
