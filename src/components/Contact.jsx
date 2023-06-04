import gmail from '../assets/gmail.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

function Contact() {return(
    <div className='contact margin'>
        <h3>Contact Me</h3>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lizajparr@gmail.com" target='_blank'><img id='icon' src={gmail} alt="gmail icon" /></a>
        <p>lizajparr@gmail.com</p>
        <a href="https://www.linkedin.com/in/lizajparr/" target='_blank'><img id='icon' src={linkedin} alt="linkedin icon" /></a>
        <p>@lizajparr</p>
        <a href="https://github.com/lparr30" target='_blank'><img id='icon' src={github} alt="github icon" /></a>
        <p>@lparr30</p>
    </div>
)}

export default Contact;
