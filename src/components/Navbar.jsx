


function scroll(event) {
        console.log(event.target.id);
        const {id} = event.target //out of the object 'event.target', pull out the 'id' property
        switch(id) {
            case 'aboutButton':
                const about = document.getElementById('aboutSection');
                about.scrollIntoView({behavior: 'smooth'});
                break;
            case 'projectsButton':
                const projects = document.getElementById('projectsSection');
                projects.scrollIntoView({behavior: 'smooth'});
                break;
            case 'contactButton':
                const contact = document.getElementById('contactSection');
                contact.scrollIntoView({behavior: 'smooth'});
                break;
        }
}

function Navbar() {
    // return(

        // <div id='navbar' onClick={scroll}>
        //     <p id='aboutButton' className='buttons'>About</p>
        //     <p id='projectsButton' className='buttons'>Projects</p>
        //     <p id='contactButton' className='buttons'>Contact</p>
        // </div>
    // )
}


export default Navbar;
