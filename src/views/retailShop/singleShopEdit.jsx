import React, { Component } from "react";
import Axios from "axios";
import { Steps, Select, message, Card } from "antd";
import {
  Col,
  Input,
  Form,
  FormGroup,
  Label,
  Button,
  CardBody,
  CustomInput
} from "reactstrap";

const { Step } = Steps;
const { Option } = Select;
const { TextArea } = Input;

class SingleShopEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addNewShopModalVisibility: true,
      currentStep: 0,
      isShopSaved: false,
      hasOwnerAvtar: false,
      shopData: {
        basic: {
          shopLocation: {
            label: "",
            lat: "",
            lng: ""
          },
          altMobileNumber: "",
          gstNumber: "",
          ownerPhoto: "",
          state: "",
          district: "",
          country: "",
          shopDocuments: [],
          shopName: "",
          ownerName: "",
          mobileNumber: ""
        },
        bankDetails: {
          accountNumber: "",
          accountHolderName: "",
          bankName: "",
          ifscCode: "",
          accountType: "",
          bankAddress: ""
        },
        storeCatelogue: {
          storeType: ""
        }
      }
    };
  }
  componentDidMount() {
    const { params } = this.props.match;
    Axios.get(process.env.REACT_APP_API_URL + "/shop/" + params.shopId)
      .then(({ data }) => {
        if (data.status) {
          this.setState({ shopData: data.shopData });
        } else {
          message.error(data.errorMessage);
        }
      })
      .catch(err => {});
  }

  handleOnChange = (e, type, key) => {
    let shopData = this.state.shopData;
    shopData[type][key] = e.target.value;
    this.setState({ shopData });
  };
  handleOnSelect = (value, type, key) => {
    let shopData = this.state.shopData;
    shopData[type][key] = value;
    this.setState({ shopData });
  };
  handleOnUploadClicked = (e) => {
    e.preventDefault();
    Axios.patch(process.env.REACT_APP_API_URL + '/shop/' + this.state.shopData.mobileNumber, this.state.shopData)
    .then(({data})=>{
      console.log(`shop update data`, data);
      if(data.status){
        message.success(`Shop Updated Successfully`);
      }else message.error(data.errorMessage);
    }).catch((err)=>{
      message.error(`Something went wrong!`);
      console.log(err);
    })
  }

  render() {
    const { basic, storeCatelogue, bankDetails } = this.state.shopData;

    return (
      <div className="content">
        <Card>
          <CardBody>
            <Form className="retail-shop">
              <FormGroup row>
                <Col className="df jcc aic" sm={1}>
                  <img className="icon-md" src={basic.ownerPhoto} alt="" />
                </Col>
                <Col sm={8}>
                  <p>{basic.shopName}</p>
                  <p>
                    <span className="text-green">OKK</span>P0001
                  </p>
                </Col>
                <Col className="df aic jcfe" sm={2}>
                  <Button className="bg-green" onClick={this.handleOnUploadClicked}>Update</Button>
                </Col>
              </FormGroup>
            </Form>
            <Form className="retail-shop-background">
              <FormGroup row>
                <Label sm={2}>Store Name:</Label>
                <Col sm={4}>
                  <Input
                    value={basic.shopName}
                    placeholder="Store Name:"
                    onChange={e => this.handleOnChange(e, "basic", "shopName")}
                  />
                </Col>
                <Label sm={2}>Owner Name:</Label>
                <Col sm={4}>
                  <Input
                    value={basic.ownerName}
                    placeholder="Owner Name:"
                    onChange={e => this.handleOnChange(e, "basic", "ownerName")}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Store Type:</Label>
                <Col sm={4}>
                  <Select
                    value={storeCatelogue.storeType}
                    placeholder="Select Account Type"
                    size="large"
                    onSelect={value =>
                      this.handleOnSelect(value, "storeCatelogue", "storeType")
                    }
                    showSearch
                    style={{ width: "100%" }}
                  >
                    <Option value="Account Type" disabled>
                      Store Types
                    </Option>
                    {[
                      "Medium Store",
                      "Standard Store",
                      "24x7 Store",
                      "OkkJi Access"
                    ].map((value, index) => (
                      <Option key={index} value={value}>
                        {value}
                      </Option>
                    ))}
                  </Select>
                </Col>
                <Label sm={2}>Mobile Number:</Label>
                <Col sm={4}>
                  <Input
                    type="tel"
                    value={basic.mobileNumber}
                    placeholder="Mobile Number"
                    onChange={e =>
                      this.handleOnChange(e, "basic", "mobileNumber")
                    }
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2}>Store Location:</Label>
                <Col sm={4}>
                  <Input
                    disabled
                    type="text"
                    id="exampleGLocation"
                    value={basic.shopLocation.label}
                    placeholder="Google Location"
                    onChange={e =>
                      this.handleOnChange(e, "basic", "shopLocation")
                    }
                  />
                </Col>
                <Label sm={2}>Alt Mobile Number</Label>
                <Col sm={4}>
                  <Input
                    type="text"
                    id="exampleGLocation"
                    value={basic.altMobileNumber}
                    placeholder="Alt Mobile Number"
                    onChange={e =>
                      this.handleOnChange(e, "basic", "altMobileNumber")
                    }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Bank Name:</Label>
                <Col sm={4}>
                  <Input
                    type="name"
                    value={bankDetails.bankName}
                    placeholder="Bank Name"
                    onChange={e =>
                      this.handleOnChange(e, "bankDetails", "bankName")
                    }
                  />
                </Col>
                <Label sm={2}>Acc Holder Name:</Label>
                <Col sm={4}>
                  <Input
                    type="Name"
                    value={bankDetails.accountHolderName}
                    placeholder="Acc Holder Name"
                    onChange={e =>
                      this.handleOnChange(e, "bankDetails", "accountHolderName")
                    }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Account Number:</Label>
                <Col sm={4}>
                  <Input
                    type="name"
                    value={bankDetails.accountNumber}
                    placeholder="Account Number"
                    onChange={e =>
                      this.handleOnChange(e, "bankDetails", "accountNumber")
                    }
                  />
                </Col>
                <Label sm={2}>IFSC Code:</Label>
                <Col sm={4}>
                  <Input
                    type="text"
                    id="exampleIFSCode"
                    placeholder="IFSC Code"
                    value={bankDetails.ifscCode}
                    onChange={e =>
                      this.handleOnChange(e, "bankDetails", "ifscCode")
                    }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Account Type:</Label>
                <Col sm={4}>
                  <Select
                    value={bankDetails.accountType}
                    placeholder="Select Account Type"
                    size="large"
                    onSelect={value =>
                      this.handleOnSelect(value, "bankDetails", "accountType")
                    }
                    showSearch
                    style={{ width: "100%" }}
                  >
                    <Option value="Account Type" disabled>
                      Account Types
                    </Option>
                    {["Saving", "Current", "Regular"].map((value, index) => (
                      <Option key={index} value={value}>
                        {value}
                      </Option>
                    ))}
                  </Select>
                </Col>
                <Label sm={2}>Bank Mobile Number:</Label>
                <Col sm={4}>
                  {bankDetails.mobileNumber ? (
                    <Input
                      type="tel"
                      value={basic.mobileNumber}
                      placeholder="Phone Number"
                      onChange={e =>
                        this.handleOnChange(e, "bankDetails", "mobileNumber")
                      }
                    />
                  ) : (
                    <Input
                      type="text"
                      id="exampleIFSCode"
                      placeholder="Bank Mobile NUmber"
                      value={bankDetails.mobileNumber}
                      onChange={e =>
                        this.handleOnChange(e, "bankDetails", "mobileNumber")
                      }
                    />
                  )}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Bank Address:</Label>
                <Col sm={4}>
                  <Input
                    type="text"
                    value={bankDetails.bankAddress}
                    placeholder="Bank Address"
                    onChange={e =>
                      this.handleOnChange(e, "bankDetails", "bankAddress")
                    }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Owner Image:</Label>
                <Col sm={4}>
                  <img src={basic.ownerPhoto} alt="" />
                </Col>
                <Label sm={2}>Document Image:</Label>
                <Col sm={4}>
                  {basic.shopDocuments.length ? (
                    basic.shopDocuments.map(doc => (
                      <div key={doc.docName} className="shop-doc-container">
                        <span>{doc.docName}</span>
                        <img
                          className="icon-sm"
                          src={basic.ownerPhoto}
                          alt="Shop Owner Image"
                        />
                      </div>
                    ))
                  ) : (
                    <p>No Documents Uploaded yet</p>
                  )}
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SingleShopEdit;
