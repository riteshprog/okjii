import React, { Component } from 'react';
import img4 from '../img/okjiifast/img4.png';
import img2 from '../img/okjiifast/img2.png';
import img1 from '../img/okjiifast/img1.png';
import Testimonial from './Testimonial';
import Trusted from './Trusted';

export default class OkjiiFastBody extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="okjii-fast">
        <figure>
        <img src={img4} className="img-fluid okjii-fast-img" alt="" />
        </figure>
          <section class="okjii-fastcon">
        <h1><b>OKKJI Fast</b></h1>
        <h2>An exclusive OkkJi service</h2>
        </section>
               </div>
        <section class="okjii-fasthow">
          <h1>How we work</h1>
          <figure>
            <img src={img2} className="img-fluid okjii-fast-img-how py-4" alt="" />
          </figure>
        </section>
        <section class="okjii-fastfast">
          <h1>OkkJi Fast</h1>
          <figure>
            <img src={img1} className="img-fluid okjii-fast-img" alt="" />
          </figure>
        </section>
        <Testimonial />
        <Trusted />
       
      </div>

    )
  }
}
