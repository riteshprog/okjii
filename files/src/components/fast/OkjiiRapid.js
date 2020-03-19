import React, { Component } from 'react'
import {MDBIcon} from "mdbreact";
import OkkJiFast01 from '../../img/okjiifast/OkkJiFast01.png';

export default class OkjiiRapid extends Component {
  render() {
    return (
      <div className="container-fluid okjii-sell-online">
        <section className="container okjii-rapid">
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
            <figure className="sell-online-figure-img">
              <img src={OkkJiFast01} alt="Create Your Shop" className="img-fluid sellonline" />
            </figure>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h1><b className="sell">Rapid</b> Channel to deliver the best
</h1>
            <p>Grocery from shop to kitchen is as quick as hot food form frying pan to your plate. Okkji commit the fastest mode of home delivery of grocery from your native kirana store.</p>
            <ul className="list-unstyle">
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Rapid delivery at door step</li>
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> An expressway between shop and customer</li>
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Boon for shops that cannot effort home delivery</li>
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Order anytime, anywhere from nearby store</li>
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Real time tracking of orders with additional COD facility</li>
              </ul>
    

 
          </div>

        </div>
        </section>
        
      </div>
    )
  }
}







