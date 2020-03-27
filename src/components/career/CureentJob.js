import React, { Component } from 'react';
import CareerIcon1 from '../../img/career/CareerIcon1.png';
import CareerIcon2 from '../../img/career/CareerIcon2.png';
import CareerIcon3 from '../../img/career/CareerIcon3.png';
import CareerIcon4 from '../../img/career/CareerIcon4.png';


export default class CureentJob extends Component {
  render() {
    return (
      <div>
<div className="container-fluid career-offer">
  <h1>Current Job Openings</h1>
  <div className="row">
    <div className="col-md-4">
      <div className="career-card">
      <img src={CareerIcon1} alt="" className="img-fluid" />
      <div className="career-offer-heading">
        <h2>Graphic Designer</h2>
        <p>Patna</p>
      </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="career-card">
      <img src={CareerIcon2} alt="" className="img-fluid" />
      <div className="career-offer-heading">
        <h2>Marketing Head</h2>
        <p>Patna</p>
      </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="career-card">
      <img src={CareerIcon3} alt="" className="img-fluid" />
      <div className="career-offer-heading">
        <h2>Web Developer</h2>
        <p>Patna</p>
      </div>
      </div>
    </div>

    <div className="col-md-4">
      <a href="/careerpage">
      <div className="career-card">
      <img src={CareerIcon4} alt="" className="img-fluid" />
      <div className="career-offer-heading">
        <h2>Finance Management</h2>
        <p>Patna</p>
      </div>
      </div>
      </a>
    </div>

    <div className="col-md-4">
      <div className="career-card">
      <img src={CareerIcon1} alt="" className="img-fluid" />
      <div className="career-offer-heading">
        <h2>Graphic Designer</h2>
        <p>Patna</p>
      </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="career-card">
      <img src={CareerIcon2} alt="" className="img-fluid" />
      <div className="career-offer-heading">
        <h2>Graphic Designer</h2>
        <p>Patna</p>
      </div>
      </div>
    </div>


    <div className="col-md-4">
      <div className="career-card">
      <img src={CareerIcon1} alt="" className="img-fluid" />
      <div className="career-offer-heading">
        <h2>Graphic Designer</h2>
        <p>Patna</p>
      </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="career-card">
      <img src={CareerIcon2} alt="" className="img-fluid" />
      <div className="career-offer-heading">
        <h2>Marketing Head</h2>
        <p>Patna</p>
      </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="career-card">
      <img src={CareerIcon3} alt="" className="img-fluid" />
      <div className="career-offer-heading">
        <h2>Web Developer</h2>
        <p>Patna</p>
      </div>
      </div>
    </div>



  </div>

</div>
      </div>
    )
  }
}
