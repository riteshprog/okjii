import React, { Component } from 'react';
import { MDBCard, MDBCardText } from "mdbreact";

import whatsapp from '../../img/contact/whatsapp.png';
import call from '../../img/contact/call.png';
import chat from '../../img/contact/chat.png';


export default class ReferEarnWhat extends Component {
  render() {
    return (
      <div className="container-fluid">

<div className="row okjii-referearn">
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
        
        
      </div>
    )
  }
}
