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
<div>            
<div className="container-fluid  OkjiiRetailerBody">

  
        <div className="row">
        <div className="col-md-8 retailer-figure-img2 retailer order-md-2 ">
            
        <img src={retailer} width="100%" className="img-fluid"  alt="" />
          </div>

          <div className="col-md-4 order-md-1  order-sm-1  mt-5 okjii-retaler">
            <h1>Partner <span className="text-normal">with</span> <span className="text-green">Okk</span>Ji</h1>
            <ContactForm />


            <div className="row text-center mt-5">
                        <div className="col-sm-6">
                           <img className="img-fluid apple"  src={apple} alt=""/>
                        </div>
                         <div className="col-sm-6">
                                    <img className="img-fluid google" src={google} alt=""/>
                                    </div>

                      </div>
          </div>
          
                  </div>

                  </div>
                  <div className="container-fluid">
            <h1 className="text-center my-5"><b>New way to</b><br />connect with customers</h1>
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
