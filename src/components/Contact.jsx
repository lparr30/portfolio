import { styled} from "styled-components";
import { ButtonContainer, Button } from "./ButtonStyles";
import linkedin from '../assets/linkedin-icon.svg'
import github from '../assets/github-icon.svg'
import gmail from '../assets/gmail-icon.svg'

const ContactContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    position: fixed;
    bottom: 24px;
    right: 72px;
    // padding: 8px 72px 24px 72px;
    width: fit-content;
    // background-color: yellow;
`

const Icon = styled.img`
    width: 30px;
    height: 30px;
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

function Contact() {return(
    <ContactContainer>
        <ButtonContainer>
            {iconInfo.map((item, index) => {
                const openPage = (url) => {
                    window.open(url, '_blank');
                };

                return(
                    <Button key={index} onClick={() => openPage(item.url)}>
                        <Icon src={item.icon} alt={item.alt}></Icon>
                    </Button>
                )
            })}
        </ButtonContainer>
    </ContactContainer>
)}

export default Contact;
