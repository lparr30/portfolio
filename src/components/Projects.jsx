import night from '../assets/night-sky.jpeg';
import sky from '../assets/sky.jpeg';
import beach from '../assets/beach.jpeg';

function hover() {return(
    console.log('test')
    // <div id='test'>
    //     <p>this is a test description</p>
    // </div>
)}

function Projects(){return(
    <div className='margin'>
        <h2 id='projectsSection'>Projects</h2>
        <div className='projects'>
            <div>
                <a href="http://www.google.com" target="_blank"><img onMouseOver={hover} className='sky' src={sky} alt="sky" /></a>
            </div>
            <div>
                <a href="http://www.google.com" target="_blank"><img onMouseOver={hover} className='night' src={night} alt="night" /></a>
            </div>
            <div>
                <a href="http://www.google.com" target="_blank"><img onMouseOver={hover} className='beach' src={beach} alt="beach" /></a>
            </div>
        </div>
    </div>
)}

export default Projects;
