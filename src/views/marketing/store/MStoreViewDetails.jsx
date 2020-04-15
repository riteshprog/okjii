
import React, { Component } from 'react';
import avatar from '../../../img/home/avatar.png';
//import { MDBSwitch } from "mdbreact";
import { 
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  CustomInput, 
 } from 'reactstrap';


import Axios from "axios";
import { Steps, Select, message, Avatar } from "antd";
import filterIcon from '../../../assets/img/filterIcon.png';



export default class MStoreViewDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addNewShopModalVisibility: true,
      currentStep: 0,
      isShopSaved: false,
      hasOwnerAvtar: false,
      shopData: {
        basic: {
          shopLocation: {},
          shopDocuments: []
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
    const {
      basic,
      shopInfo,
      storeCatelogue,
      bankDetails
    } = this.state.shopData;

    return (
      <>
       <div className="content  m-store-view">
       <div class="customer-filter">
          <div>
            <p>
            Store 
            </p>
          </div>
          <div className="filter-search ">
            <p><i class="fa fa-search"></i></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>

	      </div>
        <div class="customer-filter filter-border-none">
          <div className="filter-search">
            <p>
            <img src={avatar} className="rounded-circle testimoni-img" width="60" height="60" alt="avatar" />
            </p>
            <p><span className="text-green">Ravi Kumar Singh</span><br />
              <span className="text-green">Okk</span>P0001
              </p>

          </div>
          <div className="right-navbar">
          <p>Medium Store</p>
              <p>Store Timing: 09:00 am - 10.00pm</p>
                        </div>

	      </div>

          <div className="customer-table customer-details">
            <Card>
            <CardBody>
              <Form className="retail-shop">
              </Form>
              <Form className="retail-shop-background">
                <FormGroup row inline>
                  <Label for="exampleSName" sm={2}>
                    Store Name:
                  </Label>
                  <Col sm={4}>
                    <p>{basic.shopName}</p>
                  </Col>
                  <Label for="exampleOName" sm={2}>
                    Owner Name:
                  </Label>
                  <Col sm={4}>
                    <p>{basic.ownerName}</p>
                  </Col>
                </FormGroup>
                <FormGroup row inline>
                  <Label for="exampleSType" sm={2}>
                    Store Type:
                  </Label>
                  <Col sm={4}>
                    <p>{storeCatelogue.storeType}</p>
                  </Col>
                  <Label for="exampleMNumber" sm={2}>
                    Mobile Number:
                  </Label>
                  <Col sm={4}>
                    <p>{basic.mobileNumber}</p>
                  </Col>
                </FormGroup>

                <FormGroup row inline>
                  <Label for="exampleGLocation" sm={2}>
                    Google Location:
                  </Label>
                  <Col sm={10}>
                    <p>{basic.shopLocation.label}</p>
                  </Col>
                </FormGroup>
                <FormGroup row inline>
                  <Label for="exampleBName" sm={2}>
                    Bank Name:
                  </Label>
                  <Col sm={4}>
                    <p>{bankDetails.bankName}</p>
                  </Col>
                  <Label for="exampleMNumber" sm={2}>
                    Acc Holder Name:
                  </Label>
                  <Col sm={4}>
                    <p>{bankDetails.accountHolderName}</p>
                  </Col>
                </FormGroup>
                <FormGroup row inline>
                  <Label for="exampleAName" sm={2}>
                    Account Number:
                  </Label>
                  <Col sm={4}>
                    <p>{bankDetails.accountNumber}</p>
                  </Col>
                  <Label for="exampleIFSCode" sm={2}>
                    IFSC Code:
                  </Label>
                  <Col sm={4}>
                    <p>{bankDetails.ifscCode}</p>
                  </Col>
                </FormGroup>
                <FormGroup row inline>
                  <Label for="exampleAType" sm={2}>
                    Account Type:
                  </Label>
                  <Col sm={4}>{bankDetails.accountType}</Col>
                  <Label for="examplePNumber" sm={2}>
                    Phone Number:
                  </Label>
                  <Col sm={4}>
                    <p>{basic.mobileNumber}</p>
                  </Col>
                </FormGroup>
                <FormGroup row inline>
                  <Label for="exampleBAddress" sm={2}>
                    Bank Address:
                  </Label>
                  <Col sm={10}>
                    <p>{bankDetails.bankAddress}</p>
                  </Col>
                </FormGroup>
                <FormGroup row inline>
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
                    {basic.shopDocuments.map(doc => (
                      <div className="shop-doc-container">
                      <span>{doc.docName}</span>
                        <img
                          className="icon-sm"
                          src={basic.ownerPhoto}
                          alt=""
                        />
                      </div>
                    ))}
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
          {console.log(this.state.shopData)}
            </div>
        </div>
      </>
    )
  }
}
