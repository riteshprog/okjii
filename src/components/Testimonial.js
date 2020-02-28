import React, { Component } from 'react'
import TestimonialSlider from './TestimonialSlider'
export default class Testimonial extends Component {
  render() {
    return (
      <section className="home-testimonial">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-12">
              <h1>Testimonial</h1>
              <h2>What customer say</h2>
              <p>Endorsement to our services that inspire enthusiasm and zeal.</p>
            </div>
            <div className="col-sm-6 col-12">
            

  <TestimonialSlider />

             
                
              </div>
          </div>
        </div>

      </section>

    )
  }
}
