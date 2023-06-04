function Navbar() {return(
    <div id='navbar'>
        <p onClick={Scroll()} id='buttons'>About</p>
        <p id='buttons'>Projects</p>
        <p id='buttons'>Contact</p>
    </div>
)}

// add onmouseover

function Scroll() {
    console.log('hi')
    const section = document.getElementById('');
    section.scrollIntoView;
    return()
}

export default Navbar;
