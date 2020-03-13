import React, { Component } from 'react';

import Daily from '../components/daily';

import Asset6 from '../img/home/Asset6.png';

import apple from '../img/home/apple.png';

import google from '../img/home/google.png';

import Asset7 from '../img/home/Asset7.png';

import HomeDelivery from './HomeDelivery';

import KhataBook from './KhataBook';

import Testimonial from './Testimonial';

import Trusted from './Trusted'

import InputPageButton from './InputPageButton';

        export default class mainbody extends Component {

          render() {

            return (
<div>
              <div className="container-fluid okjii-mainbody">

                <div className="row image-position">
                <div className="col-md-12 col-sm-12 col-lg-7 width-65 figure-img2 order-md-2 okjii-explore-right">

<img src={Asset6} className="img-fluid"  alt="" />

    

</div>




                  <div className="col-md-12 col-sm-12 col-lg-5 width-35 order-md-1 mt-5 okjii-explore okjii-explore-left">

                    <h1>Best Way to Explore</h1>

                    <h2>all nearby mom-dad retail shops.</h2>

                    <p>A revolutionn in grocery shopping where a customer can buy from their old reliable “Kirana” store without physically going there. A digital hub of all local, neighbourhood retail shop with era driven look and mechanism.

                    </p>
                      <div className="okjii-install-image">
                      <div className="row mt-4">

                        <div className="col-sm-12  okjii-install">

                          <p className="install-now text-center ">INSTALL NOW</p>

                          <p className="text-center"><img src={Asset7} alt="" /></p>



                        </div>

                        </div>

                      <div className="row text-center">
                        <div className="col-sm-6">
                           <img className="img-fluid apple"  src={apple} alt=""/>
                        </div>
                         <div className="col-sm-6">
                                    <img className="img-fluid google" src={google} alt=""/>
                                    </div>

                      </div>
{/*<InputPageButton />*/}

                    </div>
                    </div>

                    </div>











                <div className="row">

                  <div className="col-lg-12 okjii-best">

                    <h1 className="text-center">Why Customer <b className="best">Loves OkkJi</b></h1>

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

            )

          }

        }
