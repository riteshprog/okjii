import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainBody from './components/mainbody';
import OkjiiRetailer from './components/OkjiiRetailer';
import OkjiiFast from './components/OkjiiFast';
import Fastaq from './components/Fastaq';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Switch>
     <Route exact path='/'>
     <MainBody />
     </Route>
     <Route path='/retailer' >
              <OkjiiRetailer />
     </Route>
     <Route path='/OkjiiFast' >
              <OkjiiFast />
     </Route>
      
     <Route path='/Fastaq' >
              <Fastaq />
     </Route>

     </Switch>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
