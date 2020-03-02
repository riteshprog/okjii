import React, { Component } from 'react'
import {MDBIcon} from "mdbreact";
import sellonline from '../img/retailer/sellonline.png';

export default class SellOnline extends Component {
  render() {
    return (
      <div className="container-fluid my-2 bg-purple">
        <section className="okjii-create-store container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h1 className="my-5"><b>Sell</b> Online
</h1>
            <p>OkkJi app is the entrance of your shop for a customer. Every notiﬁcation is just like customer’s knock to order. Accept order digitally and give additional thrust to your business.</p>
            <ul className="list-unstyle">
                <li> 
                <p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Facilitate “UDHAR” digitally  </p></li>
                <li><p> <MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Get notiﬁcation of order</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Check availability, accept &amp; pack the order</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Chat with the customer in case of any glitch</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Delivery at home &amp; get instant payment and review</p></li>
              </ul>
    

 
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <figure className="home-delivery-figure-img my-5">
              <img src={sellonline} alt="Create Your Shop" className="img-fluid sellonline" />
            </figure>
          </div>

        </div>
        </section>
        
      </div>
    )
  }
}




