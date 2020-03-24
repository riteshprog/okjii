import React, { Component } from "react";
import Trusted from "../common/Trusted";
import AboutOurTeam from "../about/AboutOurTeam";
import OurStory from "../about/OurStory";
import CustomerKirana from "../about/CustomerKirana";
import OurPractice from "../about/OurPractice";

import digitalreliability from "../../img/about/digitalreliability.png";
import homedelovery from "../../img/about/homedelovery.png";
import store from "../../img/about/store.png";
import smartbilling from "../../img/about/smartbilling.png";
import topImg from "../../img/about/topImg.png";
import MobileBackground from "../../img/about/MobileBackground.png";

export default class AboutBody extends Component {
  render() {
    return (
      <div className="about-body">
        <div className="container-fluid okkji-about">
          <div className="row">
            <figure className="okkji-faq-figure okjii-fast-img4">
              <img src={topImg} alt="" className="img-fluid desktop" />
              <img src={MobileBackground} alt="" className="img-fluid mobile" />
            </figure>
            <div class="okjii-digital">
              <h1 className="text-uppercase">
                <b>
                  A digital aggregator of <br />
                  local retail shops
                </b>
              </h1>
              {/* <h1><b>DIGITALIZING RELATIONSHIP<br />UPGRADING SHOPPING<br />CONNECTING CUSTOMER’S NEED</b></h1> */}
            </div>
          </div>
        </div>

        <div className="container-fluid about">
          <div className="container about-let-us-container">
            <h1 className="about-h1">Let us introduce</h1>
            <h2 className="about-h2">
              India&#x2019;s First Digital &#x201C;Retail&#x201D; Hub
            </h2>

            <div className="row okjii-letus text-center">
              <div className="col-sm-6 col-md-3">
                <figure>
                  <img src={store} alt="" className="img-fluid" />
                  <figcaption>
                    <h3>Store on App</h3>
                    <p>Order anytime, anywhere from neighourhood shop</p>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-6 col-md-3">
                <figure>
                  <img src={smartbilling} alt="" className="img-fluid" />
                  <figcaption>
                    <h3>Smart Billing</h3>
                    <p>
                      Transparent, real time &amp; manual mistake free digital
                      billing
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-6 col-md-3">
                <figure>
                  <img src={homedelovery} alt="" className="img-fluid" />
                  <figcaption>
                    <h3>Home Delivery</h3>
                    <p>
                      Door step delivery of app based shopping from local stores
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-6 col-md-3">
                <figure>
                  <img src={digitalreliability} alt="" className="img-fluid" />
                  <figcaption>
                    <h3>Digital reliability</h3>
                    <p>
                      Digital moderation of faith &amp; Believe on street’s
                      store
                    </p>
                  </figcaption>
                </figure>
              </div>
              <p className="okjii-about-para">
                Society is the synonym of change, every component of it needs to
                be updated according to time to remain relevant. OkkJi is a
                digital incarnation of the traditional and trustworthy age-old
                relationship of general customer and neighbourhood mom-pop
                (Kirana) shop as a mobile App. It is the new deﬁnition of
                domestic shopping from reliable, trusted and nearby shops
                without physically going there
              </p>
              <p>
                OkkJi is a step to update and modernize traditional retail shops
                according to change. It isan initiative to update “local” to
                “Global” through a web-based digital presence.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <AboutOurTeam />
          <OurStory />
          <CustomerKirana />
          <OurPractice />
        </div>
        <Trusted />
      </div>
    );
  }
}
