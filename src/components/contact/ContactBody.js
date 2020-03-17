import React, { Component } from 'react';
import ContactUsForm from '../contact/ContactUsForm';
import Contactusimage from '../../img/contact/Contactusimage.png';
import Trusted from '../common/Trusted';
import ContactBestWay from '../contact/ContactBestWay';


export default class ContactBody extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid  OkjiiRetailerBody">
      <div className="row">
         <div className="col-md-8 retailer-figure-img2 retailer order-md-2 ">
            <img src={Contactusimage} width="100%" className="img-fluid"  alt="" />
         </div>
         <div className="col-md-4 order-md-1  order-sm-1  mt-5 okjii-retaler">
            <h1>Contact Us</h1>
            <ContactUsForm />
           </div>
      </div>
   </div>
   <div className="container-fluid okjii-cardbody">
   <ContactBestWay />
   <Trusted />
   
   </div>
      </div>
    )
  }
}
