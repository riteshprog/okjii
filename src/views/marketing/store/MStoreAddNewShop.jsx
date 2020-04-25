import joi from "joi";
import React from "react";
import Axios from "axios";
import CookieHandler from "../../../utils/cookieHandler";
import { Steps, Select, Avatar, message } from "antd";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { MyFancyComponent, MyMapComponent } from "../../../adminComponents/googleMap/googleMap";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Button, Form, FormGroup, Input, CustomInput, InputGroup, InputGroupAddon } from "reactstrap";
import {MDBIcon} from 'mdbreact';
import { IdcardFilled, BankOutlined, StarOutlined, UploadOutlined, CheckOutlined } from "@ant-design/icons";
import Googlemap from '../../../img/retailer/Googlemap.png';

//import "../../retailShop/retailshop.css";

const { Step } = Steps;
const { Option } = Select;

class MStoreAddNewShop extends React.Component {
  constructor(props) {
    super(props);

    const userData = CookieHandler.readCookie("userData");
    if (!userData) window.location = "/";

    this.ownerPhotoRef = React.createRef();
    this.ownerAvtarRef = React.createRef();

    this.businessEntityIncorporation = React.createRef();
    this.shopActRegistration = React.createRef();
    this.gstRegistration = React.createRef();
    this.fssaiLicenceAndRegistration = React.createRef();
    this.tradeLicense = React.createRef();
    this.waltLicense = React.createRef();

    this.state = {
      addNewShopModalVisibility: true,
      isMarkerShown: false,
      currentStep: 0,
      isShopSaved: false,
      hasOwnerAvtar: false,
      otpBtn: false,
      otpVerified: false,
      savingShop: false,
      otp: "",
      defaultCenter: { lat: 27.5440247, lng: 81.63638689999999 },
      errorObj: { basic: `Fileds Can't be Empty` },
      shopData: {
        basic: {
          shopName: "",
          ownerName: "",
          mobileNumber: "",
          altMobileNumber: "",
          shopLocation: {
            label: "",
            lat: "",
            lng: ""
          },
          state: '',
          distirct: '',
          city: '',
          country: '',
          address: '',
          landmark: '',
          ownerPhoto: "",
          uploadDocuments: []
        },
        bankDetails: {
          accountNumber: "",
          confirmAccountNumber: "",
          accountHolderName: "",
          bankName: "",
          ifscCode: "",
          accountType: "",
          bankAddress: "",
          mobileNumber: ""
        },
        storeCatelogue: {
          storeType: "",
          storeOpeningTiming: "",
          storeClosingTiming: "",
          storeOpeningDays: []
        }
      }
    };
  }
  shopForm = {
    basic: [
      {
        type: "text",
        tag: "input",
        key: "shopName",
        label: "Store Name",
        hint: "Enter Store Name",
        changeHandler: "handleOnchange",
        space: 6,
        required: true
      },
      {
        type: "text",
        tag: "input",
        key: "ownerName",
        label: "Owner Name",
        hint: "Enter Owner Name",
        changeHandler: "handleOnchange",
        required: true
      },
      {
        type: "number",
        tag: "inputGroupOtpSend",
        buttonText: "Get OTP",
        key: "mobileNumber",
        label: "Mobile Number",
        hint: "Enter Mobile Number",
        changeHandler: "handleOnchange",
        required: true
      },
      {
        type: "number",
        tag: "inputGroupOtpVerify",
        buttonText: "Verify",
        key: "otp",
        label: "Enter Otp",
        hint: "Six Digit OTP",
        changeHandler: "handleOnchange",
        required: true
      },
      {
        type: "number",
        tag: "input",
        key: "altMobileNumber",
        label: "Alternate Mobile Number",
        hint: "Enter Alt Mobile Number",
        changeHandler: "handleOnchange",
        required: false
      },
      {
        type: "file",
        tag: "inputGroupFileType",
        key: "ownerPhoto",
        label: "Upload Owner Photo",
        changeHandler: "onChange",
        space: 6,
        required: true
      }
    ],
    bankDetails: [
      {
        type: "text",
        tag: "input",
        key: "accountHolderName",
        label: "Account Holder Name*",
        hint: "Name",
        changeHandler: "onChange",
        space: 6,
        required: false
      },

      {
        type: "text",
        tag: "input",
        key: "bankName",
        label: "Bank Name*",
        hint: "Enter Bank Name",
        changeHandler: "onChange",
        space: 6,
        required: false
      },
            {
        type: "number",
        tag: "input",
        key: "accountNumber",
        label: "Account Number*",
        hint: "Enter Account Number",
        changeHandler: "onChange",
        space: 6,
        required: false
      },
      {
        type: "number",
        tag: "input",
        key: "confirmAccountNumber",
        label: "Confirm Account Number*",
        hint: "Re-enter Account Number",
        changeHandler: "onChange",
        space: 6,
        required: false
      },
      {
        type: "text",
        tag: "input",
        key: "bankAddress",
        label: "Bank Address*",
        hint: "Enter Bank Address",
        changeHandler: "onChange",
        space: 6,
        required: false
      },
      {
        type: "text",
        tag: "input",
        key: "ifscCode",
        label: "IFSC Code*",
        hint: "Enter IFSC Code",
        changeHandler: "onChange",
        space: 6,
        required: false
      },
      {
        type: "text",
        tag: "select",
        key: "accountType",
        options: ["Saving", "Current", "Regular"],
        label: "Account Type",
        hint: "Choose Account*",
        changeHandler: "onChange",
        space: 6,
        required: false
      },


      {
        type: "text",
        tag: "input",
        key: "mobileNumber",
        label: "Mobile Number (Optional)",
        hint: "No File Selected",
        changeHandler: "onChange",
        space: 6,
        required: false
      }
    ],
    storeCatelogue: [
      {
        type: "radio",
        tag: "radio",
        key: "storeType",
        label: "Choose Store Type",
        hint: "Choose Store Type",
        changeHandler: "onChange",
        space: 12,
        required: true
      },
      {
        type: "time",
        tag: "input",
        key: "storeOpeningTiming",
        label: "Store Opeing Timing",
        hint: "Shop Open &amp; Close Time",
        changeHandler: "onChange",
        space: 6,
        required: true
      },
      {
        type: "time",
        tag: "input",
        key: "storeClosingTiming",
        label: "Store Closing Timing",
        hint: "Enter Store Closing Timing",
        changeHandler: "onChange",
        space: 6,
        required: true
      }
    ]
  };
  setDefaultCenter = defaultCenter => {
    this.setState({ defaultCenter });
  };

