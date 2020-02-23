import React, { Component } from 'react'
import Asset3 from '../img/home/Asset3.png';
import {MDBIcon} from "mdbreact";

export default class KhataBook extends Component {
  render() {
    return (
      <div class="container-fluid  okjii-khatabook1">
        <section className="">
          <div className="row">
            <div className="col-lg-4">
              <h1 className="text-white">Khata Book</h1>
              <p>OkkJi takes care of all hectic stuﬀs like handwritien documents, manual listings of purchase &amp; maintaining account transactions by facilitating digital KHATA BOOK.</p>
              <ul className="list-step-center">
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Diﬀerent methods of payment</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Digital creation of purchase list</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Easy, transparent &amp; handy billing</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Smooth purchase documentation</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Daily/weekly/monthly/ purchase history</p></div></li>
              </ul>

            </div>
            <div className="col-lg-4">
            <figure class="okjii-figure-imgkhata">
              <img src={Asset3} alt=""/>
            </figure>
           
            </div>
            <div className="col-lg-4">
              <h1 className="text-white">Credit Pay</h1>
              <p>OkkJi is cratiing the integral &amp; old-age living shopping heritage that strongly knit local social bond in every crest &amp; through in brand new kalevar.</p>
              <ul className="list-step-center">
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Buy, and pay after some time</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Monthly purchase settlement</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Weekly purchase settlement</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Fortnight purchase settlement</p></div></li>
                <li><div className="step-title"><MDBIcon icon="check-square" /></div> 
                <div class="step-info"><p>Personal &amp; punctuation based credit</p></div></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
