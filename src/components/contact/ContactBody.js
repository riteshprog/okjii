import React, { Component } from 'react';
import ContactUsForm from '../contact/ContactUsForm';
import Contactusimage from '../../img/contact/Contactusimage.png';
import Trusted from '../common/Trusted';
import ContactBestWay from '../contact/ContactBestWay';


export default class ContactBody extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid okkjiicontactus ">
      <div className="row okjii-explore okjii-retaler">
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
