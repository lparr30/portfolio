import { styled } from "styled-components";
import { ButtonContainer } from "./ButtonStyles";
import linkedin from '../assets/linkedin-icon.svg'
import github from '../assets/github-icon.svg'
import gmail from '../assets/gmail-icon.svg'

const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    // position: fixed;
    // bottom: 24px;
    // padding: 6px 6px 6px 0;
    // width: fit-content;
    border-radius: 6px;
    z-index: 2;
    background-color: yellow;
    background-color: rgba(0,0,0,0);
    // box-shadow: ${(props) => props.$boxShadow};    
`

const Link = styled.a`
    background-color: rgba(0,0,0,0);
    target: _blank;
`

const Icon = styled.img`
    width: 40px;
    height: 40px;
    margin: auto 10px;
    background-color: rgba(0,0,0,0);
    border-radius: 6px;
    box-shadow: ${(props) => props.$boxShadow};    


    &:hover {
        transform: scale(1.1);
    }
`

const iconInfo = [
    {
        icon: linkedin,
        alt: 'LinkedIn icon',
        url: 'https://www.linkedin.com/in/lizajparr/'
    },
    {
        icon: github,
        alt: 'GitHub icon',
        url: 'https://github.com/lparr30'
    },
    {
        icon: gmail,
        alt: 'Email icon',
        url: 'https://mail.google.com/mail/?view=cm&fs=1&to=lizajparr@gmail.com'
    }
]


function Contact({ contactClick }) {
    

    const buttonState = {
        boxShadow: contactClick ? '0 0 4px 4px var(--cream)' : 'none' 
    }
    
    return(
    <ContactContainer >
        {/* <ButtonContainer> */}
            {iconInfo.map((item, index) => {
                

                return(

                    <Link key={index} href={item.url} target="_blank"><Icon $boxShadow={buttonState.boxShadow} src={item.icon} alt={item.alt}/></Link>
                )
            })}
        {/* </ButtonContainer> */}
    </ContactContainer>
)}

export default Contact;
