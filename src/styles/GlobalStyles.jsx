
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #121212;
    color: #e0e0e0;
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }
  a {
    color: #ff6f61;
    text-decoration: none;
  }
  a:hover {
    color: #ff9a8b;
  }
`;
