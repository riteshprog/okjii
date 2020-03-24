import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Hyper from "../../img/home/Hyper.png";
import Patanjali from "../../img/home/Patanjali.png";
import SHEKHAR from "../../img/home/SHEKHAR.png";
import EzeeFresh from "../../img/home/EzeeFresh.png";
import BigMart from "../../img/home/BigMart.png";
import Crossing from "../../img/home/Crossing.png";

class Trusted extends React.Component {
  state = {
    responsive: {
      0: {
        items: 2
      },
      450: {
        items: 3
      },
      600: {
        items: 4
      },
      1000: {
        items: 5
      }
    }
  };
  render() {
    return (
      <div className="container-fluid h1-trusted text-center">
        <div className="container trusted-by-store">
          <h1 className="text-center">TRUSTED BY STORE</h1>
          <OwlCarousel
            className={"owl-theme"}
            loop={true}
            margin={20}
            nav={false}
            dots={true}
            autoplay={true}
            autoplayTimeout={2000}
            items={5}
            responsive={this.state.responsive}
          >
            <div className="item">
              <img className="item" src={SHEKHAR} alt="" />
            </div>
            <div className="item">
              <img className="item" src={Patanjali} alt="" />
            </div>
            <div className="item">
              <img className="item" src={Hyper} alt="" />
            </div>
            <div className="item">
              <img className="item" src={EzeeFresh} alt="" />
            </div>
            <div className="item">
              <img className="item" src={BigMart} alt="" />
            </div>
            <div className="item">
              <img className="item" src={Crossing} alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
export default Trusted;
