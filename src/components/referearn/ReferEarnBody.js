import React, { Component } from 'react';
import Referandearn from '../../img/referearn/Referandearn.png';
import Homebackground from '../../img/referearn/Home-background.png';
import Trusted from "../common/Trusted";
import ReferEarnForm from '../referearn/ReferEarnForm';
import ReferTermCondition from '../referearn/ReferTermCondition';


import GetAppLink from "../about/GetAppLink";
import apple from "../../img/home/apple.png";

import google from "../../img/home/google.png";

import Asset7 from "../../img/home/Asset7.png";

export default class ReferEarnBody extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid refer-earn">
          <div className="row">
          <img src={Homebackground} alt="" className="img-fluid" />
          <div className="row refer-earn-content">
            <div className="col-md-5 refer-earn-con">
              <h1><b>Best way to Help</b> your neighborhood</h1>
              <p>Help your neighborhood shop owners &amp; service providers in accepting payments through Paytm. Share their details with us and our team will train them to go digital in simple steps.</p>
              <div className="refer-earn-apple">
              <p className="install-now text-center ">INSTALL NOW</p>

<p className="text-center">
  <img src={Asset7} alt="" className="Asset7-install" />
</p>

              <div className="row  text-center">
                  <div className="col-md-6 ">
                    <img className="img-fluid apple" src={apple} alt="" />
                  </div>
                  <div className="col-md-6">
                    <img className="img-fluid google" src={google} alt="" />
                  </div>
                
                </div>
                <div className="refer-earn-get-applink">
                <GetAppLink />
                </div>
                </div>
              </div>
            <div className="col-md-7 ">
              <figure>
                <img src={Referandearn} alt="" className="img-fluid Referandearn" />
              </figure>
            </div>
        </div>
        </div>
        </div>
      <ReferEarnForm />
      <ReferTermCondition />


        <Trusted />
      </div>
    )
  }
}
