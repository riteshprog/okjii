import React, { Component } from 'react'
import TestimonialSlider from './TestimonialSlider'
export default class Testimonial extends Component {
  render() {
    return (
      <section className="home-testimonial mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 ">
              <h1>Testimonial</h1>
              <h2>What customer say</h2>
              <p>Endorsement to our services that inspire enthusiasm and zeal.</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
            

  <TestimonialSlider />

             
                
              </div>
          </div>
        </div>

      </section>

    )
  }
}
