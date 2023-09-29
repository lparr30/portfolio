import { styled} from "styled-components";
import { ButtonContainer, Button } from "./ButtonStyles";

const StickyFooter = styled.footer`
  position: sticky;
  bottom: 0;
  z-index: 2;
  background-color: yellow;
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
//     box-shadow: -4px -4px 6px rgba(255, 255, 255, 0.515), 4px 4px 6px rgba(0, 0, 0, 0.515);
//     font-weight: bold;
//     }
// `

// function Footer() {
//     return (
      // <StickyFooter>
      //   <ButtonContainer>
      //     <Button>LinkedIn</Button>
      //     <Button>GitHub</Button>
      //     <Button>Email</Button>
      //   </ButtonContainer>
      // </StickyFooter>
    // <div id="footer">
    //   <b><p>Thanks, hire me!</p></b>
      // <p>&copy; Liza Parr 2023</p>
    // </div>
//   );
// }

// export default Footer;
