import React, { Component } from "react";
import Daily from "../home/daily";

//import BackgroundMobile from '../../img/home/BackgroundMobile.png';

import Asset6 from "../../img/home/Asset6.png";

import apple from "../../img/home/apple.png";

import google from "../../img/home/google.png";
import HomeVideo from "../../img/home/Home4.mp4";
import Asset7 from "../../img/home/Asset7.png";
import RetailerHome from "../../img/home/RetailerHome-01.png";

import HomeDelivery from "./HomeDelivery";

import KhataBook from "./KhataBook";

import Testimonial from "../common/testimonial/Testimonial";
import CustomerImage from "../../img/home/customericon.png"
import Trusted from "../common/Trusted";
import GetAppLink from "../about/GetAppLink";
import { Helmet } from "react-helmet";

export default class mainbody extends Component {
  render() {
    return (
      <div className="okjii-home">
        <div className="okkjii-home-bg">
          <Helmet>
            <title>Home | Online Kirana Shopping | Near By Shop</title>
          </Helmet>
          <div className="container-fluid okjii-mainbody main-body-desktop">
            <div className="row image-position">

              <div className="col-lg-5 col-md-5 order-lg-12">

                <div className="home-video">
                <video src={HomeVideo} preload="auto"
                   autoplay="true"
                   muted="true"
                   loop="true"
                   ></video>

                </div>
                <div className="col-lg-10 getapplink-ml">
                  <GetAppLink />
                </div>

              </div>
              <div className="col-lg-6 col-md-6 order-lg-1 okjii-explore-left">
                <div className="okjii-explore">
                  <h1>Best way to explore</h1>

                  <h2>all nearby mom-dad retail shops.</h2>
                </div>

                <div className="home-page-order">
                  <img src={RetailerHome} className="img-fluid RetailerHome" alt="" />
                </div>
                <div className="col-lg-8 col-md-9 home-order-details">
                  <div className="total-order-amount row">
                      <div className="col-lg-6 col-md-6">
                        <p>Total Order</p>
                        <p className="order-color">14 Orders</p>
                      </div>
                      <div className="col-lg-6 col-md-6 left-order-border">
                        <p>Order Amount</p>
                        <p className="order-amount-cl">Rs. 765</p>
                      </div>
                  </div>
                  <div className="recent-order-list">
                    <div className="order-list-items row">
                      <img src={CustomerImage} className="img-fluid CustomerImage" alt="" />
                      <p>Sumit Kumar Singh</p>
                      <p className="pright">Order of <span>Rs. 770</span></p>
                    </div>
                    <div className="order-list-items order-mt1 row">
                      <img src={CustomerImage} className="img-fluid CustomerImage" alt="" />
                      <p>Sumit Kumar Singh</p>
                      <p className="pright">Order of <span>Rs. 770</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        {/* Mobile View */}

        <div className="container-fluid okjii-mainbody-mobile main-body-mobile">
          <div className="okjii-explore okjii-explore-left">
            <h1>Best way to explore</h1>

              <h2>all nearby mom-dad retail shops.</h2>
              <div className="home-page-order">
                <img src={RetailerHome} className="img-fluid RetailerHome" alt="" />
              </div>
              <div className="col-lg-8 col-md-9 home-order-details">
                <div className="total-order-amount row">
                    <div className="col-6 col-lg-6 col-md-6">
                      <p>Total Order</p>
                      <p className="order-color">14 Orders</p>
                    </div>
                    <div className="col-6 col-lg-6 col-md-6 left-order-border">
                      <p>Order Amount</p>
                      <p className="order-amount-cl">Rs. 765</p>
                    </div>
                </div>
                <div className="recent-order-list">
                  <div className="order-list-items row">
                    <img src={CustomerImage} className="img-fluid CustomerImage" alt="" />
                    <p>Sumit Kumar Singh</p>
                    <p className="pright">Order of <span>Rs. 770</span></p>
                  </div>
                  <div className="order-list-items order-mt1 row">
                    <img src={CustomerImage} className="img-fluid CustomerImage" alt="" />
                    <p>Sumit Kumar Singh</p>
                    <p className="pright">Order of <span>Rs. 770</span></p>
                  </div>
                </div>
              </div>
            <div className="row offset-lg-1 offset-md-1 mobile-number-mt">
              <GetAppLink />
            </div>
          </div>
        </div>

        <div className="container-fluid okkjii-customer-mt">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12 okjii-best">
              <h1 className="text-center">
                WHY CUSTOMERS <b className="best">LOVE OKKJI</b>
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
