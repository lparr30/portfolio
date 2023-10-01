// import Navbar from "./Navbar";
import { styled } from "styled-components";
import { ButtonContainer } from "./ButtonStyles";
import { useState, useEffect } from "react";

const StickyHeader = styled.header`
    // background-color: blue;
    width: fit-content;
    // position: fixed;
    position: absolute;
    right: var(--margin);
    z-index: 2;
    border-radius: 6px;
    display: flex;
    justify-content: flex-end;
    background-color: rgba(0,0,0,0);
    // top: ${(props) => props.$buttonShift};
    // transition-duration: 0.3s;
`

const Button = styled.button`
    width: 96px;
    height: auto;
    border: none;
    // box-shadow: -4px -4px 6px rgba(230, 230, 230, 0.225), 4px 4px 6px rgba(0, 0, 0, 0.239);
    border-radius: 6px;
    border-radius: 50%;
    // background-color: var(--cream);
    // color: var(--orange);
    // padding: 8px 14px;
    font-family: var(--fontNormal);
    font-size: 22px;
    font-style: italic;
    text-decoration: underline;
    cursor: pointer;


    &:hover {
        // box-shadow: -4px -4px 6px rgba(255, 255, 255, 0.515), 4px 4px 6px rgba(0, 0, 0, 0.515);
        font-weight: bold;
    }
`

// const ToTop = styled.button`
//     background-color: blue;
//     width: 88px;
//     height: auto;
//     position: fixed;
//     bottom: 50px;
//     border: none;
//     border-radius: 6px;
//     font-family: var(--fontNormal);
//     font-size: 22px;
//     font-style: italic;
//     text-decoration: underline;
//     cursor: pointer;
//     visibility: ${(props) => props.$visibility};


//     &:hover {
//         // box-shadow: -4px -4px 6px rgba(255, 255, 255, 0.515), 4px 4px 6px rgba(0, 0, 0, 0.515);
//         font-weight: bold;
//     }
// `


function Header({ contactMe }) {
    const [yScroll, setYscroll] = useState(0)
    // const projects = document.getElementById('projects');

    const scrollProjects = () => {

    };

    const scrollContact = () => {
        window.scrollTo({
            bottom: 0,
            behavior: 'smooth'
        });
    };




    useEffect(() => {
        const handleListener = () => {
            setYscroll(window.scrollY);
        };
        
        window.addEventListener('scroll', handleListener);

        return () => {
            window.removeEventListener('scroll', handleListener)
        };

    }, []); 
    //this use effect runs once on page load, but here's what it does:
    //handleShowButton updates the scroll posiiton of the window as setYScroll
    //whenever the user scrolls
    //then the useeffect hook is used to attach handleShowButton to the eventlistener
    //then we clean up by removing it.
    //even though the use effect only runs on page load, the usestate variables
    //are updated whenever the user scrolls

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'})
        };
    };


    // const visibility = {
    //     visibility: (yScroll > 100) ? 'visibile' : 'hidden'
    // }


    return(
        <StickyHeader>
            <ButtonContainer>
                <Button onClick={() => handleScroll('projects')}>Projects</Button>
                <Button onClick={() => handleScroll('contact')}>Contact</Button>
            </ButtonContainer>
        </StickyHeader>
    );
}

export default Header;
