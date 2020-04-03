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
            <h1>Sign in to OkkJi</h1>
            <div class="input-form offer-input">
              <div data-test="input-group" class="input-group input-group-lg">
                <div class="input-group-prepend">
                  <span class="input-group-text">+91</span>
                </div>
                <input data-test="input" type="number" class="form-control" placeholder="Mobile Number" aria-disabled="false" value="" />
                </div>
                <Link data-test="button" type="button" to="login/loginverify/:loginId" class="btn-success btn Ripple-parent btn-subscribe  text-center">LOGIN</Link>
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
