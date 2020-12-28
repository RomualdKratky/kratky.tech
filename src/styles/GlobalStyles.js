import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #222;
    --white: #fff;
    --grey: #888;
    --lightgrey: #b6b6b6;
    --blue: #5D93FF;
    --orange: #F7A046;
    --red: #FF4949;
    --yellow: #ffc600;
  }

  html {
    font-size: 10px;
    width: 100vw;
  }

  body {
    font-size: 1.6rem;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
