import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-family: "Open Sans", Arial, Helvetica, Sans-Serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration: none;
    :hover{
      color: var(--blue);
    }
    &.active{
      color: var(--blue);
      text-decoration: underline;
    }
  }
`;

export default Typography;
