import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import vishal from '../img/home/vishal.png';
import vmart from '../img/home/vmart.png';
import easyday from '../img/home/easyday.png';
import twentyfour from '../img/home/24.png';

const options = {
    items: 4,
};
export default class owlcarosoul extends React.Component{
  render()
  {
    return (
    <OwlCarousel
    className="owl-theme"
    loop
    margin={10}
    nav
>
     <div class="item"><img className="item"  src={twentyfour} alt="" /></div>
     <div class="item"><img className="item"  src={vmart}  alt="" /></div>
     <div class="item"><img className="item"  src={easyday} alt="" /></div>
     <div class="item"><img className="item"  src={vishal}  alt=""/></div>
           <div class="item"><img className="item"  src={vmart}  alt="" /></div>
</OwlCarousel>
    )
  }
}