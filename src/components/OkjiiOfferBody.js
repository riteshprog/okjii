import React, { Component } from 'react';
import Offer from '../img/offer/Offer.png';
import InputPage from './InputPage';


export default class OkjiiOfferBody extends Component {
  render() {
    return (
      <div>
      <section className="container-fluid">
        <div className="row image-position">
        <div className="col-md-8 figure-img2 order-md-2 my-5">
        <img src={Offer} className="img-fluid"  alt="" />
            
        </div>

          <div className="col-md-4 order-md-1 mt-5">
            <h1>Get Upto ₹150 Cashback Using <span>OKKJI150</span> on</h1>
            <h2 class="mb-5">Minimum Order of  ₹499 </h2>
<InputPage />
</div>
</div>
</section>
      </div>
    )
  }
}
