import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import logowhite from "../../img/login/logowhite.png";
import okkjibigfavicon from "../../img/login/okkji-big-favicon.png";
import { Link } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';

export default class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      mobileNumber: ''
    }
  }
  
  handleOnChage = (e, key) => this.setState({mobileNumber: e.target.value});
  handleSendOtp = () => {
    let { mobileNumber } = this.state;
    console.log(`mobileNumber`, mobileNumber)
    if(!mobileNumber || (mobileNumber.length != 10)){
      message.error(`Invalid Mobile Number`);
    }else {
      axios.post(process.env.REACT_APP_API_URL + '/user/login-otp', {
        mobileNumber,
        type: 3
      }).then(({data})=> {
        let response = data.result;
        if(response.type != 'success'){
          message.error(response.message);
        }else{
          window.location.href = 'verify-otp?mobileNumber=' + mobileNumber;
        }
      }).catch(err=> {
        message.error(`Something Went Wrong / user not found`)
      })
    }
  }

  render() {
    return (
      <>
        <div className="content login-page login-page-information">
          <Row className="">
            <Col className="" md="6">
            <img src={logowhite} width="70" height="70"  className="img-fluid mt-3" />

              {/* <img src={Asset6} alt="" className="img-fluid" /> */}
            </Col>
            <Col md="6" className="text-center ">
              <div className="login-information">
            <img src={okkjibigfavicon} width="50" height="50" alt="" />
            <h1>Sign in to OkkJi</h1>
            <div class="input-form offer-input">
              <div data-test="input-group" class="input-group input-group-lg">
                <div class="input-group-prepend">
                  <span class="input-group-text">+91</span>
                </div>
                <input onChange={(e)=>this.handleOnChage(e, 'mobileNumber')} data-test="input" type="number" class="form-control" placeholder="Mobile Number" aria-disabled="false" value={this.state.mobileNumber} />
                </div>
                  <button className='btn-success btn Ripple-parent btn-subscribe  text-center' onClick={this.handleSendOtp}>Send OTP</button>
                {/*<Link data-test="button" type="button" to={'/verify-otp?mobileNumber=' + this.state.mobileNumber } class='btn-success btn Ripple-parent btn-subscribe  text-center'>LOGIN</Link>*/}
                </div>
                <p className="footer-text">If You have any login issue please, <Link to="/contact">Contact Us</Link></p>
                </div>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}
