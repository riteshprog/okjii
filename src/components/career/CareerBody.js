import React, { Component } from 'react';
import CareerBackground from '../../img/career/CareerBackground.png';
import CareerImage1 from '../../img/career/CareerImage1.png';
import CareerImage2 from '../../img/career/CareerImage2.png';
import CureentJob from '../career/CureentJob';
import Trusted from '../common/Trusted';


export default class CareerBody extends Component {
  render() {
    return (
      <div className="career-body">
<div className="container-fluid career-body-img">
<div className="row">
    <img src={CareerBackground} alt="" className="img-fluid" />
  <h1 className="career-left">Make every city accessible and local commerce eﬃcient</h1>
  </div>
  </div>
  
  <div className="container-fluid">
  <div className="row carrier-blog">
    <div className="col-md-6 col-sm-6 col-lg-5">
      <h1>Why OkkJi is for your</h1>
      <p>Hyperlocal “Mom-Dad shops” are the arbitraries of food and grocery of the society with its eﬃciency, familiar nature, and grip over local taste &amp; food habits. We are channeling that taste and food delivery according to today’s mean and medium. Any eﬀort or hand that strengthen this channel eﬃciently is welcome in Okkji. Because we believe that fundamentals of success lie over the strong fundamental made up of talent, zeal and hard labor. Our association upgrades every individual that wants to observe, taste and market policies on the ground level. Our micro marketing, presence gives rich &amp; exclusive hyper knowledge along with job satisfaction and money. Diﬀerent Job designation and responsibility are a step towards a golden age of acceptance, expertise, and growth.</p>
    </div>
    <div className="col-md-6 col-sm-6 col-lg-7">
      <figure>
          <img src={CareerImage1} alt="" className="img-fluid" />
      </figure>
    </div>
  </div>


  <div className="row  carrier-blog carrer-image">
  <div className="col-md-6">
      <figure>
          <img src={CareerImage2} alt="" className="img-fluid" />
      </figure>
    </div>
    <div className="col-md-6">
      <h1>What you Gain from Here</h1>
      <p>Autonomy, sovereignty, and success. our work culture and the environment will explore your hidden potent6ial and power and let you put on the leading scale.</p>
      <p>Our Association is like a win-win condition for every individual because we focus on job satisfaction and their means. Here anyone can earn anything according to their hard work and eﬀort. Money, satisfaction, and ease are the core of any employment practice and OkkJi is standing on every aspect.
      </p>
    </div>
    </div>
<CureentJob />

</div>
<Trusted />
      </div>
    )
  }
}
