import React, { Component } from 'react';
import iedagen from '../../img/about/iedagen.png';
import howwork from '../../img/about/howwork.png';
import destination from '../../img/about/destination.png';



export default class OurStory extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid our-story">
          <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Our Story</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2>Idea germination</h2>
              <p>Indians have been traditionally relying on neighbourhood stores (Kirana store) for food and grocery. The traditional way of purchasing is turning its fold due to the rising of disposable income and internet penetration. Customers want more transparency, speed,and convenience during purchase. Lack of time and rapid delivering era provoke customers to adopt digital means for monthly grocery purchases from their reliable neighbourhood shop instead of going and standing there.</p>

            </div>
            <div className="col-md-6">
              <figure className="text-center">
                <img src={iedagen} alt="" className="img-fluid iedagen" />
              </figure>
            </div>
          </div>
          <div className="row okjii-about-para">
            <div className="col-md-6">
              <figure className="text-center">
                <img src={howwork} alt="" className="img-fluid iedagen" />
              </figure>
            </div>
            <div className="col-md-6">
              <h2>How we work</h2>
              <p>OkkJi aggregates all Kirana shop together as a mobile App by which common users can ﬁnd all their neighbourhood shops including that from where they used to buy their groceries with the same mode of payment including traditional “UDHAR” system. Customers can order from neighbourhood shops digitally, Shopkeepers receive the order request and deliver to the customer’s door. In this way, they are fulﬁlling their needs without any glitch and physical interaction.</p>

            </div>
          </div>
          <div className="row okjii-about-para">
            <div className="col-md-6">
              <h2>Our destination</h2>
              <p>We start with a motive to establish a unanimous umbrella, a giant mom-Dad retail store chain across the country where every single store has its sovereignty and growing opportunity. We wish to transform the ancient purchase method and customer-shop relationship according to new trends but with the same fragrance, naive, touch, nativity and customer satisfaction.</p>

            </div>
            <div className="col-md-6">
              <figure className="text-center">
                <img src={destination} alt="" className="img-fluid iedagen" />
              </figure>
            </div>
          </div>


        </div>
        </div>
      </div>
    )
  }
}
