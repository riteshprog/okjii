import React, { Component } from 'react';
import Offer from '../img/offer/Offer.png';
import InputPage from './InputPage';
import OkjiiofferCard from './OkjiiofferCard';
import Trusted from './Trusted';
//import AmazingOffer from './AmazingOffer';
//import HowtoApply from './HowtoApply';
export default class OkjiiOfferBody extends Component {
  render() {
    return (
      <div>
      <div className="container-fluid okjii-offer">
        <div className="row image-position">
        <div className="col-md-7 okjii-offer-image order-md-2">
        <img src={Offer} className="img-fluid"  alt="" />
            
        </div>

          <div className="col-md-5 order-md-1 mt-5">
            <h1>Get Upto ₹150 Cashback Using <span className="text-green">OKKJI150</span> on</h1>
            <h2 class="mb-5">Minimum Order of  ₹499 </h2>
<InputPage />
</div>
</div>
</div>
<h1 className="text-center bring-txt pb-5 pt-2"><span className="text-green">OKK</span>JI BRINGS TO YOU, AMAZING OFFERS!</h1>
<OkjiiofferCard />
{/*<AmazingOffer />*/}
{/*<HowtoApply />*/}
<Trusted />
      </div>
    )
  }
}
