import React,{Suspense } from 'react';
import { createGlobalStyle } from "styled-components";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100vh;
    width: 100vw;
    font-size: 30px;
    // background-color: #915938;
    font-family: "Roboto", sans-serif;
    text-decoration: none;
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

const Home = React.lazy(() => import("./pages/Home") ) ;

function App() {
  return (
    <>
    <GlobalStyle />
      <Router>
        <Suspense fallback='...loading' >
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Suspense>
      </Router>
   </>
  );
}

export default App;
