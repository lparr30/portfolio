import design from '../assets/random-design.png'

function Homepage() {return(
    <>
    <div id='introBackground'></div>
    <div className='intro margin'>
        <p id='first'>Hi, I'm</p>
        <b><p id='second'>LIZA PARR</p></b>
        <b><p id='third'>a Frontend Web Developer.</p></b>
        <p id='fourth'>I'm also a problem solver with a passion for design.</p>
        {/* <img className='design' src={design} alt="Abstract design" /> */}
    </div>
    </>
)}

export default Homepage;
