import React, { Component } from 'react'
import {MDBIcon} from "mdbreact";
import Asset2 from '../img/home/Asset2.png';

export default class HomeDelivery extends Component {
  render() {
    return (
      <div className="container-fluid">
        <section className="container okjii-homedelivery">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-4 mt-4"><b className="home">Home</b> Delivery</h1>
            <p>OkkJi limits consumer’s effort in all possible manner whether it is their physical presence or delivery of their shopping at doorstep according to their convenience in terms of time &amp; comfort.</p>
            <ul className="list-unstyle">
                <li> 
                <MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Free home delivery</li>
                <li> <MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Self –pick up delivery facility</li>
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Schedulable delivery facility</li>
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Smart and friendly delivery interaction</li>
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Safe and reliable delivery from faithful shop</li>
              </ul>
    

 
          </div>
          <div className="col-lg-6 col-md-4 col-12">
            <figure className="home-delivery-figure-img my-5">
              <img src={Asset2} alt="home delivery" className="img-fluid" />
            </figure>
          </div>
        </div>
        </section>
        
      </div>
    )
  }
}
