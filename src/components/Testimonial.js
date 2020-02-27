import React, { Component } from 'react'
import avatar from '../img/home/avatar.png';
import Asset12 from '../img/home/Asset12.png';

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
            <div className=" promoting-card">

<div className="card-body d-flex flex-row">

  <img src={avatar} className="rounded-circle mr-3" height="100px" width="100px" alt="avatar" />

  <div>

    <h2>Jyoty Singh</h2>
    <p className="card-text">Boring Road</p>

  </div>

</div>
</div>

              <blockquote>
                <p> <img src={Asset12} className=" mr-2" height="15px" width="15px" alt="Asset12" />
Rapidiously morph transparent internal or "organic" sources whereas resource sucking e-business. Conveniently innovate compelling internal. </p>
              </blockquote>
             
                
              </div>
          </div>
        </div>

      </section>

    )
  }
}
