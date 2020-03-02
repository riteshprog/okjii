import React, { Component } from 'react';
import retailer from '../img/retailer/Retailer.png';
import apple from '../img/home/apple.png';
import google from '../img/home/google.png';
import Testimonial from './Testimonial';
import Trusted from './Trusted';
import ContactForm from './ContactForm';
import CreateStore from './CreateStore';
import SellOnline from './SellOnline';
import WhyweShop from './WhyweShop';


export default class OkjiiRetailerBody extends Component {
    render() {
        return (
            
<div className="container-fluid">
        <div className="row">
        <div className="col-md-8 figure-img2 order-md-2 ">
            
        <img src={retailer} width="100%" className="img-fluid"  alt="" />
          </div>

          <div className="col-md-4 order-md-1  order-sm-1  mt-5 w-100 okjii-retaler">
            <h1><b>Partner</b> with <b><span className="text-green">Okk</span>Ji</b></h1>
            <ContactForm />


<div className="row mt-3">
  <div className="col-lg-6 col-md-6 ">
  <figure className="okkjii-figure-apple">
              <img src={apple} className="img-fluid apple" alt=""/>
      </figure>
  </div>
  <div className="col-lg-6 col-md-6">
  <figure className="okkjii-figure-google">
              <img className="img-fluid google" src={google} alt=""/>
  </figure>
  </div>
</div>
          </div>
          
                  </div>





        <div className="row">
          <div className="col-lg-12 okjii-best">
            <h1 className="text-center my-5"><b>New way to</b><br />connect with customers</h1>
          </div>
        </div>

        <CreateStore />
        <SellOnline />
        <WhyweShop />

        <Testimonial />
        <Trusted />
              </div>
            
        )
    }
}
