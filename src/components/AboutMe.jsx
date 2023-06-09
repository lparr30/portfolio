import profilePicture2 from '../assets/new-portfolio-pic.jpg'

function AboutMe() {return(
    <div className='margin'>
        <h2 id='aboutSection'>About Liza</h2>
        <div className='about'>
            <img id='aboutPicture' src={profilePicture2} alt="Image of Liza Parr" />
            <p>This is the new about. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
)}

export default AboutMe;
