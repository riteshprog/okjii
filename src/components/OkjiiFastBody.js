import React, { Component } from 'react';
import img4 from '../img/okjiifast/img4.png';
//import img2a from '../img/okjiifast/img2a.png';
//import img2b from '../img/okjiifast/img2b.png';
//import img2c from '../img/okjiifast/img2c.png';
import Howwework from '../img/okjiifast/Howwework.png';
import OkkJiFast01 from '../img/okjiifast/OkkJiFast01.png';
import img1 from '../img/okjiifast/img1.png';
import Testimonial from './Testimonial';
import Trusted from './Trusted';

export default class OkjiiFastBody extends Component {
  render() {
    return (
      <div>
      <div className="container-fluid okkji-faq">
        <div className="row">
      <figure className="okkji-faq-figure okjii-fast-img4">
        <img src={img4} alt="" className="img-fluid " />
      </figure>
      <div class="okjii-fastcon">
        <h1><b>OKKJI Fast</b></h1>
        <h2>An exclusive OkkJi service</h2>
      
        </div>
        </div>

   </div>


      <div className="container-fluid">
      
        <div class="row okjii-fasthow">
          <div className="">
          <h1 className="text-center">How we work</h1>
          <figure>
            <img src={Howwework} className="img-fluid " alt="" />
</figure>
</div>
</div>
        </div>
        <div className="container-fluid">
        <div class="row okjii-fastfast">
          <div className="">
          <h1 className="okjii-fast">OkkJi Fast</h1>
          <figure className="OkkJiFast01">
            <img src={OkkJiFast01} className="img-fluid " alt="" />
          </figure>
          </div>
          {/*<div className="okjii-fast-left1">
          <div className="okjii-fast-left">Rapid delivery at door step</div>
          <div className="okjii-fast-left">Get all neighbourhood shop</div>
          <div className="okjii-fast-left">Additional hand for shops to deliver on time</div>
          <div className="okjii-fast-left">Relationship-oriented shopping in fast track mode</div>
          </div>
          <div className="okjii-fast-right1">
          
          <div className="okjii-fast-right">Three easy steps to shop</div>
          <div className="okjii-fast-right">An expressway between shop and customer</div>
          <div className="okjii-fast-right">Order anytime, anywhere from nearby store</div>
          <div className="okjii-fast-right">Boon for shops that cannot effort home delivery</div>
  </div>*/}
        </div>
        </div>
        <Testimonial />
        <Trusted />

      </div>
    )
  }
}
