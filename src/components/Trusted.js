import React from "react";

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage } from "mdbreact";


import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import vishal from '../img/home/vishal.png';
import vmart from '../img/home/vmart.png';
import easyday from '../img/home/easyday.png';
import twentyfour from '../img/home/24.png';


const Trusted = () => {
  return (
    
    <MDBContainer className="container-fluid">
      <MDBCarousel activeItem={1} length={4} slide={true} showControls={false} className="trusted-by mt-5" showIndicators={true} multiItem>
        <h1 className="trusted-h1 text-center py-5">Trusted by Shop</h1>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem className="turested-slide" itemId="1">
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid twentyfour" height="40" src={twentyfour} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid easyday" src={easyday} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vishal" src={vishal} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vmart" src={vmart} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid twentyfour" src={twentyfour} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid easyday" src={easyday} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vishal" src={vishal} />
                </MDBCard>
              </MDBCol>

            </MDBCarouselItem>




            <MDBCarouselItem className="turested-slide" itemId="2">
            <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vmart" src={vmart} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid twentyfour" src={twentyfour} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid easyday" src={easyday} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vishal" src={vishal} />
                </MDBCard>
              </MDBCol>
             
             
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vmart" src={vmart} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid twentyfour" src={twentyfour} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid easyday" src={easyday} />
                </MDBCard>
              </MDBCol>

            </MDBCarouselItem>



            <MDBCarouselItem className="turested-slide" itemId="3">
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vishal" src={vishal} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vmart" src={vmart} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid twentyfour" src={twentyfour} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid easyday" src={easyday} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vishal" src={vishal} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vmart" src={vmart} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid twentyfour" src={twentyfour} />
                </MDBCard>
              </MDBCol>

            </MDBCarouselItem>
            <MDBCarouselItem className="turested-slide" itemId="4">
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid easyday" src={easyday} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vishal" src={vishal} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vmart" src={vmart} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid twentyfour" src={twentyfour} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid easyday" src={easyday} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid vishal" src={vishal} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" sm="2" lg="1" size="12">
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
