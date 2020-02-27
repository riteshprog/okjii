import React, { Component } from 'react';
import Daily from '../components/daily';
import Asset6 from '../img/home/Asset6.png';
import apple from '../img/home/apple.png';
import google from '../img/home/google.png';
import Asset7 from '../img/home/Asset7.png';
import HomeDelivery from './HomeDelivery';
import KhataBook from './KhataBook';
import Testimonial from './Testimonial';
import Trusted from './Trusted'

export default class mainbody extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col-sm-8 figure-img2 order-sm-2 ">
            
        <img src={Asset6} className="img-fluid"  alt="" />
          </div>

          <div className="col-sm-4 order-sm-1  mt-5 w-100 okjii-explore">
            <h1>Best Way to Explore</h1>
            <h2>all nearby mom-dad retail shops.</h2>
            <p>A revolution in grocery shopping where a customer can buy from their old reliable “Kirana” store without physically going there. A digital hub of all local, neighbourhood retail shop with era driven look and mechanism.
</p>
<div className="row  mt-4">
  <div class="col-lg-5 order-sm-2 text-center okjii-install">
    <h1 class="text-center">INSTALL NOW</h1>
    <p class="text-center"><img src={Asset7} alt="" /></p>

  </div>
  </div>
<div className="row mt-3">
  <div class="col-lg-6 col-md-6 col-12 ">
  <figure class="okkjii-figure-apple">
              <img src={apple} className="img-fluid apple" alt=""/>
      </figure>
  </div>
  <div class="col-lg-6 col-md-6 col-12">
  <figure class="okkjii-figure-google">
              <img className="img-fluid google" src={google} alt=""/>
  </figure>
  </div>
</div>
<div className="row mt-3">
<div class="col-md-12 okjii-tel">
<input type="tel" placeholder="91 |Mobile Number"  />
<button className="okjii-button">GET APP LINK</button>

</div>
</div>
          </div>
          
                  </div>





        <div className="row">
          <div className="col-lg-12 okjii-best">
            <h1 class="text-center my-5">Why Customer <b>Loves Okkji</b></h1>
          </div>
        </div>
        <Daily />
        <HomeDelivery />
        <KhataBook />
        <Testimonial />
        <Trusted />
              </div>
    )
  }
}
