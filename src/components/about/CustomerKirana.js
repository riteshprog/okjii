import React, { Component } from 'react'
import img1 from '../../img/retailer/img1.jpg';
import img2 from '../../img/retailer/img2.jpg';

export default class CustomerKirana extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid okjii-customerkirana">
          <div className="container">
          <div className="row">
  <div className="col-sm-12 col-md-12 col-lg-12">
  <h1><b className="sell">How OkkJi</b> brings customer and Kirana together</h1>
</div>
</div>

<div className="row">
  <div className="col-md-6 col-lg-6">
    <figure className="figure-whayweshop">
      <img src={img1} alt="" className="img-fluid" />
    </figure>
  </div>
  
  <div className="col-md-6 col-lg-6">
    <figure className="figure-whayweshop">
      <img src={img2} alt="" className="img-fluid" />
    </figure>
  </div>
</div>

</div>

        </div>
        
      </div>
    )
  }
}
