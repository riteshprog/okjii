import React from "react";
import Axios from "axios";
import { Steps, Select, message } from "antd";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Input,
  Form, 
  FormGroup, 
  Label,
  Button 
} from "reactstrap";

import { IdcardFilled, BankOutlined, StarOutlined } from "@ant-design/icons";

import "./retailshop.css";

const { Step } = Steps;
const { Option } = Select;
const { TextArea } = Input;

class AddNewShop extends React.Component {
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

  render() {
    const { basic, shopInfo, storeCatelogue, bankDetails } = this.state.shopData;
    return (
      <>
        <div className="content">
          <Row className='mb-4'>
            <Steps size="small" current={this.state.currentStep}>
              <Step
                title={
                  <span className="step" onClick={() => this.changeStep(0)}>
                    Basic
                  </span>
                }
                icon={<IdcardFilled type="idcard" />}
              />
              <Step
                title={
                  <span className="step" onClick={() => this.changeStep(1)}>
                    Bank Details
                  </span>
                }
                icon={<BankOutlined />}
              />
              <Step
                title={
                  <span className="step" onClick={() => this.changeStep(4)}>
                    Store Product/Catelog
                  </span>
                }
                icon={<StarOutlined />}
              />
            </Steps>
          </Row>
          <Form className="retail-shop">
        <FormGroup row>
        <Col sm={2}><img src={basic.ownerPhoto} alt="" /></Col>
        <Col sm={8}>
          <p>{basic.shopName}</p>
          <p><span className="text-green">OKK</span>P0001</p>
        </Col>
        <Col sm={2}>
        <a href={'/admin/shops/single/edit/' + this.state.shopData._id}  className="bg-green">Edit</a>
        </Col>
      </FormGroup>
      </Form>
          <Form className="retail-shop-background">
      <FormGroup row inline>
        <Label for="exampleSName" sm={2}>Store Name:</Label>
        <Col sm={4}>
          <p>{basic.shopName}</p>
        </Col>
        <Label for="exampleOName" sm={2}>Owner Name:</Label>
        <Col sm={4}>
            <p>{basic.ownerName}</p>
        </Col>
      </FormGroup>
      <FormGroup row inline>
        <Label for="exampleSType" sm={2}>Store Type:</Label>
        <Col sm={4}>
              <p>{storeCatelogue.storeType}</p>
        </Col>
        <Label for="exampleMNumber" sm={2}>Mobile Number:</Label>
        <Col sm={4}>
              <p>{basic.mobileNumber}</p>
        </Col>
      </FormGroup>

      <FormGroup row inline>
        <Label for="exampleGLocation" sm={2}>Google Location:</Label>
        <Col sm={10}>
              <p>{basic.shopLocation.label}</p>
        </Col>
      </FormGroup>
      <FormGroup row inline>
        <Label for="exampleBName" sm={2}>Bank Name:</Label>
        <Col sm={4}>
              <p>{bankDetails.bankName}</p>
        </Col>
        <Label for="exampleMNumber" sm={2}>Acc Holder Name:</Label>
        <Col sm={4}>
              <p>{bankDetails.accountHolderName}</p>
        </Col>
      </FormGroup>
      <FormGroup row inline>
        <Label for="exampleAName" sm={2}>Account Number:</Label>
        <Col sm={4}>
              <p>{bankDetails.accountNumber}</p>
        </Col>
        <Label for="exampleIFSCode" sm={2}>IFSC Code:</Label>
        <Col sm={4}>
              <p>{bankDetails.ifscCode}</p>
        </Col>
      </FormGroup>
      <FormGroup row inline>
        <Label for="exampleAType" sm={2}>Account Type:</Label>
        <Col sm={4}>
          {bankDetails.accountType}
        </Col>
        <Label for="examplePNumber" sm={2}>Phone Number:</Label>
        <Col sm={4}>
          <p>{basic.mobileNumber}</p>
        </Col>
      </FormGroup>
      <FormGroup row inline>
        <Label for="exampleBAddress" sm={2}>Bank Address:</Label>
        <Col sm={10}>
              <p>{bankDetails.bankAddress}</p>
        </Col>
      </FormGroup>
      <FormGroup row inline>
        <Label for="exampleOImage" sm={2}>Owner Image:</Label>
        <Col sm={4}>
        <img src={basic.ownerPhoto} alt="" />
        </Col>
        <Label for="examplePNumber" sm={2}>Document Image:</Label>
        <Col sm={4}>
          <img src={basic.ownerPhoto} alt="" />
        </Col>
      </FormGroup>

    </Form>
          {/* <span>{JSON.stringify(this.state.shopData)}</span> */}
          {console.log(this.state.shopData)}
        </div>
      </>
    );
  }
}
export default AddNewShop;
