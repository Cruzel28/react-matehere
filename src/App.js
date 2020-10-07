import React from 'react';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100vh;
    width: 100vw;
    font-size: 30px;
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
    <div className="App">
      
    </div>
  </>
  );
}

export default App;
