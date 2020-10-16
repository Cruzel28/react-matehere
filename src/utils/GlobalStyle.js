import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`

${reset}
  html, body, #root {
    height: 100vh;
    width: 100vw;
    font-size: 20px;
    font-family: "Nunito Sans", sans-serif;
    overflow-x: hidden;
   
    scroll-behavior:smooth;
    
    
  }

  * {
    margin: 0;
    padding: 0;
  }
    
    &:Link {
      text-decoration: none;
      color: #fff;
  }
`
export default GlobalStyle;
