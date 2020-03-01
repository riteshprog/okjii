import React, { Component } from 'react';
import img4 from '../img/okjiifast/img4.png';
import img2a from '../img/okjiifast/img2a.png';
import img2b from '../img/okjiifast/img2b.png';
import img2c from '../img/okjiifast/img2c.png';
import img1 from '../img/okjiifast/img1.png';
import Testimonial from './Testimonial';
import Trusted from './Trusted';

export default class OkjiiFastBody extends Component {
  render() {
    return (
      <div className="okjii-fast">
        <figure>
        <img src={img4} className="img-fluid " alt="" />
        </figure>
          <section class="okjii-fastcon">
        <h1><b>OKKJI Fast</b></h1>
        <h2>An exclusive OkkJi service</h2>
        </section>
        <section class="okjii-fasthow">
          <h1>How we work</h1>
          <div>
            <div className="row">
              <div className="col-md-4">
          <figure>
            <img src={img2a} className="img-fluid okjii-fast-img-how py-4" alt="" />
            <figcaption class="text-center"><h4>Install App</h4></figcaption>
          </figure>
          </div>
          <div className="col-md-4">
          <figure>
            <img src={img2b} className="img-fluid okjii-fast-img-how py-4" alt="" />
            <figcaption class="text-center"><h4>Order Online</h4></figcaption>
          </figure>
          </div>
          <div className="col-md-4">
          <figure>
            <img src={img2c} className="img-fluid okjii-fast-img-how py-4" alt="" />
            <figcaption class="text-center"><h4>Fast Deliver</h4></figcaption>
          </figure>
          </div>
            </div>
          </div>

        </section>
        <section class="okjii-fastfast">
          <h1>OkkJi Fast</h1>
          <figure>
            <img src={img1} className="img-fluid okjii-fast-img" alt="" />
          </figure>
          <div className="okjii-fast-left1">Rapid delivery at door step</div>
          <div className="okjii-fast-left2">Get all neighbourhood shop</div>
          <div className="okjii-fast-left3">Additional hand for shops to deliver on time</div>
          <div className="okjii-fast-left4">Relationship-oriented shopping in fast track mode</div>
          <div className="okjii-fast-right1">Three easy steps to shop</div>
          <div className="okjii-fast-right2">An expressway between shop and customer</div>
          <div className="okjii-fast-right3">Order anytime, anywhere from nearby store</div>
          <div className="okjii-fast-right4">Boon for shops that cannot effort home delivery</div>

        </section>
        <Testimonial />
        <Trusted />
       
      </div>

    )
  }
}
