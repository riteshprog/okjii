import React, { Component } from "react";
import Daily from "../home/daily";

//import BackgroundMobile from '../../img/home/BackgroundMobile.png';

import Asset6 from "../../img/home/Asset6.png";

import apple from "../../img/home/apple.png";

import google from "../../img/home/google.png";

import Asset7 from "../../img/home/Asset7.png";

import HomeDelivery from "./HomeDelivery";

import KhataBook from "./KhataBook";

import Testimonial from "../common/testimonial/Testimonial";

import Trusted from "../common/Trusted";
import GetAppLink from "../about/GetAppLink";
import { Helmet } from "react-helmet";

export default class mainbody extends Component {
  render() {
    return (
      <div className="okjii-home">
        <Helmet>
          <title>Home | Online Kirana Shopping | Near By Shop</title>
        </Helmet>
        <div className="container-fluid okjii-mainbody main-body-desktop">
          <div className="row image-position">
            <div className="col-lg-7 col-md-7 order-lg-12 image-row">
              <img src={Asset6} className="img-fluid Asset6" alt="" />
            </div>
            <div className="col-lg-5 col-md-5 order-lg-1 okjii-explore okjii-explore-left">
              <h1>EASIEST WAY TO ORDER</h1>

              <h2>from your local kirana shops.</h2>

              <p>
                A digital hub of all neighbourhood retail shops with new age
                look and a simple setup.
              </p>
              <div className="row">
                <GetAppLink />
              </div>

              <div className="okjii-install-image">
                <div className="row ">
                  <div className="col-sm-12  okjii-install">
                    <p className="install-now text-center ">INSTALL NOW</p>

                    <p className="text-center">
                      <img src={Asset7} alt="" />
                    </p>
                  </div>
                </div>

                <div className="row  text-center">
                  <div className="col-sm-6">
                    <img className="img-fluid apple" src={apple} alt="" />
                  </div>
                  <div className="col-sm-6">
                    <img className="img-fluid google" src={google} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile View */}

        <div className="container-fluid okjii-mainbody-mobile main-body-mobile">
          <div className="row okjii-explore okjii-explore-left">
            <h1>EASIEST WAY TO ORDER</h1>

            <h2>from your local kirana shops.</h2>

            <p>
              A digital hub of all neighbourhood retail shops with new age look
              and a simple setup.
            </p>
            <div className="row offset-lg-1 offset-md-1">
              <GetAppLink />
            </div>

            <div className="mobile-google text-center">
              <div className="row text-center">
                <div className="col-sm-6 col-md-6">
                  {/* <img className="img-fluid apple"  src={apple} alt=""/> */}
                </div>
                <div className="col-sm-6 col-md-6">
                  <img className="img-fluid google" src={google} alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12  okjii-install">
                  <p className="install-now text-center">
                    <img src={Asset7} alt="" />
                  </p>
                  <p className=" text-center ">INSTALL NOW</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12 okjii-best">
              <h1 className="text-center">
                WHY CUSTOMERS <b className="best">LOVE OKKJI?</b>
              </h1>
            </div>
          </div>
        </div>

        <Daily />

        <HomeDelivery />

        <KhataBook />

        <Testimonial />

        <Trusted />
        <owlcarosoul />
      </div>
    );
  }
}
