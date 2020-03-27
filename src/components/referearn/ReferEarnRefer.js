
import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
export default class ReferEarnRefer extends Component {
  render() {
    return (
      <div className="container-fluid refer-earn-refer">
        <h2>Give us your details</h2>
        <div className="refer-earn-refer-form">
      <form>
        <div>
          <input placeholder="Your Name*" type="name" name="name" /><br />
          <input placeholder="Mobile Number*" type="tel" name="mnumber" /><br />
          <input placeholder="E-mail*" type="email" name="email" /><br />
          <h3>Referral details 1</h3>
          <input placeholder="Name*" type="name" name="name" /><br />
          <input placeholder="Mobile Number*" type="tel" name="mnumber" /><br />
          <h3>Referral details 2</h3>          
          <input placeholder="Name" type="name" name="name" /><br />
          <input placeholder="Mobile Number" type="tel" name="mnumber" /><br />
        </div>
        <div className="text-center">
          <MDBBtn>Submit</MDBBtn>
        </div>
      </form>
      </div>
      </div>
    )
  }
}
