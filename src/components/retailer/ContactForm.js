import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Googlemap from '../../img/retailer/Googlemap.png';

const ContactForm = () => {
  return (
    <div>

      <MDBRow>
        <MDBCol md="12">
          <MDBCard className="okjii-contact">
            <MDBCardBody>
              <form>
                <input
                  type="text"
                  name="name"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  placeholder="Name"
                />
                <br />
                <div class="input-group1">
    <input id="location" type="Location" class="form-control" name="location" placeholder="Location" />
    <span class="input-group-addon1 Googlemap google-map-right"><img src={Googlemap}  alt="Google Map" alt="" /></span>


  </div>
                <br />
                <input
                  type="number"
                  name="tel"
                  id="defaultFormCardNumber"
                  className="form-control"
                  placeholder="Number"
                />

                <div className="text-center mt-3">
                  <MDBBtn className="btn btn-outline-purple" type="submit">
                    Submit
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default ContactForm;