import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

const ContactUsForm = () => {
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
                <input
                  type="email"
                  name="email"
                  id="defaultFormCardCity"
                  className="form-control"
                  placeholder="E-mail"
                />
                
                <br />
                <input
                  type="number"
                  name="tel"
                  id="defaultFormCardNumber"
                  className="form-control"
                  placeholder="Number"
                />
                <br />
                <div className="form-group">
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Purpose</option>
      <option>Shopping</option>
      <option>Visiting</option>
    </select>
  </div>

        <br />
        <textarea placeholder="Subject..."
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
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

export default ContactUsForm;