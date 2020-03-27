import React, { Component } from 'react';
import { MDBIcon } from "mdbreact";


export default class ReferEarnHow extends Component {
  render() {
    return (
      <div className="container-fluid refer-earn-how-to">
        <h1>How it works</h1>
        <ul className="list-unstyle">
                <li> 
                <MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Refer your friends through your customized reﬀeral code from the Okkji Mobile App</li>
                <li> <MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> In the Proﬁle section, go to the 'Refer &amp; Earn' section and share your unique referral code with your friends on Whatsapp, Facebook and other social mediums.</li>
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> When you refer a friend and they join Okkji, your friend gets an instant credited into his/her account and you’ll receive ₹50 goCash+ when your friends sign-up &amp; ₹100 goCash+ into your account when they completes their ﬁrst travel of transaction value more than ₹500</li>
              </ul>

      </div>
    )
  }
}
