import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import vishal from '../../img/home/vishal.png';
import vmart from '../../img/home/vmart.png';
import easyday from '../../img/home/easyday.png';
import twentyfour from '../../img/home/24.png';
class Trusted extends React.Component {
  state= {
    responsive:{
        0: {
            items: 2,
        },
        450: {
            items: 3,
        },
        600: {
            items: 4,
        },
        1000: {
            items: 6,
        },
    },
}
render(){
  return(
<div className="container-fluid h1-trusted text-center">
        <div className="container">
      <h1 className="text-center">Trusted by Shop</h1>
<OwlCarousel className={'owl-theme'}
    loop={true}
    margin={20}
    nav={false}
    dots={true}
    autoplay={true}
    autoplayTimeout={2000}
    items={6}
    responsive={this.state.responsive}
>

<div className="item"><img className="item" src={twentyfour} alt="" /></div>
<div className="item"><img  className="item" src={easyday} alt="" /></div>
<div className="item"><img  className="item" src={vishal}  alt=""/></div>
<div className="item"><img  className="item" src={vmart}  alt="" /></div>
<div className="item"><img  className="item" src={twentyfour} alt="" /></div>
<div className="item"><img  className="item" src={easyday}  alt="" /></div>
<div className="item"><img  className="item" src={vishal}  alt="" /></div>
      
     </OwlCarousel>
     </div>
  </div>

  )
}
}
export default Trusted;
