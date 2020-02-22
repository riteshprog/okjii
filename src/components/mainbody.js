import React, { Component } from 'react';
import {MDBIcon} from "mdbreact";
//import Asset6 from '../img/home/Asset6.png';
import apple from '../img/home/apple.png';
import Asset7 from '../img/home/Asset7.png';
import Asset1 from '../img/home/Asset1.png';


export default class mainbody extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5  mt-5">
            <h1>Best Way to Explore</h1>
            <h2>all nearby mom-dad retail shops.</h2>
            <p>A revolution in grocery shopping where a customer can buy from their old reliable “Kirana” store without physically going there. A digital hub of all local, neighbourhood retail shop with era driven look and mechanism.
</p>
<div className="row  mt-5">
  <div class="col-lg-5 text-center">
    <h1 class="text-center">INSTALL NOW</h1>
    <p class="text-center"><img src={Asset7} alt="" /></p>

  </div>
  </div>
<div className="row mt-5">
  <div class="col-lg-6">
  <figure class="figure-img">
              <img src={apple} alt=""/>
      </figure>
  </div>
  <div class="col-lg-6">
  <figure class="figure-img">
              <img src={apple} alt=""/>
            </figure>
  </div>
</div>
          </div>
          <div className="col-lg-7 figure-img1">
            <figure class="figure-img1">
            
            </figure>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 class="text-center">Why Customer <b>Loves Okkji</b></h1>
          </div>
        </div>
        <section className="daily-use container-fluid">
          <div className="container">
          <div className="row">
            <div className="col-lg-6">
            <figure class="figure-img">
              <img src={Asset1} alt=""/>
            </figure>
            </div>
            <div className="col-lg-6">
              <h1><b>Daily</b> useable from nearby shops</h1>
              <p>Because we digitalized all hyper-local shop who knows the taste and need of Indian families. We are extending the convenience of customer, their faith according to the digital age and social trend.</p>
              <ul className="list-step-center">
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Many payment options</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Street’s store on smartphone</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Digital representation of all product</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Digitalization of evergreen “UDHAAR”</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Digitalization of faith, reliability &amp; local taste</p></div></li>
              </ul>
            </div>
          </div>
          </div>
        </section>
      </div>
    )
  }
}