  getAddressFromLatLong = (lat, lng) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBfvdlr4pZ5UbmIM9KzNSASmDy9pZsLQn0`;
    return Axios.get(url)
      .then(({ data }) => {
        let address = "", city = '';
        if (data.results.length) {
          for (var i = 0; i < data.results[0].address_components.length; i++) {
            if (
              data.results[0].address_components[i].types.indexOf("country") >
              -1
            ) {
              address += data.results[0].address_components[i].long_name + "";
            }
            if (
              data.results[0].address_components[i].types.indexOf(
                "administrative_area_level_1"
              ) > -1
            ) {
              address += data.results[0].address_components[i].long_name + ", ";
            }
            if (
              data.results[0].address_components[i].types.indexOf(
                "administrative_area_level_2"
              ) > -1
            ) {
              address += data.results[0].address_components[i].long_name + ", ";
              city = data.results[0].address_components[i].long_name;
            }
            if (
              data.results[0].address_components[i].types.indexOf(
                "locality"
              ) > -1
            ) {
              address += data.results[0].address_components[i].long_name + ", ";
            }
          }
          return {address, city};
        } else return {address, city};
      })
      .catch(err => {
        console.log(err);
        return "";
      });
  };

  toggleAddNewShopModal = () =>
    this.setState({
      addNewShopModalVisibility: !this.state.addNewShopModalVisibility
    });
  handleAddNewShop = (e, type) => {
    if (type == "addNewShop") {
      this.toggleAddNewShopModal();
    }
  };
  checkForErrors = category => {
    if (category == "basic") {
      const basicSchema = {
        shopName: joi.string().required(),
        ownerName: joi.string().required(),
        mobileNumber: joi.string().required().length(10),
        altMobileNumber: joi.string().length(10).allow(""),
        OwnerPicture: joi.any(),
        uploadDocuments: joi.any(),
        otp: joi.any(),
        ownerPhoto: joi.any(),
        shopLocation: joi.any(),
        state: joi.any(),
        distirct: joi.any(),
        city: joi.any(),
        country: joi.any(),
        address: joi.any(),
        landmark: joi.any(),
        businessEntityIncorporation: joi.any(),
        shopActRegistration: joi.any(),
        gstRegistration: joi.any(),
        fssaiLicenceAndRegistration: joi.any(),
        tradeLicense: joi.any(),
        waltLicense: joi.any()
      };
      return joi.validate(this.state.shopData.basic, basicSchema);
    } else if (category == "bankDetails") {
      const bankSchema = {
        accountNumber: joi.string().allow(''),
        confirmAccountNumber: joi.string().allow(''),
        accountHolderName: joi.string().allow(''),
        bankName: joi.string().allow(''),
        ifscCode: joi.string().allow(''),
        accountType: joi.string().allow(''),
        bankAddress: joi.string().allow(''),
        mobileNumber: joi.any().allow('')
      };
      return joi.validate(this.state.shopData.bankDetails, bankSchema);
    } else if (category == "storeCatelogue") {
      const storeCatelogueSchema = {
        storeType: joi.string().required()
      };
      return joi.validate(
        this.state.shopData.storeCatelogue,
        storeCatelogueSchema
      );
    }
  };

  changeStep = step => {
    if (step >= 5) step = 4;
    let errorObjKeys = Object.keys(this.state.errorObj);
    if (step <= this.state.currentStep) {
      this.setState({ currentStep: step });
    } else if (errorObjKeys.length) {
      message.error(this.state.errorObj[errorObjKeys[0]]);
    } else {
      if (this.state.currentStep == 0) {
        let {basic} = this.state.shopData;
        if(!this.state.hasOwnerAvtar) message.error("Shop Owner Image is Required");
        else if (!basic.country) message.error("Shop Location is Required");
        else if (!this.state.otpVerified) message.error("Please Verify Your Mobile Number");
        else
          this.setState({
            currentStep: step,
            errorObj: {}
          });
      } else if (this.state.currentStep == 1) {
        const bankDetails = this.state.shopData.bankDetails;
        if (bankDetails.accountNumber != bankDetails.confirmAccountNumber)
          message.error(`Account Number Doesn't Match`);
        else
          this.setState({
            currentStep: step,
            errorObj: {}
          });
      } else {
        this.setState({
          currentStep: step,
          errorObj: {}
        });
      }
    }
  };

  handleOnChange = (e, type, category) => {
    let shopData = this.state.shopData;
    if (
      type == "businessEntityIncorporation" ||
      type == "shopActRegistration" ||
      type == "gstRegistration" ||
      type == "fssaiLicenceAndRegistration" ||
      type == "tradeLicense" ||
      type == "waltLicense"
    ) {
      shopData[category][type] = e.target.files[0];
    } else if (type == "ownerPhoto") {
      this.setState({ hasOwnerAvtar: true });
      shopData[category][type] = e.target.files[0];
    } else if (type == "storeType") {
      shopData[category][type] = e.target.id;
    } else shopData[category][type] = e.target.value;

    this.setState({ shopData });

    const isValid = this.checkForErrors(category);
    let errorObj = {};
    if (isValid.error) {
      errorObj[category] = isValid.error.details[0].message;
      this.setState({ errorObj });
    } else {
      errorObj = {};
      this.setState({ errorObj });
    }
  };

  handleOnSelect = (e, type, category) => {
    type == "ownerPhoto" && e.preventDefault();
    // Bussiness Entity Incorporation', 'Shop Act Registration', 'GST Registration', 'FSSAI Licence & Registration', 'Trade License', 'Walt License
    if (type == "ownerPhoto") this.ownerPhotoRef.current.click();
    else if (e == "Business Entity Incorporation")
      this.businessEntityIncorporation.current.click();
    else if (e == "Shop Act Registration")
      this.shopActRegistration.current.click();
    else if (e == "GST Registration") this.gstRegistration.current.click();
    else if (e == "FSSAI Licence & Registration")
      this.fssaiLicenceAndRegistration.current.click();
    else if (e == "Trade License") this.tradeLicense.current.click();
    else if (e == "Walt License") this.waltLicense.current.click();
    else if (type == "accountType") {
      const shopData = this.state.shopData;
      shopData.bankDetails.accountType = e;
      this.setState({ shopData });
    } else if (type == "day") {
      let shopData = this.state.shopData,
        days = [];
      if (!shopData.storeCatelogue.storeOpeningDays.includes(e.target.name))
        shopData.storeCatelogue.storeOpeningDays.push(e.target.name);
      else {
        const index = shopData.storeCatelogue.storeOpeningDays.indexOf(
          e.target.name
        );
        shopData.storeCatelogue.storeOpeningDays.splice(index, 1);
      }
      this.setState({ shopData });
    }
  };

  handleOnSave = () => {
    this.setState({savingShop: true})
    let data = new FormData();
    const shopData = this.state.shopData;

    data.append("basic", JSON.stringify(shopData.basic));
    data.set("bankDetails", JSON.stringify(shopData.bankDetails));
    data.set("storeCatelogue", JSON.stringify(shopData.storeCatelogue));

    shopData.basic.ownerPhoto &&
      data.append("ownerPhoto", shopData.basic.ownerPhoto);

    shopData.basic.businessEntityIncorporation &&
      data.append(
        "businessEntityIncorporation",
        shopData.basic.businessEntityIncorporation
      );
    shopData.basic.fssaiLicenceAndRegistration &&
      data.append(
        "fssaiLicenceAndRegistration",
        shopData.basic.fssaiLicenceAndRegistration
      );
    shopData.basic.gstRegistration &&
      data.append("gstRegistration", shopData.basic.gstRegistration);
    shopData.basic.tradeLicense &&
      data.append("tradeLicense", shopData.basic.tradeLicense);
    shopData.basic.waltLicense &&
      data.append("waltLicense", shopData.basic.waltLicense);

    let {userInfo, _id} = JSON.parse(CookieHandler.readCookie('userData'));
    let token = JSON.parse(CookieHandler.readCookie('token'))
      
    Axios.post(process.env.REACT_APP_API_URL + "/shop", data, {
      headers: {
        Accept: "application/json",
        token
      }
    })
      .then(({ data }) => {
        this.setState({savingShop: false})
        if (data.status) {
          message.success("Shop saved successfully");
          setTimeout(() => {
            window.location.pathname = "admin/shops";
          }, 1000);
        } else {
          message.error(data.errorMessage);
        }
      })
      .catch(err => {
        this.setState({savingShop: false})
        console.log(`catch err`, err);
        message.error("Something went wrong!");
      });
  };
  renderFunc = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
    <div className="autocomplete-root">
      <input
        placeholder="Select Store Location from map"
        {...getInputProps({ className: "form-control" })}
      />
      <div className="autocomplete-dropdown-container">
        {suggestions.map(suggestion => (
          <div {...getSuggestionItemProps(suggestion)}>
            <span>{suggestion.description}</span>
          </div>
        ))}
      </div>
    </div>
  );

  onPreferenceLocationChange = (preferenceLocation, type = "") => {
    if (type == "map") {
      // invokes when marked from the google map
      let shopData = this.state.shopData;
      shopData["basic"]["shopLocation"]["lat"] = preferenceLocation.lat;
      shopData["basic"]["shopLocation"]["lng"] = preferenceLocation.lng;
      this.getAddressFromLatLong(
        preferenceLocation.lat,
        preferenceLocation.lng
      ).then(({address, city}) => {
        shopData["basic"]["shopLocation"]["label"] = address || "No Name found";
        let addressArr = address.split(", ").reverse();
        if (addressArr.length) {
          shopData["basic"]["country"] = addressArr[0];
          shopData["basic"]["state"] = addressArr[1];
          shopData["basic"]["distirct"] = addressArr[2];
          shopData["basic"]["city"] = city;
          shopData['basic']['address'] = address.split(', ').splice(0, address.split(', ').length-3).join(', ');
        }
        this.setState({ shopData });
      });
    } else {
      // invokes when user types the location
      const map = new MyMapComponent();
      let shopData = this.state.shopData;
      shopData["basic"]["shopLocation"]["label"] = preferenceLocation;
      let preferenceLocationArr = preferenceLocation.split(', '), preferenceLocationArrReverse = preferenceLocationArr.reverse();
      shopData["basic"]["country"] = preferenceLocationArrReverse[0];
      shopData["basic"]["state"] = preferenceLocationArrReverse[1];
      shopData["basic"]["distirct"] = preferenceLocationArrReverse[2];
      shopData["basic"]["city"] = preferenceLocationArrReverse[2];
      shopData["basic"]['address'] = preferenceLocationArr.splice(0, preferenceLocationArr.length-3).join(', ')

      this.setState({ shopData }, () => {

        geocodeByAddress(preferenceLocation)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
            let shopData = this.state.shopData;
            shopData["basic"]["shopLocation"]["lat"] = latLng.lat;
            shopData["basic"]["shopLocation"]["lng"] = latLng.lng;
            this.setState({
              shopData,
              defaultCenter: { lat: latLng.lat, lng: latLng.lng }
            });
          })
          .catch(error => console.error("Error", error));
      });
    }
  };
  handleGetOtp = e => {
    e.preventDefault();
    Axios.get(
      process.env.REACT_APP_API_URL +
        "/utils/check-mobile/" +
        this.state.shopData.basic.mobileNumber
    )
      .then(({ data }) => {
        if (data.status) {
          Axios.get(
            process.env.REACT_APP_API_URL +
              "/otp/send/" +
              this.state.shopData.basic.mobileNumber
          ).then(({ data }) => {
            if (data.type == "success") {
              message.success("OTP Send");
            }
          });
        } else {
          message.error(data.errorMessage);
        }
      })
      .catch(err => {
        message.error("OTP Send Failed");
      });
  };
  handleverifyOtp = e => {
    e.preventDefault();
    const body = {
      mobile: this.state.shopData.basic.mobileNumber,
      otp: this.state.shopData.basic.otp
    };
    Axios.post(process.env.REACT_APP_API_URL + "/otp/verify", body)
      .then(({ data }) => {
        if (data.type == "success") {
          message.success("OTP Verified");
          this.setState({ otpVerified: true });
        } else {
          message.error(data.message);
        }
      })
      .catch(err => {
        message.error("OTP Send Failed");
      });
  };
  renderRequiredIcon = () => <span className="form-required"> * </span>;

  render() {
    return (
      <>
        <div className="content m-store-view-add">
          <Row>
            <Steps
              type="navigation"
              size="default"
              current={this.state.currentStep}
            >
              {/* onClick={()=>this.changeStep(0) */}
              <Step
                title={
                  <span style={{ lineHeight: 2.5 }} className={this.state.currentStep == 0?'step box':'step box-white'}>
                    Store Details
                  </span>
                }
                
              />
              <Step
                title={
                  <span style={{ lineHeight: 2.5 }} className={this.state.currentStep == 1?'step box':'step box-white'}>
                    Bank Details
                  </span>
                }

              />
              <Step
                title={
                  <span style={{ lineHeight: 2.5 }} className={this.state.currentStep == 2?'step box':'step box-white'}>
                    Store Catelog
                  </span>
                }
                
              />
            </Steps>
          </Row>





          <Row>
            {this.state.currentStep == 0 ? (
              <Col md="12 mt-3">
                <Card className="card-user pr-3">
                  <CardHeader>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        {/* basic coloumns */}
                        {this.shopForm.basic.map(item => (
                          <Col className="pr-1" md={item.space || 6}>
                            <FormGroup>
                              <label className="add-shop-label">
                                {item.label}
                              </label>
                              {item.required ? this.renderRequiredIcon() : null}
                              {item.tag == "input" ? (
                                <Input
                                  placeholder={item.hint}
                                  type={item.type}
                                  onChange={e =>
                                    this.handleOnChange(e, item.key, "basic")
                                  }
                                  value={this.state.shopData.basic[item.key]}
                                />
                              ) : null}
                              {item.tag == "inputGroupOtpSend" ? (
                                <InputGroup>
                                  <Input
                                    placeholder={item.hint}
                                    type={item.type}
                                    onChange={e =>
                                      this.handleOnChange(e, item.key, "basic")
                                    }
                                    value={this.state.shopData.basic[item.key]}
                                  />
                                  <InputGroupAddon>
                                    <button
                                      disabled={this.state.otpBtn}
                                      onClick={this.handleGetOtp}
                                      className="btn-primary i-grp-btn"
                                    >
                                      {item.buttonText}
                                    </button>
                                  </InputGroupAddon>
                                </InputGroup>
                              ) : null}
                              {item.tag == "inputGroupOtpVerify" ? (
                                <InputGroup>
                                  <Input
                                    placeholder={item.hint}
                                    type={item.type}
                                    onChange={e =>
                                      this.handleOnChange(e, item.key, "basic")
                                    }
                                    value={this.state.shopData.basic[item.key]}
                                  />
                                  <InputGroupAddon>
                                    <button
                                      onClick={this.handleverifyOtp}
                                      color="primary"
                                      className="btn-primary i-grp-btn"
                                    >
                                      {this.state.otpVerified
                                        ? "Verified"
                                        : "Verify"}
                                    </button>
                                  </InputGroupAddon>
                                </InputGroup>
                              ) : null}

                              {item.tag == "inputGroupFileType" ? (
                                <InputGroup>
                                  <span className="form-control">
                                    {this.state.hasOwnerAvtar
                                      ? this.state.shopData.basic.ownerPhoto
                                          .name
                                      : "No File Selected"}
                                  </span>
                                  <InputGroupAddon>
                                    <button
                                      onClick={e =>
                                        this.handleOnSelect(
                                          e,
                                          item.key,
                                          "basic"
                                        )
                                      }
                                      className="btn-primary camera-icon i-grp-btn"
                                    >
                                      <MDBIcon icon="camera" />
                                    </button>
                                  </InputGroupAddon>
                                </InputGroup>
                              ) : null}

                              {item.tag == "image" ? (
                                <Avatar
                                  className="ml-3 cp"
                                  ref={this.ownerAvtarRef}
                                  onClick={e =>
                                    this.handleOnSelect(e, item.key, "basic")
                                  }
                                  size="large"
                                >
                                  {!this.state.hasOwnerAvtar ? (
                                    <UploadOutlined />
                                  ) : (
                                    <CheckOutlined />
                                  )}
                                </Avatar>
                              ) : null}
                            </FormGroup>
                          </Col>
                        ))}

                        <input
                          type="file"
                          accept="image/png,image/jpeg"
                          onChange={e =>
                            this.handleOnChange(e, "ownerPhoto", "basic")
                          }
                          id="file"
                          ref={this.ownerPhotoRef}
                          style={{ display: "none" }}
                        />
                        <input
                          type="file"
                          accept="image/png,image/jpeg"
                          onChange={e =>
                            this.handleOnChange(
                              e,
                              "businessEntityIncorporation",
                              "basic"
                            )
                          }
                          id="file"
                          ref={this.businessEntityIncorporation}
                          style={{ display: "none" }}
                        />
                        <input
                          type="file"
                          accept="image/png,image/jpeg"
                          onChange={e =>
                            this.handleOnChange(
                              e,
                              "shopActRegistration",
                              "basic"
                            )
                          }
                          id="file"
                          ref={this.shopActRegistration}
                          style={{ display: "none" }}
                        />
                        <input
                          type="file"
                          accept="image/png,image/jpeg"
                          onChange={e =>
                            this.handleOnChange(e, "gstRegistration", "basic")
                          }
                          id="file"
                          ref={this.gstRegistration}
                          style={{ display: "none" }}
                        />
                        <input
                          type="file"
                          accept="image/png,image/jpeg"
                          onChange={e =>
                            this.handleOnChange(
                              e,
                              "fssaiLicenceAndRegistration",
                              "basic"
                            )
                          }
                          id="file"
                          ref={this.fssaiLicenceAndRegistration}
                          style={{ display: "none" }}
                        />
                        <input
                          type="file"
                          accept="image/png,image/jpeg"
                          onChange={e =>
                            this.handleOnChange(e, "tradeLicense", "basic")
                          }
                          id="file"
                          ref={this.tradeLicense}
                          style={{ display: "none" }}
                        />
                        <input
                          type="file"
                          accept="image/png,image/jpeg"
                          onChange={e =>
                            this.handleOnChange(e, "waltLicense", "basic")
                          }
                          id="file"
                          ref={this.waltLicense}
                          style={{ display: "none" }}
                        />

                        <Col className="pr-1" md={6}>
                          <FormGroup>
                            <label className="add-shop-label">
                              Choose Store Documents
                            </label>
                            {this.renderRequiredIcon()}
                            <Select
                              placeholder="Select to Upload Documents"
                              size="large"
                              onSelect={e =>
                                this.handleOnSelect(e, "shopDocuments", "basic")
                              }
                              showSearch
                              style={{ width: "100%" }}
                            >
                              <Option value="Upload Doucments" disabled>
                                Upload Doucments
                              </Option>
                              {[
                                "Business Entity Incorporation",
                                "Shop Act Registration",
                                "GST Registration",
                                "FSSAI Licence & Registration",
                                "Trade License",
                                "Walt License"
                              ].map((value, index) => {
                                return (
                                  <Option key={index} value={value}>
                                    {value}
                                  </Option>
                                );
                              })}
                            </Select>
                            <div>
                              {this.state.shopData.basic.hasOwnProperty(
                                "businessEntityIncorporation"
                              ) && (
                                <span className="badge badge-primary m-2">
                                  Business Entity Incorporation
                                </span>
                              )}
                              {this.state.shopData.basic.hasOwnProperty(
                                "shopActRegistration"
                              ) && (
                                <span className="badge badge-primary m-2">
                                  Shop Act Registration
                                </span>
                              )}
                              {this.state.shopData.basic.hasOwnProperty(
                                "gstRegistration"
                              ) && (
                                <span className="badge badge-primary m-2">
                                  GST Registration
                                </span>
                              )}
                              {this.state.shopData.basic.hasOwnProperty(
                                "fssaiLicenceAndRegistration"
                              ) && (
                                <span className="badge badge-primary m-2">
                                  FSSAI Licence & Registration
                                </span>
                              )}
                              {this.state.shopData.basic.hasOwnProperty(
                                "tradeLicense"
                              ) && (
                                <span className="badge badge-primary m-2">
                                  Trade License
                                </span>
                              )}
                              {this.state.shopData.basic.hasOwnProperty(
                                "waltLicense"
                              ) && (
                                <span className="badge badge-primary m-2">
                                  Walt License
                                </span>
                              )}
                            </div>
                          </FormGroup>
                        </Col>

                        <Col className="pr-1" md={6}>
                          <FormGroup>
                            <label className="add-shop-label">
                              Enter Shop Location
                            </label>
                            <InputGroupAddon className="float-right shop-location-map">
                                    <button
                                      className="btn-primary camera-icon i-grp-btn"
                                    >
                                      <img src={Googlemap}  alt="Google Map"  />
                                    </button>
                                  </InputGroupAddon>
                            {this.renderRequiredIcon()}
                            <PlacesAutocomplete
                              onChange={this.onPreferenceLocationChange}
                              value={
                                this.state.shopData.basic.shopLocation.label
                              }
                              options={{ types: ["(regions)"] }}
                            >

                              {this.renderFunc}
                            </PlacesAutocomplete>
                            
                            {/* <MyMapComponent
                            isMarkerShown
                            onMarkerClick={this.handleMarkerClick}
                          /> */}
                            {/* <ShopMap center={this.state.defaultCenter} containerElement={<div style={{ height: '250px', width: '100%' }} />} mapElement={<div style={{ height: '100%', width: '100%' }} />}/> */}
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md={6}>
                          <FormGroup>
                            <label className="add-shop-label"> Compelete Address </label> {this.renderRequiredIcon()} 
                            <Input placeholder='Enter Compelete Address' type='text' onChange={e => this.handleOnChange(e, 'address', "basic") } value={this.state.shopData.basic.address} />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md={3}>
                          <FormGroup>
                            <label className="add-shop-label"> City </label> {this.renderRequiredIcon()} 
                            <Input placeholder='Enter City Name' type='text' onChange={e => this.handleOnChange(e, 'city', "basic") } value={this.state.shopData.basic.city} />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md={3}>
                          <FormGroup>
                            <label className="add-shop-label"> Landmark </label> {this.renderRequiredIcon()} 
                            <Input placeholder='Enter Landmark' type='text' onChange={e => this.handleOnChange(e, 'landmark', "basic") } value={this.state.shopData.basic.landmark} />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md={12}>
                          <div style={{ zIndex: -9999 }}>
                            <MyFancyComponent
                              mapMarkerPostion={this.state.defaultCenter}
                              setPreferenceLocationChange={
                                this.onPreferenceLocationChange
                              }
                              setDefaultCenter={this.setDefaultCenter}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row></Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            ) : null}

            {this.state.currentStep == 1 ? (
              <Col md="12 mt-3">
                <Card className="card-user pr-3">
                  {/* <CardHeader>
                    <CardTitle tag="h5">Bank Details</CardTitle>
                  </CardHeader> */}
                  <CardBody>
                    <Form>
                      <Row>
                        {/* bankDetails coloumns */}
                        {this.shopForm.bankDetails.map(item => (
                          <Col className="pr-1" md={item.space || 4}>
                            <FormGroup>
                              <label className="add-shop-label">
                                {item.label}
                              </label>
                              {item.required ? this.renderRequiredIcon() : null}
                              {item.tag == "input" ? (
                                <Input
                                  placeholder={item.hint}
                                  type={item.type || "text"}
                                  onChange={e =>
                                    this.handleOnChange(
                                      e,
                                      item.key,
                                      "bankDetails"
                                    )
                                  }
                                  value={
                                    this.state.shopData.bankDetails[item.key]
                                  }
                                />
                              ) : null}

                              {item.tag == "img" ? (
                                <div>
                                  <Avatar shape="square" size="large">
                                    a
                                  </Avatar>
                                </div>
                              ) : null}

                              {item.tag == "select" ? (
                                <Select
                                  placeholder="Select Account Type"
                                  size="large"
                                  onSelect={e =>
                                    this.handleOnSelect(
                                      e,
                                      "accountType",
                                      "bankDetails"
                                    )
                                  }
                                  showSearch
                                  style={{ width: "100%" }}
                                >
                                  <Option value="Account Type" disabled>
                                    Account Types
                                  </Option>
                                  {item.options.map((value, index) => {
                                    return (
                                      <Option key={index} value={value}>
                                        {value}
                                      </Option>
                                    );
                                  })}
                                </Select>
                              ) : null}
                            </FormGroup>
                          </Col>
                        ))}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            ) : null}
            {this.state.currentStep == 2 ? (
              <Col md="12 mt-3">
                <Card className="card-user pr-3">
                  {/* <CardHeader>
                    <CardTitle tag="h5">Store Product/Catelog</CardTitle>
                  </CardHeader> */}
                  <CardBody>
                    <Form>
                      <Row>
                        {this.shopForm.storeCatelogue.map(item => (
                          <Col className="pr-1" md={item.space || 6}>
                            <FormGroup
                              onChange={e =>
                                this.handleOnChange(
                                  e,
                                  item.key,
                                  "storeCatelogue"
                                )
                              }
                            >
                              <label
                                className="add-shop-label"
                                for="exampleCheckbox"
                              >
                                {item.label}
                              </label>
                              {item.required ? this.renderRequiredIcon() : null}
                              {item.type == "radio" ? (
                                <div className="select-option-storetype">
                                  <CustomInput
                                    type="radio"
                                    name="storeType"
                                    id="Medium Store"
                                    label="Medium Store"
                                  />
                                  <CustomInput
                                    type="radio"
                                    name="storeType"
                                    id="Standard Store"
                                    label="Standard Store"
                                  />
                                  <CustomInput
                                    type="radio"
                                    name="storeType"
                                    id="24x7 Store"
                                    label="24x7 Store"
                                  />
                                  <CustomInput
                                    type="radio"
                                    name="storeType"
                                    id="OkkJi Access"
                                    label="OkkJi Access"
                                  />
                                </div>
                              ) : null}
                              {item.type == "time" ? (
                                <Input
                                  placeholder={item.hint}
                                  type={item.type || "text"}
                                  onChange={e =>
                                    this.handleOnChange(
                                      e,
                                      item.key,
                                      "storeCatelogue"
                                    )
                                  }
                                  value={
                                    this.state.shopData.storeCatelogue[item.key]
                                  }
                                />
                              ) : null}
                            </FormGroup>
                          </Col>
                        ))}
                        <Col className="pr-1" md={12}>
                          <label className="add-shop-label">
                            Store Opening Day
                          </label>
                          {this.renderRequiredIcon()}
                          <br></br>
                          <FormGroup
                            className="select-option-storetype"
                            onChange={e =>
                              this.handleOnSelect(e, "day", "storeCatelogue")
                            }
                          >
                            <div className="select-option-storetype">
                              {[
                                "monday",
                                "tuesday",
                                "wednesday",
                                "thursday",
                                "friday",
                                "saturday",
                                "sunday"
                              ].map(item => (
                                <CustomInput
                                  type="checkbox"
                                  name={item}
                                  id={item}
                                  label={item.toUpperCase()}
                                />
                              ))}
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            ) : null}
            {this.state.currentStep == 2 ? (
              <div className="update ml-auto mr-auto">
                <Button
                  className="btn-round"
                  color="primary"
                  type="submit"
                  disabled={this.state.savingShop?true:false}
                  onClick={this.handleOnSave}
                > 
                  Save
                </Button>
              </div>
            ) : (
              <div className="update ml-auto mr-auto">
                <Button
                  className="btn-round"
                  color="primary"
                  type="submit"
                  onClick={() => this.changeStep(this.state.currentStep + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </Row>
        </div>
      </>
    );
  }
}

export default MStoreAddNewShop;
