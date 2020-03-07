import React, { Component } from 'react';
import paytm from '../img/offer/paytm.png';
import Okkjipaytm from '../img/offer/Okkjipaytm.png';


export default class AmazingOffer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center my-5 offer-h1"><span>OKK</span>JI BRINGS TO YOU, AMAZING OFFERS!
</h1>
<div className="row my-5">
  <div class="col-md-6">
    <h1 className="my-5">Shopping With OKKji</h1>
    <img src={paytm} alt="" className="img-fluid my-5" />
    <h2 className="my-5">Using Paytm &amp; Get <span className="">Upto ₹300 Cashback
</span></h2>
<a className="btn btn-paytm my-5" href="/"> Code: OKKJIPAYTM</a>

  </div>
  <div className="col-md-6">
    <figure>
      <img src={Okkjipaytm}  className="img-fluid" alt="" />
    </figure>
  </div>
</div>
      </div>
    )
  }
}
