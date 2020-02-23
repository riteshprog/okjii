import React, { Component } from 'react';
import Asset1 from '../img/home/Asset1.png';
import {MDBIcon} from "mdbreact";


export default class daily extends Component {
  render() {
    return (
<div className="container-fluid">
        <section className="daily-use ">
          <div className="container">
          <div className="row">
            <div className="col-lg-6">
            <figure class="figure-img1">
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
