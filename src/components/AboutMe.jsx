import profilePicture2 from '../assets/new-portfolio-pic.jpg'

function AboutMe() {return(
    <div id='aboutSection' className='sectionContainer'>
        <h1 className='headingFont'>About Liza</h1>
        <div className='about'>
            <img id='aboutPicture' src={profilePicture2} alt="Image of Liza Parr" />
            <p>
                I am a dedicated web developer with a <b>diverse background</b>. I recently graduated from the <b>Columbia Engineering Fullstack Coding Boot Camp</b>, offered by Columbia University, in April 2023. Prior to pursuing my career in web development, I obtained a B.S. in <b>Mechanical Engineering</b> from the University of Maryland.
            </p>
            <p>
                Before transitioning to web development, I had the unique experience of <b>teaching high school math</b>. This opportunity honed my communication and problem-solving skills, while also igniting my passion for technology and its transformative potential.
            </p>
            <p>
                With a strong work ethic and a commitment to continuous growth, I strive to create <b>intuitive and visually captivating websites</b>. Equipped with a solid engineering foundation, I bring a unique perspective to web development. I excel at collaborating within teams, applying logical thinking, and solving complex problems.
            </p>
            <p>
                I'm thrilled to embark on the next phase of my career and share my portfolio with you. It showcases my technical skills, creativity, and dedication to delivering exceptional results. I'm eager to <b>connect with you</b> and <b>explore potential collaborations or opportunities</b>.
            </p>
        </div>
    </div>
)}

export default AboutMe;
