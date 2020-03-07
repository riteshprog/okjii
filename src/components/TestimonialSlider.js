import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem,  MDBContainer, MDBIcon } from
"mdbreact";
import avatar from '../img/home/avatar.png';

const TestimonialSlider = () => {
  return (
    <MDBContainer fluid>
      
        <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={false}
      className="z-depth-1 testmonial-slide float-left"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <div className=" promoting-card   pt-5">
            <div className="testimoni-img">
          <div className="author-img">
          <img src={avatar} className="rounded-circle testimoni-img" width="80" height="80" alt="avatar" />
          </div>
          <div class="author">
              <h2>Vicky Singh</h2>
              <p className="card-text">Boring Road</p>
            </div>
            </div>
          </div>
          <blockquote>
          <p> <MDBIcon icon="quote-left" className="color-green" /> &#160;Digital presence is the inevitability of today’s word whether it is business or individuality. Association with OkkJi not only associates you with the huge network of customers and shops but provides digital appearance also. </p>
          </blockquote>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
        <div className=" promoting-card  pt-5">
            <div className="testimoni-img">
          <div className="author-img">
            <img src={avatar} className="rounded-circle testimoni-img" width="80" height="80" alt="avatar" />
          </div>
          <div class="author">
              <h2>Ritesh Singh</h2>
              <p className="card-text">Boring Road</p>
            </div>
          </div>
          </div>
          <blockquote>
          <p> <MDBIcon icon="quote-left" className="color-green" /> &#160;Digital product is the inevitability of today’s word whether it is business or individuality. Association with OkkJi not only associates you with the huge network of customers and shops but provides digital appearance also. </p>
          </blockquote>

        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
        <div className=" promoting-card pt-5">
            <div className="testimoni-img">
          <div className="author-img">
           <img src={avatar} className="rounded-circle testimoni-img" width="80" height="80" alt="avatar" />
          </div>
          <div class="author">
              <h2>Jyoty Singh</h2>
              <p className="card-text">Boring Road</p>
            </div>
          </div>
          </div>
          <blockquote>
          <p><MDBIcon icon="quote-left" className="color-green" /> &#160;Digital summary is the inevitability of today’s word whether it is business or individuality. Association with OkkJi not only associates you with the huge network of customers and shops but provides digital appearance also. 
 </p>
          </blockquote>

        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    

  );
}

export default TestimonialSlider;








