import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage } from "mdbreact";
import vishal from '../img/home/vishal.png';
import vmart from '../img/home/vmart.png';
import easyday from '../img/home/easyday.png';
import twentyfour from '../img/home/24.png';


const Trusted = () => {
  return (
    <MDBContainer>
      <MDBCarousel activeItem={1} length={4} slide={true} showControls={true} className="btn-arrow" showIndicators={true} multiItem>
        <h1 className="trusted-h1 text-center py-5">Trusted by Shop</h1>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem className="turested-slide" itemId="1">
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={twentyfour} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={easyday} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={vishal} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={vmart} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={twentyfour} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={easyday} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={vishal} />
                </MDBCard>
              </MDBCol>

            </MDBCarouselItem>




            <MDBCarouselItem className="turested-slide" itemId="2">
            <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={vmart} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={twentyfour} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={easyday} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={vishal} />
                </MDBCard>
              </MDBCol>
             
             
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={vmart} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={twentyfour} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={easyday} />
                </MDBCard>
              </MDBCol>

            </MDBCarouselItem>



            <MDBCarouselItem className="turested-slide" itemId="3">
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={vishal} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={vmart} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={twentyfour} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={easyday} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={vishal} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={vmart} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={twentyfour} />
                </MDBCard>
              </MDBCol>

            </MDBCarouselItem>
            <MDBCarouselItem className="turested-slide" itemId="4">
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={easyday} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={vishal} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={vmart} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={twentyfour} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={easyday} alt="" />
                 
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={vishal} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="1">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={vmart} />
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
