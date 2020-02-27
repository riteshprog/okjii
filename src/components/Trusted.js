import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage } from "mdbreact";


import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import vishal from '../img/home/vishal.png';
import vmart from '../img/home/vmart.png';
import easyday from '../img/home/easyday.png';
import twentyfour from '../img/home/24.png';


const Trusted = () => {
  return (
    
    <MDBContainer>
      <MDBCarousel activeItem={1} length={4} slide={true} showControls={true} className="trusted-by" showIndicators={true} multiItem>
        <h1 className="trusted-h1 text-center py-5">Trusted by Shop</h1>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem className="turested-slide" itemId="1">
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid twentyfour" src={twentyfour} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid easyday" src={easyday} />
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vishal" src={vishal} />
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vmart" src={vmart} />
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid twentyfour" src={twentyfour} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid easyday" src={easyday} />
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vishal" src={vishal} />
                </MDBCard>
              </MDBCol>

            </MDBCarouselItem>




            <MDBCarouselItem className="turested-slide" itemId="2">
            <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vmart" src={vmart} />
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid twentyfour" src={twentyfour} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid easyday" src={easyday} />
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vishal" src={vishal} />
                </MDBCard>
              </MDBCol>
             
             
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vmart" src={vmart} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid twentyfour" src={twentyfour} />
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid easyday" src={easyday} />
                </MDBCard>
              </MDBCol>

            </MDBCarouselItem>



            <MDBCarouselItem className="turested-slide" itemId="3">
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vishal" src={vishal} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vmart" src={vmart} />
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid twentyfour" src={twentyfour} />
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid easyday" src={easyday} />
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vishal" src={vishal} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vmart" src={vmart} />
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid twentyfour" src={twentyfour} />
                </MDBCard>
              </MDBCol>

            </MDBCarouselItem>
            <MDBCarouselItem className="turested-slide" itemId="4">
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid easyday" src={easyday} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vishal" src={vishal} />
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vmart" src={vmart} />
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid twentyfour" src={twentyfour} />
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid easyday" src={easyday} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vishal" src={vishal} />
                </MDBCard>
              </MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vmart" src={vmart} />
                </MDBCard>
              </MDBCol>

            </MDBCarouselItem>
            
                      </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    
  );
}

export default Trusted;