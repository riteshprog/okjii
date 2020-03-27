import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";

export default class ApplyPage extends Component {
  render() {
    return (
      <div>
        
          <MDBCard className="applypage">
          <h1>Apply for this Job</h1>
  <MDBCardBody>
              <form>
                <input
                  type="text"
                  name="Name"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  placeholder="Name*"
                />

                <br />
                  <input
                    type="tel"
                    name="email"
                    id="defaultFormCardNumber"
                    className="form-control"
                    placeholder="E-mail*"
                  />
                <br />
                  <input
                    type="tel"
                    name="number"
                    id="defaultFormCardNumber"
                    className="form-control"
                    placeholder="Mobile Number"
                  />
                <br />
                <input
                  type="name"
                  name="lprofile"
                  id="defaultFormCardCity"
                  className="form-control"
                  placeholder="Linkedin Profile"
                />
                <br />
                <div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroupFileAddon01">
    Resume/CV*
    </span>
  </div>
  <div className="custom-file">
    <input
      type="file"
      className="custom-file-input"
      id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01"
    />
    <label className="custom-file-label" htmlFor="inputGroupFile01">
      Attach
    </label>
  </div>
</div>
<br />
<div className="input-group my-top">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroupFileAddon01">
    Cover Letter
    </span>
  </div>
  <div className="custom-file">
    <input
      type="file"
      className="custom-file-input"
      id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01"
    />
    <label className="custom-file-label" htmlFor="inputGroupFile01">
      Attach
    </label>
  </div>
</div>
                <div className="text-center mt-3">
                  <MDBBtn
                    className="btn form-btn"
                    type="submit"
                  >
                    SUBMIT
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </div>
    );
  }
}




