import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem,  MDBContainer } from
"mdbreact";
import avatar from '../img/home/avatar.png';
import Asset12 from '../img/home/Asset12.png';

const TestimonialSlider = () => {
  return (
    <MDBContainer>
      
        <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={false}
      className="z-depth-1 testmonial-slide"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <div className=" promoting-card">
          <div className="card-body d-flex flex-row">
          <img src={avatar} className="rounded-circle testimoni-img mr-3" height="100px" width="100px" alt="avatar" />
          <div>
              <h2>Vicky Singh</h2>
              <p className="card-text">Boring Road</p>
            </div>
          </div>
          </div>
          <blockquote>
          <p> <img src={Asset12} className="Asset12 mr-2" height="15px" width="15px" alt="Asset12" />
          Digital presence is the inevitability of today’s word whether it is business or individuality. Association with OkkJi not only associates you with the huge network of customers and shops but provides digital appearance also. </p>
          </blockquote>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
        <div className=" promoting-card">
          <div className="card-body d-flex flex-row">
          <img src={avatar} className="rounded-circle mr-3 testimoni-img" height="100px" width="100px" alt="avatar" />
          <div>
              <h2>Ritesh Singh</h2>
              <p className="card-text">Boring Road</p>
            </div>
          </div>
          </div>
          <blockquote>
          <p> <img src={Asset12} className="Asset12 mr-2" height="15px" width="15px" alt="Asset12" />
          Digital presence is the inevitability of today’s word whether it is business or individuality. Association with OkkJi not only associates you with the huge network of customers and shops but provides digital appearance also. </p>
          </blockquote>

        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
        <div className=" promoting-card">
          <div className="card-body d-flex flex-row">
          <img src={avatar} className="rounded-circle mr-3 testimoni-img" height="100px" width="100px" alt="avatar" />
          <div>
              <h2>Jyoty Singh</h2>
              <p className="card-text">Boring Road</p>
            </div>
          </div>
          </div>
          <blockquote>
          <p> <img src={Asset12} className="Asset12 mr-2" height="15px" width="15px" alt="Asset12" />
          Digital presence is the inevitability of today’s word whether it is business or individuality. Association with OkkJi not only associates you with the huge network of customers and shops but provides digital appearance also.
 </p>
          </blockquote>

        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    

  );
}

export default TestimonialSlider;








