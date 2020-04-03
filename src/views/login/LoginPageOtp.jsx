import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import logowhite from "../../img/login/logowhite.png";
import okkjibigfavicon from "../../img/login/okkji-big-favicon.png";
import { Link } from 'react-router-dom';

export default class LoginPage extends Component {
  render() {
    return (
      <>
        <div className="content login-page login-page-information">

          <Row className="">
            <Col className="" md="6">
            <img src={logowhite} alt="" width="70" height="70"  className="img-fluid mt-3" />

              {/* <img src={Asset6} alt="" className="img-fluid" /> */}
            </Col>
            <Col md="6" className="text-center ">
              <div className="login-information">
            <img src={okkjibigfavicon} width="50" height="50" alt="" />
            <h1>Enter OTP</h1>
            <div class="otp-input">
              <div data-test="input-group" class="input-group input-group-lg">
                <input data-test="input" type="password" class="form-control" placeholder="" aria-disabled="false" value="" />
                <input data-test="input" type="password" class="form-control" placeholder="" aria-disabled="false" value="" />
                <input data-test="input" type="password" class="form-control" placeholder="" aria-disabled="false" value="" />
                <input data-test="input" type="password" class="form-control" placeholder="" aria-disabled="false" value="" />
                </div>
                <Link to="/" data-test="button" type="button" class="btn-success btn Ripple-parent btn-subscribe  text-center">Verify Now</Link>
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
