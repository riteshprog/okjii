import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navbar from "./components/common/header/Navbar";
import Footer from "./components/common/footer/Footer";
import MainBody from "./components/home/mainbody";
import OkjiiRetailer from "./components/retailer/OkjiiRetailer";
import OkjiiFast from "./components/fast/OkjiiFast";
import Fastaq from "./components/faq/Fastaq";
import OkjiiOffer from "./components/offer/OkjiiOffer";
import OkjiiBlog from "./components/blog/OkkjiBlog";
import About from "./components/about/About";
import Contact from "./components/contact/contact";
import TermsConditions from "./components/terms/TermsConditions";
import PrivacyPolicy from "./components/privacy/PrivacyPolicy";
import RefundPolicy from "./components/refund/RefundPolicy";
import Disclaimer from "./components/disclaimer/Disclaimer";
import Registration from "./components/registration/Registration";
import ScrollToTop from "./components/ScrollToTop";
import BlogPage from "./components/blogpage/BlogPage";

import AdminApp from './adminApp.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdmin: false
    };
  }
  componentDidMount() {
    if(window.location.hostname.split('.')[0] == 'admin'){
      this.setState({showAdmin: true});
    }
  }
  render() {
    if (!this.state.showAdmin) {
      return (
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <MainBody />
            </Route>
            <Route path="/okkji-retailer">
              <OkjiiRetailer />
            </Route>
            <Route path="/okkji-fast">
              <OkjiiFast />
            </Route>
            <Route path="/help">
              <Fastaq />
            </Route>
            <Route path="/offer">
              <OkjiiOffer />
            </Route>
            <Route path="/blog">
              <OkjiiBlog />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/tnc">
              <TermsConditions />
            </Route>
            <Route path="/privacy">
              <PrivacyPolicy />
            </Route>
            <Route path="/refund">
              <RefundPolicy />
            </Route>
            <Route path="/disclaimer">
              <Disclaimer />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/user-blog">
              <BlogPage />
            </Route>
          </Switch>
          <Footer />
        </div>
      );
    } else {
      return <AdminApp/>;
    }
  }
}
export default App;