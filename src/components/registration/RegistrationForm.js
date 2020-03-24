import React, { Component } from 'react';
import RadioButton from '../registration/RadioButton';

import { MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

export default class RegistrationForm extends Component {
  render() {
    return (
      <div>
          <MDBCard className="okjii-registration">
            <MDBCardBody>
              <form>
                <input
                  type="text"
                  name="name"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  placeholder="Full Name"
                />
                
                <br />
                <div className="textbuttonotp">
                <input
                  type="tel"
                  name="phone"
                  id="defaultFormCardNumber"
                  className="form-control"
                  pattern="[0-9]{10}"
                  placeholder="Mobile Number"
                />
                <MDBBtn className="btn btn-getotp" type="submit">
                    Get OTP
                  </MDBBtn>

                </div>
                <br />
                <div className="textbuttonotp">
                <input
                  type="tel"
                  name="phone"
                  id="defaultFormCardNumber"
                  className="form-control"
                  pattern="[0-9]{10}"
                  placeholder="Four Digit OTP"
                />
                 <MDBBtn className="btn btn-getotp" type="submit">
                    &#160;&#160;&#160;Verify
                  </MDBBtn>

                </div>
                <br />
                <input
                  type="email"
                  name="email"
                  id="defaultFormCardCity"
                  className="form-control"
                  placeholder="E-mail (optional)"
                />
                <br />
                <RadioButton />
                <input
                  type="pincode"
                  name="pincode"
                  id="defaultFormCardCity"
                  className="form-control"
                  placeholder="Pin Code"
                />
                <div className="text-center mt-3">
                  
                  <a href="/user-offer" className="btn form-btn" type="submit">
                    Get Offer
                  </a>
                   
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        
      </div>
    )
  }
}

