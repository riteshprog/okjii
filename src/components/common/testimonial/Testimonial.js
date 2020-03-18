import React, { Component } from 'react';
import TestimonialSlider from '../testimonial/TestimonialSlider';

export default class Testimonial extends Component {
  render() {
    return (
      <div className="container-fluid  home-testimonial">
<section className="container ">
        <div className="row">
          <div className="col-lg-6 col-md-6">
          <h1>Testimonial</h1>
              {/* <h2>What customer say</h2> */}
              <p>Endorsement to our services that inspire enthusiasm and zeal.</p>

         </div>
          <div className="col-lg-6 col-md-6">
          <TestimonialSlider />
          </div>
        </div>
        </section>


      </div>




    )
  }
}
