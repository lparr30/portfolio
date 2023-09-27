import profilePicture from '../assets/portfolio-picture.jpg'

function Homepage() {return(
        <>
            <img id='picture' src={profilePicture} alt="Liza Parr" />
            <div className='intro margin'>
                <p className='font' id='first'>Hi, I'm</p>
                {/* <b><p id='second'>LIZA PARR</p></b> */}
                <h1>LIZA PARR</h1>
                <b><p className='font' id='third'>a frontend web developer</p></b>
                <p className='font' id='fourth'>with a passion for interaction design.</p>
            </div>
        </>
)}

export default Homepage;
