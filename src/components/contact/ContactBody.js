import React, { Component } from 'react';
import ContactUsForm from '../contact/ContactUsForm';
//import Contactusimage from '../../img/contact/Contactusimage.png';
import Trusted from '../common/Trusted';
import ContactBestWay from '../contact/ContactBestWay';


export default class ContactBody extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid okkjiicontactus okkjiicontactus-desktop ">
      <div className="row ">
         <div className="col-md-4 ">
            <h1>Contact Us</h1>
            <ContactUsForm />
            
           </div>
      </div>
   </div>

   <div className="container-fluid okkjiicontactus-mobile ">
      <div className="row  okkjiicontactus-padding okjii-explore okjii-retaler">
         <div className="col-md-4 ">
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
