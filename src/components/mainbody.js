import React, { Component } from 'react';
import Daily from '../components/daily';
import Asset6 from '../img/home/Asset6.png';
import apple from '../img/home/apple.png';
import Asset7 from '../img/home/Asset7.png';
import HomeDelivery from './HomeDelivery';
import KhataBook from './KhataBook';


export default class mainbody extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col-sm-7 figure-img2 order-sm-2 ">
            
        <img src={Asset6} width="100%" alt="" />
          </div>

          <div className="col-sm-5 order-sm-1  mt-5 w-100">
            <h1>Best Way to Explore</h1>
            <h2>all nearby mom-dad retail shops.</h2>
            <p>A revolution in grocery shopping where a customer can buy from their old reliable “Kirana” store without physically going there. A digital hub of all local, neighbourhood retail shop with era driven look and mechanism.
</p>
<div className="row  mt-5">
  <div class="col-lg-5 order-sm-2 text-center">
    <h1 class="text-center">INSTALL NOW</h1>
    <p class="text-center"><img src={Asset7} alt="" /></p>

  </div>
  </div>
<div className="row mt-5">
  <div class="col-lg-6">
  <figure class="okkjii-figure-apple">
              <img src={apple} alt=""/>
      </figure>
  </div>
  <div class="col-lg-6">
  <figure class="okkjii-figure-apple">
              <img src={apple} alt=""/>
            </figure>
  </div>
</div>
          </div>
          
                  </div>





        <div className="row">
          <div className="col-lg-12">
            <h1 class="text-center my-5">Why Customer <b>Loves Okkji</b></h1>
          </div>
        </div>
        <Daily />
        <HomeDelivery />
        <KhataBook />
              </div>
    )
  }
}
