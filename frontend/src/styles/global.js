import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        height: 100vh;
        font-family: 'Montserrat', sans-serif;
        background: linear-gradient(
          90deg,
          rgba(88, 88, 226, 1) 51%,
          rgba(0, 212, 255, 1) 100%
        );
    }
`;

export default GlobalStyle;
