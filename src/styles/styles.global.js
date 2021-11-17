import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  },
  :root{
    font-size: 62.5%;
  },
  html{
    font-size: 1rem;
  }
`;