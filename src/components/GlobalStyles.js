import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span, img {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-style: normal;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    color: white;
  }

/* GLOBAL STYLES */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
