import React, { Component } from 'react';
import img1 from '../../img/retailer/img1.jpg';
import img2 from '../../img/retailer/img2.jpg';


export default class WhyweShop extends Component {
  render() {
    return (
      <div className="container-fluid okjii-whyweshop">
        <section class="container">
        <div className="row">
  <div className="col-sm-12 col-md-6 col-lg-6">
  <h1><b className="sell">Why are we</b> for shops</h1>
          <h2>What shop owners had to say about their OkkJi experience
</h2>
</div>
</div>

<div className="row ">
  <div className="col-md-6 col-lg-6">
    <figure className="figure-whayweshop">
      <img src={img1} alt="" className="img-fluid" />
    </figure>
  </div>
  
  <div className="col-md-6 col-lg-6">
    <figure className="figure-whayweshop">
      <img src={img2} alt="" className="img-fluid" />
    </figure>
  </div>
</div>
        </section>
        
      </div>
    )
  }
}
