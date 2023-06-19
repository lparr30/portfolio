// function repo() {
//     console.log('repo');
// }

// function deployed() {
//     console.log('deployed');
// }

// function closeOverlay() {
//     console.log('x');
//     // setIsClicked(!isClicked);
// }

function Overlay({ isClicked, setIsClicked, title, description }) {
    
    console.log('overlay is working');

    return(
        <>
        {isClicked && (
            <div className='overlay'>
                <p className='closeOverlay' onClick={() => setIsClicked(false)}>x</p>
                <h2 className='overlay-title'>{title}</h2>
                <p className='overlay-text'>{description}</p>
                <div className='overlayButtons'>
                    <a href="http://www.google.com" target="_blank"><p className='repo'>Repository</p></a>
                    <a href="http://www.google.com" target="_blank"><p className='deployApp'>Deployed App</p></a>
                </div>
            </div>
        )}
        </>
)}

export default Overlay;
