import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }

  body {
    background-color: #E8E8E8;
    background-image: url('/bg_fundo_ai_cockipt.svg');
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
