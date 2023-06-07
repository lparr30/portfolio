import profilePicture from '../assets/portfolio-picture.jpg'

function Homepage() {return(
    <>
    <img id='picture' src={profilePicture} alt="Image of Liza Parr" />
    <div className='intro margin'>
        <p id='first'>Hi, I'm</p>
        <b><p id='second'>LIZA PARR</p></b>
        <b><p id='third'>a Frontend Web Developer.</p></b>
        <p id='fourth'>I'm also a problem solver with a passion for design.</p>
    </div>
    </>
)}

export default Homepage;
