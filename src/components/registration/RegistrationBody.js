import React, { Component } from 'react';
import PreRegistrationDesktop from '../../img/registration/PreRegistrationDesktop.png';
import PreRegistrationMobile from '../../img/registration/PreRegistrationDesktop.png';


import RegistrationForm from '../registration/RegistrationForm';
import HowtoApply from '../registration/HowtoApply';
import Trusted from '../common/Trusted';



export default class RegistrationBody extends Component {
  render() {
    return (
      <div className="pre-regbody">
        <div className="container-fluid okjii-regbody">
        <div className="row okjii-reg pb-4">
                <img src={PreRegistrationDesktop} alt="" className="img-fluid desktop" />
                <img src={PreRegistrationMobile} alt="" className="img-fluid mobile" />
              <h1 className="okjii-reg-h1">आया किराना संग <br /><span className="pre-okjii">OKK<span class="pre-okjii-black">JI</span>,</span><br/>
शॉपिंग होगा <br />और भी <br />ईज़ी।</h1>
          </div>
          <h1 className="text-center pre-reg-h1">PRE - REGISTRATION FOR CUSTOMER</h1>
            <p className="text-center">OKKJI Offer You Pre - Registration Benifits for Upcoming Kirana Shopping</p>
            <div className="form-table">
          <RegistrationForm />

          </div>
          <Trusted />
        </div>
        {/* <HowtoApply /> */}

      </div>
    )
  }
}
