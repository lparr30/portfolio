import gmail from '../assets/gmail.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

function Contact() {return(
    <div>
        <h3>Contact Me</h3>
        {/* <i className='github' class="bi bi-github"></i> */}
        <img id='icon' src={gmail} alt="gmail icon" />
        <p>lizajparr@gmail.com</p>
        <img id='icon' src={linkedin} alt="linkedin icon" />
        <a href="linkedin.com/lizajeanparr">linkedin.com/lizajeanparr</a>
        <img id='icon' src={github} alt="github icon" />
        <a href="github.com/lparr30">github.com/lparr30</a>
    </div>
)}

export default Contact;
