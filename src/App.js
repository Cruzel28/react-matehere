import React,{Suspense } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import routes from './configs/routes';
import withHelmet from './utils/withHelmet';
import GlobalStyle from './utils/GlobalStyle';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     <GlobalStyle />
     <Router>
     <Navbar/>
     
     <Suspense fallback='...loading' >
          <Switch>
            {Object.keys(routes).map(routeKey => (

              <Route 
                key={routes}{...routes[routeKey]}
              />

            ))}
          </Switch>
        </Suspense>
        
        <Footer/>
        </Router> 
   </>
  );
}

export default withHelmet('MateHere')(App);
