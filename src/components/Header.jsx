// import Navbar from "./Navbar";
import { styled} from "styled-components";
import { ButtonContainer, Button } from "./ButtonStyles";

const StickyHeader = styled.header`
    // background-color: blue;
    width: fit-content;
    position: fixed;
    top: 24px;
    right: 72px;
    z-index: 2;
    // padding: 24px 72px 8px 72px;
    display: flex;
    justify-content: flex-end;
`

// const ButtonContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     gap: 40px
//     // width: 180px;
//     // background-color: green;
// `

// const Button = styled.button`
//     border: none;
//     box-shadow: -4px -4px 6px rgba(230, 230, 230, 0.225), 4px 4px 6px rgba(0, 0, 0, 0.239);
//     border-radius: 6px;
//     padding: 6px 12px;
//     font-size: 18px;
//     cursor: pointer;

//     &:hover {
//         box-shadow: -4px -4px 6px rgba(255, 255, 255, 0.515), 4px 4px 6px rgba(0, 0, 0, 0.515);
//         font-weight: bold;
//     }
// `


function Header() {

    const scroll = () => {

    }

    return(
        <StickyHeader>
            <ButtonContainer>
                <Button onClick={scroll}>About</Button>
                <Button onClick={scroll}>Work</Button>
            </ButtonContainer>
            {/* <Navbar /> */}
        </StickyHeader>
    );
}

export default Header;
