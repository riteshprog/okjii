import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import { message } from 'antd'
import axios from 'axios';
import CookieHandler from '../../utils/cookieHandler.js';

import './login.css';
import background from "../../img/login/background.jpg";

import okkjibigfavicon from "../../img/login/okkji-big-favicon.png";
import logowhite from "../../img/login/logowhite.png";
import MobileBackground from "../../img/login/MobileBackground.jpg";

export default class LoginPageOtp extends Component {
  constructor(props){
    super(props);
    this.state = {
      mobileNumber: '',
      otp: ''
    }
  }
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    let mobileNumber = urlParams.get('mobileNumber');
    this.setState({mobileNumber});
  }

  handleOnChangeOtp = (enteredOTP) => {
    let { otp } = this.state;
    this.setState({otp: enteredOTP});
  }

  handleVerify = (e) => {
    e.preventDefault();
    let { mobileNumber, otp } = this.state;
    axios.post(process.env.REACT_APP_API_URL + '/user/verify-otp', {
      mobileNumber,
      otp,
      type: 2
    }).then(({data})=> {
      if(!data.status){
        message.error(data.message);
      }else{
        let { user, token } = data.data
        message.success(data.message);
        CookieHandler.createCookie('userData', JSON.stringify(user));
        CookieHandler.createCookie('token', JSON.stringify(token));
        
        this.props.setUserData(user);
      }
    }).catch(err=> {
      message.error('Something went wrong');
    })
  }

  render() {
    return (
      <>
        <div className="content login-page login-page-information">
        <div className="logo-white-login ">
          <div className=" login-page-information">
            <figure className="">
            <img src={background} alt="" className="img-fluid desktop-login" />
            <img src={MobileBackground} alt="" className="img-fluid mobile-login" />
            
            
            </figure>
            <div class="login-page-right">
            <div className="login-information">
            <img src={logowhite}  className="img-fluid  Logowhite-bg" />
              <img src={okkjibigfavicon} width="50" height="50" alt="" />
              <h1>Enter OTP</h1>
              <div>
                <div className='df jcc input-otp'>
                  <OtpInput
                    onChange={otp => this.handleOnChangeOtp(otp)}
                    numInputs={6}
                    value={this.state.otp}
                    separator={<span>-</span>}
                  />
                </div>
              
                  <button onClick={this.handleVerify} className='btn-success btn Ripple-parent btn-subscribe  text-center'>Verify Now</button>
                </div>
                  <p className="footer-text">If You have any login issue please, <Link to="/contact">Contact Us</Link></p>
              </div>

            </div>
            
          </div>
        </div>

        </div>
      </>
    )
  }
}
