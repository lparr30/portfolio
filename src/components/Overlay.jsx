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

function Overlay({ isClicked, description }) {
    console.log('overlay is working');
    return(
        <>
        <h1 className='overlay'>{description}</h1>
        {isClicked && (
            <div >
                <h1>{description}</h1>
                {/* <button onClick={repo}>Repository</button>
                <button onClick={deployed}>Deployed App</button>
                <button onClick={closeOverlay}>X</button> */}
            </div>
        )}
        </>
)}

export default Overlay;
