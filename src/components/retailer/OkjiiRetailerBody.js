import React, { Component } from 'react';
//import retailer from '../../img/retailer/Retailer.png';
import apple from '../../img/home/apple.png';
import google from '../../img/home/google.png';
import Testimonial from '../common/testimonial/Testimonial';
import Trusted from '../common/Trusted';
import ContactForm from '../retailer/ContactForm';
import CreateStore from '../retailer/CreateStore';
import SellOnline from '../retailer/SellOnline';
import WhyweShop from '../retailer/WhyweShop';
export default class OkjiiRetailerBody extends Component {
render() {
return (

<div className="okjii-retailer">

   <div className="container-fluid  OkjiiRetailerBody">
      
   
<div className="row">
         <div className="col-md-5  okjii-explore  okjii-retaler okjii-explore-left">
            {/* <h1>Partner <span className="text-normal">with</span> <span className="text-green">Okk</span>Ji</h1> */}
            <h1 className="text-uppercase "> A great opportunity for retailers to build long lasting relationships with their customers</h1>
            <p className="">A digital hub of all local, neighbourhood retail shop with era driven look and mechanism.</p>
            <ContactForm />
            <div className="container">
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

   </div>

   <div className="container-fluid  OkjiiRetailerBody-mobile">
   <div className="row row-addding">

</div>
      <div className="row">
         <div className="col-md-12">
            {/* <h1>Partner <span className="text-normal">with</span> <span className="text-green">Okk</span>Ji</h1> */}
            <h1 className="text-uppercase">A great opportunity for retailers to build long lasting relationships with their customers</h1>
            <p>A digital hub of all local, neighbourhood retail shop with era driven look and mechanism.</p>
            <ContactForm />
            <div className="container">
               <div className="row text-center mt-5">
                  <div className="col-sm-6">
                     {/* <img className="img-fluid apple"  src={apple} alt=""/> */}
                  </div>
                  <div className="col-sm-6">
                     <img className="img-fluid google" src={google} alt=""/>
                  </div>
               </div>
            </div>
            <div className="row row-addding">

            </div>
         </div>
      </div>
   </div>


   <div className="container-fluid okkjii-retalore">
      <h1 className="text-center my-5"><b className="best">New way to</b><br />connect with customers</h1>
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