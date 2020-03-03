import React, { Component } from 'react';
import faqimg01 from '../img/faq/faqimg01.png';
import Trusted from './Trusted';
import SearchPage from './SearchPage';
import Faqshowhide from './Faqshowhide';
import FaqCards from './FaqCards'
import AccountHelpOur from './AccountHelpOur'
export default class Fastaqbody extends Component {
  render() {
    return (
      <div>
        <section  className="okkji-faq">
          <figure className="okkji-faq-figure">
            <img src={faqimg01} alt="" className="img-fluid" />
          </figure>
          <div className="search-page">
          <SearchPage />
          </div>
          


       </section>
       <h1 className="text-center py-3">SUPPORT : 1800 1212 2121</h1>
          <p className="text-center pt-3">If you need custom services or Need more? Contact us
</p>
<div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-9">
          <Faqshowhide />
          </div>
          <div className="col-sm-3 col-md-5 col-lg-3">

            <FaqCards />
          </div>
        </div>
        <AccountHelpOur />
        </div>
        <Trusted />
      </div>
      
    )
  }
}
