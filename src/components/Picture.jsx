import profilePicture from '../assets/portfolio-picture.jpg'

function Picture() {return(
    <div className='margin'>
        <h3>About Liza</h3>
        <img className='picture' src={profilePicture} alt="Image of Liza Parr" />
    </div>
)}

export default Picture;
