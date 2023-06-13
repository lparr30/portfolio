import profilePicture2 from '../assets/new-portfolio-pic.jpg'

function AboutMe() {return(
    <div className='margin'>
        <h2 id='aboutSection'>About Liza</h2>
        <div className='about'>
            <img id='aboutPicture' src={profilePicture2} alt="Image of Liza Parr" />
            <p>
                I am a passionate web developer with a diverse background. I recently graduated from the Columbia Engineering Fullstack Coding Boot Camp, offered by Columbia University, in April 2023. Prior to pursuing my career in web development, I obtained a B.S. in Mechanical Engineering from the University of Maryland.
            </p>
            <p>
                Before delving into the world of coding, I had the incredible opportunity to teach high school math. This unique and challenging experience not only sharpened my problem-solving skills but also instilled in me the value of effective communication and the ability to connect with people from all walks of life. It was through teaching that I realized my passion for technology and its potential to create innovative solutions.
            </p>
            <p>
                I possess a strong work ethic and a resilient mindset, which I have cultivated throughout my academic and professional journey. These traits, combined with my commitment and dedication, have propelled me to push boundaries and seek continuous growth in my skills as a web developer.
            </p>
            <p>
                With a solid foundation in both engineering and education, I bring a unique perspective to the world of web development. I am adept at solving complex problems, applying logical thinking, and collaborating effectively within a team. My goal is to create intuitive, user-friendly, and visually appealing websites that not only meet the clients needs but also enhance the overall user experience.
            </p>
            <p>
                I am truly excited to embark on the next phase of my career as a web developer. It is an ever-evolving field that presents new challenges and opportunities for growth, which I am eager to explore. Through this portfolio website, you will find examples of my work, showcasing my technical skills and creative abilities.
            </p>
        </div>
    </div>
)}

export default AboutMe;
