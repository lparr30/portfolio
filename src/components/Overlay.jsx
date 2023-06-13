function repo() {
    console.log('repo');
}

function deployed() {
    console.log('deployed');
}

function closeOverlay() {
    console.log('x');
    // setIsClicked(!isClicked);
}

function Overlay({ isClicked, description }) {
    console.log('overlay is working');
    return(
        <>
        {isClicked && (
            <div className='overlay'>
                <p>{description}</p>
                <button onClick={repo}>Repository</button>
                <button onClick={deployed}>Deployed App</button>
                <button onClick={closeOverlay}>X</button>
            </div>
        )}
        </>
)}

export default Overlay;
