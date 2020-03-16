import React, { Component } from 'react'
import {MDBIcon} from "mdbreact";
import createshop2 from '../../img/retailer/createshop2.png';

export default class HomeDelivery extends Component {
  render() {
    return (
<div className="container-fluid  okjii-create-store okjii-create-store-background">
        <section className="container">
          <div className="row">
          <div className="col-md-12 col-lg-6">
            <figure className="okjii-create-store-img">
              <img src={createshop2} alt="Create Your Shop" className="img-fluid img2" />
            </figure>
          </div>


          <div className="col-md-12  col-lg-6">
            <h1><b className="create">Create</b> Your Shop</h1>
            <p>Digital presence is the inevitability of today’s word whether it is business or individuality. Association with OkkJi not only associates you with the huge network of customers and shops but provides digital appearance also.</p>
            <ul className="list-unstyle">
                <li> 
                <MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Enlist all items that you used to sell</li>
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Create an account to partner with us</li>
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Showcase your sellable items digitally</li>
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Increase sell &amp; customer base in your location</li>
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Innovative ideas &amp; rewards to increase sell with huge network</li>
              </ul>
    

 
          </div>
          </div>
        </section>
      </div>




    )
  }
}
