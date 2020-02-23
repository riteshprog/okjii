import React, { Component } from 'react'
import {MDBIcon} from "mdbreact";
import Asset2 from '../img/home/Asset2.png';

export default class HomeDelivery extends Component {
  render() {
    return (
      <div className="container my-5">
        <section className="okjii-homedelivery">
        <div class="row">
          <div className="col-lg-6">
            <h1 className="mb-4 text-primary"><b>Home</b> Delivery</h1>
            <p>OkkJi limits consumer’s effort in all possible manner whether it is their physical presence or delivery of their shopping at doorstep according to their convenience in terms of time &amp; comfort.</p>
            <ul className="list-step-center">
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Free home delivery</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Self –pick up delivery facility</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Schedulable delivery facility</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Smart and friendly delivery interaction</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Safe and reliable delivery from faithful shop</p></div></li>
              </ul>
 
          </div>
          <div className="col-lg-6">
            <figure class="figure-img">
              <img src={Asset2} alt="home delivery" />
            </figure>
          </div>
        </div>
        </section>
        
      </div>
    )
  }
}
