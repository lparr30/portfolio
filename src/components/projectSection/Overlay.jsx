function Overlay({ isClicked, isHovered, setIsClicked, isMobileDevice, title, description }) {
    
    // console.log('overlay is working');

    return(
        <>
        {(isClicked || isHovered) && (
            <div className='overlay'>
                <div className='overlay-top'>
                    <div className="overlay-title-row">
                        <h2 className='overlay-title'>{title}</h2>
                        {isMobileDevice && <button className='closeOverlay' onClick={() => setIsClicked(false)}>x</button>}
                        
                    </div>
                    <p className='overlay-text'>{description}</p>

                </div>
                <div className="overlay-bottom">
                    <div className='overlayButtons'>
                        <a href="http://www.google.com" target="_blank"><p className='repo'>Repository</p></a>
                        <a href="http://www.google.com" target="_blank"><p className='deployApp'>Deployed App</p></a>
                    </div>
                </div>
            </div>
        )}
        </>
)}

export default Overlay;
