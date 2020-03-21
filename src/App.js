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
import TermsConditions from './components/terms/TermsConditions';
import PrivacyPolicy from './components/privacy/PrivacyPolicy';
import RefundPolicy from './components/refund/RefundPolicy';
import Disclaimer from './components/disclaimer/Disclaimer';
import Registration from './components/registration/Registration';


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
     <Route path='/okkji-retailer' >
              <OkjiiRetailer />
     </Route>
     <Route path='/okjii-fast' >
              <OkjiiFast />
     </Route>
      
     <Route path='/help' >
              <Fastaq />
     </Route>
     <Route path='/offer' >
      <OkjiiOffer />
      </Route>
      <Route path='/blog' >
      <OkjiiBlog />
      </Route>
      <Route path='/about' >
      <About />
      </Route>
      <Route path='/contact' >
      <Contact />
      </Route>
      <Route path='/tnc' >
      <TermsConditions />
      </Route>
      <Route path='/privacy' >
      <PrivacyPolicy />
      </Route>
      <Route path='/refund' >
      <RefundPolicy />
      </Route>
      <Route path='/disclaimer' >
      <Disclaimer />
      </Route>
      <Route path='/registration' >
      <Registration />
      </Route>

     </Switch>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
