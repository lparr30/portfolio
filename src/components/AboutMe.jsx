import profilePicture2 from '../assets/new-portfolio-pic.jpg'

function AboutMe() {return(
    <div className='margin'>
        <h2 id='aboutSection'>About Liza</h2>
        <div className='about'>
            <img id='aboutPicture' src={profilePicture2} alt="Image of Liza Parr" />
            <p>
                I am a dedicated web developer with a diverse background. I recently graduated from the Columbia Engineering Fullstack Coding Boot Camp, offered by Columbia University, in April 2023. Prior to pursuing my career in web development, I obtained a B.S. in Mechanical Engineering from the University of Maryland.
            </p>
            <p>
                Before transitioning to web development, I had the unique experience of teaching high school math. This opportunity honed my communication and problem-solving skills, while also igniting my passion for technology and its transformative potential.
            </p>
            <p>
                With a strong work ethic and a commitment to continuous growth, I strive to create intuitive and visually captivating websites. Equipped with a solid engineering foundation, I bring a unique perspective to web development. I excel at collaborating within teams, applying logical thinking, and solving complex problems.
            </p>
            <p>
                I'm thrilled to embark on the next phase of my career and share my portfolio with you. It showcases my technical skills, creativity, and dedication to delivering exceptional results. I'm eager to connect with you and explore potential collaborations or opportunities.
            </p>
        </div>
    </div>
)}

export default AboutMe;
