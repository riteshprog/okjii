import React, { Component } from 'react';
import OkkjifastBackground from '../../img/okjiifast/OkkjifastBackground.png';
import img2a from '../../img/okjiifast/img2a.png';
import img2b from '../../img/okjiifast/img2b.png';
import img2c from '../../img/okjiifast/img2c.png';
//import Howwework from '../../img/okjiifast/Howwework.png';
//import OkkJiFast01 from '../../img/okjiifast/OkkJiFast01.png';
//import img1 from '../img/okjiifast/img1.png';
import OkjiiRapid from '../fast/OkjiiRapid';

import Testimonial from '../common/testimonial/Testimonial';
import Trusted from '../common/Trusted';

export default class OkjiiFastBody extends Component {
  render() {
    return (
      <div className="ok-fast">

      <div className="container-fluid okkji-faq">
        <div className="row">
      <figure className="okkji-faq-figure okjii-fast-img4">
        <img src={OkkjifastBackground} alt="" className="img-fluid " />
      </figure>
      <div class="okjii-fastcon">
        <h1>AN EXCLUSIVE OKKJI SERVICE</h1>
      
        </div>

        <div className="container text-center okkji-howwework">
        <div className="row text-center">
        <div class="col-md-12 text-center"><h1 className="text-center">How we work</h1></div>
        </div>      
        <div class="row okjii-fasthow text-center">
          <div className="col-md-4 col-sm-6">
          <figure>
            <img src={img2a} className="img-fluid " alt="" />
            <figcaption><h4>Install App</h4></figcaption>
          </figure>
          </div>
          <div className="col-md-4 col-sm-6">
          <figure>
            <img src={img2b} className="img-fluid " alt="" />
            <figcaption><h4>Order Online</h4></figcaption>
          </figure>
          </div>
          <div className="col-md-4 col-sm-6 text-center">
          <figure>
            <img src={img2c} className="img-fluid " alt="" />
            <figcaption><h4>Fast Delivery</h4></figcaption>
          </figure>
          </div>
          
          </div>
        </div>

        </div>

   </div>


        <div className="">
          <h1 className="text-center okjii-fastheading">OKKJI Fast</h1>
          <OkjiiRapid />
        </div>
        <Testimonial />
        <Trusted />

      </div>
    )
  }
}
