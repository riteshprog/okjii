import React, { Component } from 'react'
import TestimonialSlider from './TestimonialSlider'
export default class Testimonial extends Component {
  render() {
    return (
      <div className="container-fluid  home-testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <h1>Testimonial</h1>
              <h2>What customer say</h2>
              <p>Endorsement to our services that inspire enthusiasm and zeal.</p>
    


            </div>
            <div className="col-md-6">

            <TestimonialSlider />


            </div>
          </div>
      </div>
      </div>




    )
  }
}
