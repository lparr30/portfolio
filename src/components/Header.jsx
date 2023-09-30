// import Navbar from "./Navbar";
import { styled } from "styled-components";
import { ButtonContainer } from "./ButtonStyles";
import { useState, useEffect } from "react";

const StickyHeader = styled.header`
    // background-color: blue;
    width: fit-content;
    // position: sticky;
    // top: 32px;
    // margin-left: 100%;
    position: absolute;
    // position: fixed;
    right: var(--margin);
    z-index: 2;
    border-radius: 6px;
    display: flex;
    justify-content: flex-end;
    background-color: rgba(0,0,0,0);
    // transform: translateY(${(props) => props.$buttonShift});
    top: ${(props) => props.$buttonShift}
    transition: transform 0.3s;
`

const Button = styled.button`
    width: 96px;
    height: auto;
    border: none;
    // box-shadow: -4px -4px 6px rgba(230, 230, 230, 0.225), 4px 4px 6px rgba(0, 0, 0, 0.239);
    border-radius: 6px;
    border-radius: 50%;
    background-color: var(--cream);
    color: var(--orange);
    padding: 8px 14px;
    font-size: 18px;
    font-style: italic;
    cursor: pointer;


    &:hover {
        // box-shadow: -4px -4px 6px rgba(255, 255, 255, 0.515), 4px 4px 6px rgba(0, 0, 0, 0.515);
        font-weight: bold;
    }
`


function Header({ contactMe }) {
    const [yScroll, setYscroll] = useState(0)


    // useEffect(() => {
    //     const handleButtonShift = () => {
    //         setYscroll(window.scrollY);
    //         console.log('i am tired')
    //     };
        
    //     window.addEventListener('scroll', handleButtonShift);

    //     return () => {
    //         window.removeEventListener('scroll', handleButtonShift)
    //     };

    // }, []); 
    //this use effect runs once on page load, but here's what it does:
    //handleButtonShift updates the scroll posiiton of the window as setYScroll
    //whenever the user scrolls
    //then the useeffect hook is used to attach handleButtonShift to the eventlistener
    //then we clean up by removing it.
    //even though the use effect only runs on page load, the usestate variables
    //are updated whenever the user scrolls

    const handleButtonShift = () => {
        setYscroll(window.scrollY);
        console.log('i am tired')
    };
    window.addEventListener('scroll', handleButtonShift);

    // window.removeEventListener('scroll', handleButtonShift);



    const buttonShift = {
        top: yScroll ? '-72px' : '0'
    }


    return(
        <StickyHeader $buttonShift={buttonShift.top}>
            <ButtonContainer>
                <Button>About</Button>
                <Button>Work</Button>
                <Button onClick={contactMe}>Contact</Button>
            </ButtonContainer>
        </StickyHeader>
    );
}

export default Header;
