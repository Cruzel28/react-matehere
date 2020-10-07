import React from 'react';
import Navbar from "./components/Navbar"
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100vh;
    width: 100vw;
    font-size: 30px;
    // background-color: #915938;
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar/>
  </>
  );
}

export default App;
