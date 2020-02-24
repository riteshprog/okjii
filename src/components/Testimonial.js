import React, { Component } from 'react'
import avatar from '../img/home/avatar.png';
import {MDBIcon} from "mdbreact";

export default class Testimonial extends Component {
  render() {
    return (
      <section className="home-testimonial">
        <div className="container">
          <div className="row">
            <div class="col-sm-6 col-12">
              <h1>Testimonial</h1>
              <h2>What customer say</h2>
              <p>Endorsement to our services that inspire enthusiasm and zeal.</p>
            </div>
            <div className="col-sm-6 col-12">
            <div className="card promoting-card">

<div className="card-body d-flex flex-row">

  <img src={avatar} className="rounded-circle mr-3" height="50px" width="50px" alt="avatar" />

  <div>

    <h4 className="card-title font-weight-bold mb-2">Jyoty Singh</h4>
    <p className="card-text">Boring Road</p>

  </div>

</div>
</div>

              <blockquote>
                <p>Rapidiously morph transparent internal or "organic" sources whereas resource sucking e-business. Conveniently innovate compelling internal. </p>
              </blockquote>
             
                
              </div>
          </div>
        </div>

      </section>

    )
  }
}
