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
            <h1 className="mb-4 text-primary mt-4"><b>Home</b> Delivery</h1>
            <p>OkkJi limits consumer’s effort in all possible manner whether it is their physical presence or delivery of their shopping at doorstep according to their convenience in terms of time &amp; comfort.</p>
            <ul className="list-unstyle">
                <li> 
                <p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Free home delivery</p></li>
                <li><p> <MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Self –pick up delivery facility</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Schedulable delivery facility</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Smart and friendly delivery interaction</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Safe and reliable delivery from faithful shop</p></li>
              </ul>
    

 
          </div>
          <div className="col-lg-6">
            <figure class="home-delivery-figure-img">
              <img src={Asset2} alt="home delivery" />
            </figure>
          </div>
        </div>
        </section>
        
      </div>
    )
  }
}
