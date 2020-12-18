import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');    * {
        margin: 0;
        padding: 0;
        font-family:'Caveat', cursive;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
 `;
export default GlobalStyle;
