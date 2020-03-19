import React, { Component } from 'react';
//import Offer from '../../img/offer/Offer.png';
import InputPage from '../offer/InputPage';
import OkjiiofferCard from '../offer/OkjiiofferCard';
import Trusted from '../common/Trusted';
//import AmazingOffer from './AmazingOffer';
//import HowtoApply from './HowtoApply';
import BAckgroundOfferBody from '../../img/offer/BAckgroundOfferBody.png';
import BAckgroundOfferMobile from '../../img/offer/BAckgroundOfferMobile.png';


export default class OkjiiOfferBody extends Component {
  render() {
    return (



<div className="">
        <section  className="okkji-faq faq-desktop">
          <figure className="okkji-faq-figure faqimg01">
            <img src={BAckgroundOfferBody} alt="" className="img-fluid" />
          </figure>

         
          <div className="offerheading">
            <div className=" ">
              <h1>OKKJI OFFERS</h1>
            <h2>Using <span className="text-green">OKKJI150</span> on Minimum Order of  ₹499 <br />And get discount upto ₹50</h2>
<InputPage />

          </div>
          </div>
          
       </section>

       <section  className="okkji-faq faq-mobile">
          <figure className="okkji-faq-figure faqimg01">
            <img src={BAckgroundOfferMobile} alt="" className="img-fluid" />
          </figure>

         
          <div className="offerheading">
            <div className=" ">
              <h1>OKKJI OFFERS</h1>
            <h2>Using <span className="text-green">OKKJI150</span> on Minimum Order of  ₹499 <br />And get discount upto ₹50</h2>


          </div>
          </div>
          <InputPage />          
       </section>
       

       <div class="okjii-bring">
       <h1 className="text-center okjii-bring"><span className="text-green">OKK</span>JI BRINGS TO YOU, AMAZING OFFERS!</h1>

       </div>
       <OkjiiofferCard />
        <Trusted />
      </div>

      
    )
  }
}
