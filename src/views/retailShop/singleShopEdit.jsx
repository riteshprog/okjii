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
  Row
} from "reactstrap";
import { IdcardFilled, BankOutlined, StarOutlined } from "@ant-design/icons";

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
          shopLocation: {}
        },
        bankDetails: {},
        storeCatelogue: {}
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

  onUpdateChange(e) {}

  render() {
    const {
      basic,
      shopInfo,
      storeCatelogue,
      bankDetails
    } = this.state.shopData;

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
                    {/* {shopInfo.shopCode} */}
                    <span className="text-green">OKK</span>P0001
                  </p>
                </Col>
                <Col className="df aic jcfe" sm={2}>
                  <Button className="bg-green">Update</Button>
                </Col>
              </FormGroup>
            </Form>
            <Form className="retail-shop-background">
              <FormGroup row>
                <Label for="exampleSName" sm={2}>
                  Store Name:
                </Label>
                <Col sm={4}>
                  <Input
                    type="name"
                    name="SName"
                    id="exampleSName"
                    value={basic.shopName}
                    placeholder="Store Name:"
                    onChange={this.onUpdateChange.bind(this)}
                  />
                </Col>
                <Label for="exampleOName" sm={2}>
                  Owner Name:
                </Label>
                <Col sm={4}>
                  <Input
                    type="name"
                    name="OName"
                    id="exampleOName"
                    value={basic.ownerName}
                    placeholder="Owner Name:"
                    onChange={this.onUpdateChange.bind(this)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSType" sm={2}>
                  Store Type:
                </Label>
                <Col sm={4}>
                  <Input
                    type="name"
                    name="Stype"
                    id="exampleSType"
                    value={storeCatelogue.storeType}
                    placeholder="Store Type"
                    onChange={this.onUpdateChange.bind(this)}
                  />
                </Col>
                <Label for="exampleMNumber" sm={2}>
                  Mobile Number:
                </Label>
                <Col sm={4}>
                  <Input
                    type="tel"
                    name="MName"
                    id="exampleMNumber"
                    value={basic.mobileNumber}
                    placeholder="Mobile Number"
                    onChange={this.onUpdateChange.bind(this)}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="exampleGLocation" sm={2}>
                  Google Location:
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="GLocation"
                    value={basic.shopLocation.label}
                    id="exampleGLocation"
                    placeholder="Google Location"
                    onChange={this.onUpdateChange.bind(this)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleBName" sm={2}>
                  Bank Name:
                </Label>
                <Col sm={4}>
                  <Input
                    type="name"
                    name="BName"
                    id="exampleBName"
                    value={bankDetails.bankName}
                    placeholder="Bank Name"
                    onChange={this.onUpdateChange.bind(this)}
                  />
                </Col>
                <Label for="exampleMNumber" sm={2}>
                  Acc Holder Name:
                </Label>
                <Col sm={4}>
                  <Input
                    type="Name"
                    name="AHName"
                    id="exampleACName"
                    value={bankDetails.accountHolderName}
                    placeholder="Acc Holder Name"
                    onChange={this.onUpdateChange.bind(this)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleAName" sm={2}>
                  Account Number:
                </Label>
                <Col sm={4}>
                  <Input
                    type="name"
                    name="AName"
                    id="exampleAName"
                    value={bankDetails.accountNumber}
                    placeholder="Account Number"
                    onChange={this.onUpdateChange.bind(this)}
                  />
                </Col>
                <Label for="exampleIFSCode" sm={2}>
                  IFSC Code:
                </Label>
                <Col sm={4}>
                  <Input
                    type="text"
                    name="IFSCode"
                    value={bankDetails.ifscCode}
                    id="exampleIFSCode"
                    placeholder="IFSC Code"
                    onChange={this.onUpdateChange.bind(this)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleAType" sm={2}>
                  Account Type:
                </Label>
                <Col sm={4}>
                  <Input
                    type="name"
                    name="AType"
                    id="exampleAType"
                    value={bankDetails.accountType}
                    placeholder="Account Type"
                    onChange={this.onUpdateChange.bind(this)}
                  />
                </Col>
                <Label for="examplePNumber" sm={2}>
                  Phone Number:
                </Label>
                <Col sm={4}>
                  <Input
                    type="tel"
                    name="PNumber"
                    id="examplePNumber"
                    value={basic.mobileNumber}
                    placeholder="Phone Number"
                    onChange={this.onUpdateChange.bind(this)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleBAddress" sm={2}>
                  Bank Address:
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="BAddress"
                    id="exampleBAddress"
                    value={bankDetails.bankAddress}
                    placeholder="Bank Address"
                    onChange={this.onUpdateChange.bind(this)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleOImage" sm={2}>
                  Owner Image:
                </Label>
                <Col sm={4}>
                  <img src={basic.ownerPhoto} alt="" />
                </Col>
                <Label for="examplePNumber" sm={2}>
                  Document Image:
                </Label>
                <Col sm={4}>
                  <img src={basic.ownerPhoto} alt="" />
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
        {console.log(this.state.shopData)}
      </div>
    );
  }
}

export default SingleShopEdit;
