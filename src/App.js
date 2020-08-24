import React from 'react';
import { createGlobalStyle } from 'styled-components';
import NavBar from './Components/NavBar';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:: before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
    font-size: 20px;
    coor: black;
  }

  img {
    max-width: 100%;
    heigth: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-type: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3 {
    font-family: Pacifico;
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }

`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <NavBar/>
    </React.Fragment>
  );
}

export default App;
