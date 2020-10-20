import React,{Suspense } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import withHelmet from './utils/withHelmet';
import GlobalStyle from './utils/GlobalStyle';
import Navbar from './components/Navbar';




const Home = React.lazy(() => import("./pages/Home") ) ;
const HavePost = React.lazy(() => import("./pages/HavePost") ) ;
const NeedPost = React.lazy(() => import("./pages/NeedPost") ) ;
// const Register = React.lazy(() => import("./pages/Register") ) ;

function App() {
  return (
    <>
    <GlobalStyle />
      <Router>
        <Navbar/>
        <Suspense fallback='...loading' >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/haverooms" component={HavePost} />
            <Route exact path="/needrooms" component={NeedPost} />
            {/* <Route exact path="/register" component={Register} /> */}
          </Switch>
        </Suspense>
      </Router>
   </>
  );
}

export default withHelmet('MateHere')(App);
