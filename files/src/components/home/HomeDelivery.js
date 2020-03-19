import React, { Component } from 'react'
import {MDBIcon} from "mdbreact";
import Asset2 from '../../img/home/Asset2.png';

export default class HomeDelivery extends Component {
  render() {
    return (
      <div className="container-fluid">
        <section className="container okjii-homedelivery">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-3 mt-4"><b className="home">Home</b> Delivery</h1>
            <p>OkkJi brings ease to your life by reducing the need of your physical presence and delivering at your doorstep.</p>
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
            <figure className="home-delivery-figure-img ">
              <img src={Asset2} alt="home delivery" className="img-fluid" width="85%" />
            </figure>
          </div>
        </div>
        </section>
        
      </div>
    )
  }
}
