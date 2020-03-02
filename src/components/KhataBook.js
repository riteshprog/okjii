import React, { Component } from 'react'
import Asset3 from '../img/home/Asset3.png';
import {MDBIcon} from "mdbreact";

export default class KhataBook extends Component {
  render() {
    return (
      <div className="container-fluid  okjii-khatabook1">
        <section className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <h1 className="text-white">Khata Book</h1>
              <p>OkkJi takes care of all hectic stuﬀs like handwritien documents, manual listings of purchase &amp; maintaining account transactions by facilitating digital KHATA BOOK.</p>

              <ul className="list-unstyle">
                <li> 
                <p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Diﬀerent methods of payment</p></li>
                <li><p> <MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Digital creation of purchase list</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Easy, transparent &amp; handy billing</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Smooth purchase documentation</p></li>
                <li><p className="no-break"><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Daily/weekly/monthly/ purchase history</p></li>
              </ul>
    


            </div>
            <div className="col-lg-4 col-12">
            <figure className="okjii-figure-imgkhata">
              <img src={Asset3} className="img-fluid py-5" alt=""/>
            </figure>
           
            </div>
            <div className="col-lg-4 col-12">
              <h1 className="text-white">Credit Pay</h1>
              <p>OkkJi is cratiing the integral &amp; old-age living shopping heritage that strongly knit local social bond in every crest &amp; through in brand new kalevar.</p>
              <ul className="list-unstyle">
                <li> 
                <p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Buy, and pay after some time</p></li>
                <li><p> <MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Monthly purchase settlement</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Weekly purchase settlement</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Fortnight purchase settlement</p></li>
                <li><p className="no-break"><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Personal &amp; punctuation based credit</p></li>
              </ul>



            </div>
          </div>
        </section>
      </div>
    )
  }
}
