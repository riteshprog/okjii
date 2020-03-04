import React from "react";

import vishal from '../img/home/vishal.png';
import vmart from '../img/home/vmart.png';
import easyday from '../img/home/easyday.png';
import twentyfour from '../img/home/24.png';


const Trusted = () => {
  return (
    <div>
      <h1 class="text-center my-5 h1-trusted">Trusted by Shop</h1>
    <div class="bs-example">
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img className="item"  src={twentyfour} alt="" />
            <img className="item"  src={easyday} />
            <img className="item"  src={vishal} />
            <img className="item"  src={vmart} />
            <img className="item"  src={twentyfour} alt="" />
            <img className="item"  src={easyday} />
            <img className="item"  src={vishal} />
        </div>
        <div class="carousel-item">
            <img className="item"  src={vmart} />
            <img className="item"  src={twentyfour} alt="" />
            <img className="item"  src={easyday} />
            <img className="item"  src={vishal} />
            <img className="item"  src={vmart} alt="" />
            <img className="item"  src={twentyfour} />
            <img className="item"  src={easyday} />
        </div>
        <div class="carousel-item">
            <img className="item"  src={vishal} alt="" />
            <img className="item"  src={vmart} />
            <img className="item"  src={twentyfour} />
            <img className="item"  src={easyday} />
            <img className="item"  src={vishal} alt="" />
            <img className="item"  src={vmart} />
            <img className="item"  src={twentyfour} />
        </div>

        <div class="carousel-item">
            <img className="item"  src={easyday} alt="" />
            <img className="item"  src={vishal} />
            <img className="item"  src={vmart} />
            <img className="item"  src={twentyfour} />
            <img className="item"  src={easyday} alt="" />
            <img className="item"  src={vishal} />
            <img className="item"  src={vmart} />
       </div>

    </div>
</div>
</div>
  </div>
  );
}

export default Trusted;
