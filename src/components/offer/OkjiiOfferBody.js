import React, { Component } from 'react';
import Offer from '../../img/offer/Offer.png';
import InputPage from '../offer/InputPage';
import OkjiiofferCard from '../offer/OkjiiofferCard';
import Trusted from '../common/Trusted';
//import AmazingOffer from './AmazingOffer';
//import HowtoApply from './HowtoApply';
export default class OkjiiOfferBody extends Component {
  render() {
    return (
      <div className="okjii-offer-part">
      <div className="container-fluid okjii-offer">
        <div className="row image-position">
        <div className="col-md-7 okjii-offer-image order-md-2">
        <img src={Offer} className="img-fluid"  alt="" />
            
        </div>

          <div className="col-md-5 order-md-1">
            <h1>Get Upto ₹150 Cashback Using <span className="text-green">OKKJI150</span> on</h1>
            <h2>Minimum Order of  ₹499 </h2>
<InputPage />
</div>
</div>
<h1 className="text-center okjii-bring"><span className="text-green">OKK</span>JI BRINGS TO YOU, AMAZING OFFERS!</h1>
</div>
<OkjiiofferCard />
{/*<AmazingOffer />*/}
{/*<HowtoApply />*/}
<Trusted />
      </div>
    )
  }
}
