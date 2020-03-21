import React, { Component } from 'react';
import faqimg01 from '../../img/faq/faqimg01.png';
import faqimg01mobile from '../../img/faq/faqimg01.png';
import Trusted from '../common/Trusted';
import SearchPage from '../faq/SearchPage';
import Faqshowhide from '../faq/Faqshowhide';
import FaqCards from '../faq/FaqCards';
import AccountHelpOur from '../faq/AccountHelpOur';
export default class Fastaqbody extends Component {
  render() {
    return (
      <div className="faq-body">
        <section  className="okkji-faq offer-desktop">
          <figure className="okkji-faq-figure faqimg01">
            <img src={faqimg01} alt="" className="img-fluid" />
          </figure>
          <div className="search-page container">
            <div className=" text-center">
            <h1 className="text-center">HELP CENTER</h1>

            <SearchPage />

          </div>
          </div>
          

          
  
         
       </section>

       <section  className="okkji-faq offer-mobile">
          <figure className="okkji-faq-figure faqimg01">
            <img src={faqimg01mobile} alt="" className="img-fluid" />
          </figure>
          <div className="search-page container">
            <div className=" text-center">
            <h1 className="text-center">HELP CENTER</h1>



          </div>
          </div>
          <div className="search-page-faq"><SearchPage />
          </div>
       </section>



       <h1 className="faq-h1 pl-3">SUPPORT : 1800 1212 2121</h1>
          <p className="text-center support-para pl-3 pt-3">If you need custom services or Need more? Contact us
</p>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-9">
          <Faqshowhide />
          </div>
          <div className="col-sm-3 col-md-5 col-lg-3 pb-5">

            <FaqCards />
          </div>
        </div>
        <hr  className="pt-3"/>
        <AccountHelpOur />
        </div>
        <Trusted />
      </div>
      
    )
  }
}
