import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/common/header/Navbar';
import Footer from './components/common/footer/Footer';
import MainBody from './components/home/mainbody';

//import okjiiretailer from './components/OkjiiRetailer';
import OkjiiRetailer from './components/retailer/OkjiiRetailer';
import OkjiiFast from './components/fast/OkjiiFast';
import Fastaq from './components/faq/Fastaq';
import OkjiiOffer from './components/offer/OkjiiOffer';
import OkjiiBlog from './components/blog/OkkjiBlog';
import About from './components/about/About';
import Contact from './components/contact/Contact';

import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
    <div className="App">
     <ScrollToTop />
     <Navbar />
     <Switch>
     <Route exact path='/'>
     <MainBody />
     
     </Route>
     <Route path='/okjiiretailer' >
              <OkjiiRetailer />
     </Route>
     <Route path='/okjiifast' >
              <OkjiiFast />
     </Route>
      
     <Route path='/fastaq' >
              <Fastaq />
     </Route>
     <Route path='/okjiioffer' >
      <OkjiiOffer />
      </Route>
      <Route path='/okjiiblog' >
      <OkjiiBlog />
      </Route>
      <Route path='/about' >
      <About />
      </Route>
      <Route path='/contact' >
      <Contact />
      </Route>
     </Switch>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
