import React, { Component } from "react";
import RadioButton from "../registration/RadioButton";
import PreRegistration from "../../img/registration/PreRegistration.png";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";
import Axios from "axios";

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preRegistraionData: {
        fullName: "",
        email: "",
        mobileNumber: "",
        pincode: ""
      },
      offer: {
        title: '',
        howToApply: []
      },
      showOffer: true,
      otp: "",
      isMobileVerified: false,
      pincodeAllowed: false,
      showPincodeMark: false,
      district: "",
      state: ""
    };
  }
  getAddressFromPincode = async pincode => {
    return await Axios.post(
      process.env.REACT_APP_API_URL + `/google/get-addr`,
      { pincode }
    ).then(({ data }) => data);
  };
  handleOnChange = async e => {
    const formFields = ["fullName", "mobileNumber", "email", "pincode"];
    const value = e.target.value,
      name = e.target.name;
    if (name == "pincode" && value.length == 6) {
      const { pincodeObj } = await this.getAddressFromPincode(value);
      this.setState({ showPincodeMark: true });
      if (pincodeObj.district && pincodeObj.state) {
        let { district, state } = pincodeObj;
        const preRegistrationAllowedDistricts = ["Patna", "Jaipur"];
        if (!preRegistrationAllowedDistricts.includes(district)) {
          this.setState({ pincodeAllowed: false });
          console.log(
            `Pincode should be of ${preRegistrationAllowedDistricts.join(", ")}`
          );
        } else {
          console.log(district, state);
          this.setState({ pincodeAllowed: true, district, state });
        }
      } else {
        this.setState({ pincodeAllowed: false });
        console.log(`invalid pincode`);
      }
    }

    if (formFields.includes(name)) {
      const preRegistraionData = this.state.preRegistraionData;
      preRegistraionData[name] = value;
      this.setState({ preRegistraionData });
      console.log(preRegistraionData);
    } else if (name == "otp") {
      this.setState({ otp: value });
    } else {
      console.log(`onchange else filed`, name);
    }

    // console.log(this.state.preRegistraionData);
  };
  handleSendOtp = e => {
    e.preventDefault();
    const { mobileNumber } = this.state.preRegistraionData;
    if (!mobileNumber) alert(`Invalid Mobile Number`);
    else {
      Axios.get(process.env.REACT_APP_API_URL + "/otp/send/" + mobileNumber)
        .then(({ data }) => {
          console.log(`otp data`, data);
        })
        .catch(err => {
          console.log(`otp data err`, err);
        });
    }
  };
  handleOtpVerify = e => {
    e.preventDefault();
    const { otp } = this.state;
    if (!otp || (otp && otp.length != 6)) alert(`Invalid Otp`);
    else {
      const data = {
        mobile: this.state.preRegistraionData.mobileNumber,
        otp
      };
      Axios.post(process.env.REACT_APP_API_URL + "/otp/verify/", data)
        .then(({ data }) => {
          if (data.type == "success") {
            this.setState({ isMobileVerified: true });
          } else {
            console.log(data);
            alert(`Error ${data.message}`);
          }
        })
        .catch(err => {
          console.log(`otp data err`, err);
        });
    }
  };
  handleOnRadioChange = e => {};
  handleSubmit = e => {
    e.preventDefault();
    const { district, state, pincodeAllowed, isMobileVerified } = this.state;
    const {
      pincode,
      fullName,
      mobileNumber,
      email
    } = this.state.preRegistraionData;
    if (pincodeAllowed && isMobileVerified) {
      const data = {
        pincode,
        fullName,
        mobileNumber,
        isMobileVerified,
        email,
        district,
        state
      };
      Axios.post(process.env.REACT_APP_API_URL + "/pre-registraion", data)
        .then(({ data }) => {
          if (data.status) {
            this.setState({ offer: data.offer, showOffer: true });
          } else {
            alert(data.errorMsg);
          }
        })
        .catch(err => {
          alert(`Something went wrong, Try Again`);
          console.log(err);
        });
    } else {
      alert(`Can't Register, invalid/missing data`);
    }
  };
  render() {
    return (
      <div>
        {!this.state.showOffer ? (
          <MDBCard className="okjii-registration">
            <MDBCardBody>
              <form>
                <input
                  onChange={e => this.handleOnChange(e)}
                  type="text"
                  name="fullName"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  placeholder="Enter Full Name"
                />

                <br />
                <div className="textbuttonotp">
                  <input
                    onChange={e => this.handleOnChange(e)}
                    type="tel"
                    name="mobileNumber"
                    id="defaultFormCardNumber"
                    className="form-control"
                    pattern="[0-9]{10}"
                    placeholder="Mobile Number"
                  />
                  <MDBBtn
                    className="btn btn-getotp"
                    type="submit"
                    onClick={this.handleSendOtp}
                  >
                    Get OTP
                  </MDBBtn>
                </div>
                <br />
                <div className="textbuttonotp">
                  <input
                    onChange={e => this.handleOnChange(e)}
                    type="tel"
                    name="otp"
                    id="defaultFormCardNumber"
                    className="form-control"
                    placeholder="Six Digit OTP"
                  />
                  <MDBBtn
                    className="btn btn-getotp"
                    type="submit"
                    onClick={this.handleOtpVerify}
                  >
                    {!this.state.isMobileVerified ? "Verify" : "Verified"}
                  </MDBBtn>
                </div>
                <br />
                <input
                  onChange={e => this.handleOnChange(e)}
                  type="email"
                  name="email"
                  id="defaultFormCardCity"
                  className="form-control"
                  placeholder="E-mail (optional)"
                />
                <br />
                <RadioButton />
                <input
                  onChange={e => this.handleOnChange(e)}
                  type="pincode"
                  name="pincode"
                  id="defaultFormCardCity"
                  className="form-control"
                  placeholder="Pin Code"
                />
                {this.state.showPincodeMark ? (
                  <div className="p-2">
                    {this.state.pincodeAllowed ? (
                      <>
                        <MDBIcon
                          icon="check-square"
                          className="green-text mr-2"
                        />
                        <span className="text-success">Service Available</span>
                      </>
                    ) : (
                      <>
                        <MDBIcon
                          far
                          icon="window-close"
                          className="deep-orange-text mr-2"
                        />
                        <span className="text-danger">
                        Currently Service Not Available
                        </span>
                      </>
                    )}
                  </div>
                ) : null}
                <div className="text-center mt-3">
                  <MDBBtn
                    className="btn form-btn"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    {/* <a href="/user-offer" className="btn form-btn" type="submit"> */}
                    Get Offer
                    {/* </a> */}
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        ) : (
          <div className="offer-wrapper">
            <div className="f2">
              <span className="offer-title">{this.state.offer.title.toUpperCase()}</span>
              <span>
                {this.state.offer.howToApply.map((step, index) => (
                  <div className="df aic mtb-10">
                    <MDBIcon className="green-text" icon="certificate" />
                    <li className="lsn ml-2">{step} {index==0?<span className='text-danger'> (Comming Soon...) </span>:(null)}</li>
                  </div>
                ))}
              </span>
            </div>
            <div className="f1">
              {/* <MDBIcon size="5x" icon="award" /> */}
              <img src={PreRegistration} className="offer-image" />
            </div>
          </div>
        )}
      </div>
    );
  }
}
