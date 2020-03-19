import React, { Component } from 'react';
import Asset3 from '../../img/home/Asset3.png';
import checked from '../../img/home/checked.png';

export default class KhataBook extends Component {
  render() {
    return (
      <div className="container-fluid  okjii-khatabook1">
        <section className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <h1 className="text-white">OkkJi Khata</h1>
              <p>OkkJi takes care of all hectic stuﬀs like handwritien documents, manual listings of purchase &amp; maintaining account transactions by facilitating digitally.</p>

              <ul className="list-unstyle list-color">
                <li> 
                <img src={checked} width="16" alt="" /> Diﬀerent methods of payment</li>
                <li><img src={checked} width="16" alt="" /> Digital creation of purchase list</li>
                <li><img src={checked} width="16" alt="" /> Easy, transparent &amp; handy billing</li>
                <li><img src={checked} width="16" alt="" /> Smooth purchase documentation</li>
                <li><img src={checked} width="16" alt="" /> Daily/weekly/monthly/ purchase history</li>
              </ul>
    


            </div>
            <div className="col-lg-4 col-12">
            <figure className="okjii-figure-imgkhata">
              <img src={Asset3} className="img-fluid mt-5" alt=""/>

            </figure>
           
            </div>
            <div className="col-lg-4 col-12">
              <h1 className="text-white">Udhaar Pay</h1>
              <p>OkkJi is crafting the integral &amp; old-age living shopping heritage that strongly knits local social bonds through brand new kalevar.</p>
              <ul className="list-unstyle list-color">
                <li> 
                <img src={checked} width="16" alt="" /> Buy, and pay after some time</li>
                <li><img src={checked} width="16" alt="" /> Monthly purchase settlement</li>
                <li><img src={checked} width="16" alt="" /> Weekly purchase settlement</li>
                <li><img src={checked} width="16" alt="" /> Fortnight purchase settlement</li>
                <li><img src={checked} width="16" alt="" /> Personal &amp; punctuation based credit</li>
              </ul>



            </div>
          </div>
        </section>
      </div>
    )
  }
}
