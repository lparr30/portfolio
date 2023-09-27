import gmail from '../assets/gmail.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

function Contact() {return(
    // <div id='contactSection' className='sectionContainer'>
    <div className='sectionContainer'>
        <h2>Contact Me Via Pidgeon, Or</h2>
        <div id='iconStyles'>
            <div className='iconRow'>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lizajparr@gmail.com" target='_blank'><img className='icon iconBackground' src={gmail} alt="gmail icon" /></a>
                <p className='contactStyle'>lizajparr@gmail.com</p>
            </div>
            <div className='iconRowAlt'>
                <a href="https://www.linkedin.com/in/lizajparr/" target='_blank'><img className='iconAlt iconBackground' src={linkedin} alt="linkedin icon" /></a>
                <p className='contactStyleAlt'>@lizajparr</p>
            </div>
            <div className='iconRow'>
                <a href="https://github.com/lparr30" target='_blank'><img className='icon iconBackground' src={github} alt="github icon" /></a>
                <p className='contactStyle'>@lparr30</p>
            </div>
        </div>
    </div>
)}

export default Contact;
