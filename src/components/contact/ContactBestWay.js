import React, { Component } from 'react';
import { MDBCard, MDBCardText } from "mdbreact";
import AccountHelpOur from '../faq/AccountHelpOur';

import whatsapp from '../../img/contact/whatsapp.png';
import call from '../../img/contact/call.png';
import chat from '../../img/contact/chat.png';
import adress from '../../img/contact/adress.png';
import contact from '../../img/contact/contact.png';
import mail from '../../img/contact/mail.png';




export default class ContactBestWay extends Component {
  render() {
    return (
      <div className="container okjii-contactus fdc">
        <h1><b className="sell">Best way to Connect</b> with OkkJI</h1>
        <div className="row okjii-whatsapp">
          <div className="col-sm-12 col-md-4">
          <MDBCard className="card-body  faq-card">
    <MDBCardText><img src={whatsapp} alt="" width="15%" height="15%" /> Whatsapp
    </MDBCardText>
    
  </MDBCard>
          </div>
          <div className="col-sm-12 col-md-4">
          <MDBCard className="card-body  faq-card">
    <MDBCardText><img src={call} alt="" width="11%" height="8%" /> 1800 1212 2121
    </MDBCardText>
    
  </MDBCard>
          </div>

          <div className="col-sm-12 col-md-4">
          <MDBCard className="card-body  faq-card">
    <MDBCardText><img src={chat} alt="" width="17%" height="15%" /> Live Chat

    </MDBCardText>
    
  </MDBCard>
          </div>

        </div>
        <div className="row card-address">
        <div className="col-sm-12 col-md-4">
        <figure>
          <img src={adress} alt="" className="img-fluid" />
          <h3>ADDRESS </h3>
          <p>MM Tower, Udyog Vihar,<br />Phase IV , Gurugram, 122004</p>
        </figure>
        </div>
        <div className="col-sm-12 col-md-4">
        <figure>
          <img src={contact} alt="" className="img-fluid" />
          <h3>CONTACT </h3>
          <p>+91-6202091970<br />+91-6202094838</p>
        </figure>
        </div>
        <div className="col-sm-12 col-md-4">
        <figure>
          <img src={mail} alt="" className="img-fluid" />
          <h3>MAIL &amp; WEBSITE </h3>
          <p>Info@okkji.com<br />www.okkji.com</p>
        </figure>
        </div>
        </div>
        <AccountHelpOur />
  

      </div>
    )
  }
}
