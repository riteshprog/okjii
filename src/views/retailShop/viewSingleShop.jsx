import React from "react";
import Axios from "axios";
import { Steps, Select, message, Avatar } from "antd";
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
} from "reactstrap";
import "./retailshop.css";

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
        <div className="content">
          <Card>
            <CardBody>
              <Form className="retail-shop">
                <FormGroup row>
                  <Col className="df jcc aic" sm={1}>
                    <img src={basic.ownerPhoto} alt="" className="icon-md" />
                  </Col>
                  <Col sm={8}>
                    <p>{basic.shopName}</p>
                    <p>
                      <span className="text-green">OKK</span>P0001
                    </p>
                  </Col>
                  {window.location.hostname.split('.')[0] == 'Marketing'?(<Col className='df jcc aic' sm={2}>
                    <a
                      href={
                        "/admin/shops/single/edit/" + this.state.shopData._id
                      }
                      className="bg-green"
                    >
                      Edit
                    </a>
                  </Col>):(null)}
                </FormGroup>
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
                  {window.location.hostname.split('.')[0] == 'Marketing'?(<>
                    <p>{basic.mobileNumber}</p>
                  </>):(<p>Secure</p>)}
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
                  {window.location.hostname.split('.')[0] == 'Marketing'?(<>
                    <p>{bankDetails.bankName}</p>
                  </>):(<p>Secure</p>)}
                  </Col>

                  <Label for="exampleMNumber" sm={2}>
                    Acc Holder Name:
                  </Label>
                  <Col sm={4}>
                  {window.location.hostname.split('.')[0] == 'Marketing'?(<>
                    <p>{bankDetails.accountHolderName}</p>
                  </>):(<p>Secure</p>)}
                  </Col>

                </FormGroup>
                
                <FormGroup row inline>
                  <Label for="exampleAName" sm={2}>
                    Account Number:
                  </Label>
                  <Col sm={4}>
                  {window.location.hostname.split('.')[0] == 'Marketing'?(<>
                    <p>{bankDetails.accountNumber}</p>
                  </>):(<p>Secure</p>)}
                  </Col>
                  <Label for="exampleIFSCode" sm={2}>
                    IFSC Code:
                  </Label>
                  <Col sm={4}>
                  {window.location.hostname.split('.')[0] == 'Marketing'?(<>
                    <p>{bankDetails.ifscCode}</p>
                  </>):(<p>Secure</p>)}
                  </Col>
                </FormGroup>
                <FormGroup row inline>
                  <Label for="exampleAType" sm={2}>
                    Account Type:
                  </Label>
                  <Col sm={4}>
                    {window.location.hostname.split('.')[0] == 'Marketing'?(<>
                    {bankDetails.accountType}
                    </>):(<p>Secure</p>)}
                  </Col>
                  <Label for="examplePNumber" sm={2}>
                    Phone Number:
                  </Label>
                  <Col sm={4}>
                  {window.location.hostname.split('.')[0] == 'Marketing'?(<>
                    <p>{basic.mobileNumber}</p>
                  </>):(<p>Secure</p>)}
                  </Col>
                </FormGroup>
                <FormGroup row inline>
                  <Label for="exampleBAddress" sm={2}>
                    Bank Address:
                  </Label>
                  <Col sm={10}>
                  {window.location.hostname.split('.')[0] == 'Marketing'?(<>
                    <p>{bankDetails.bankAddress}</p>
                  </>):(<p>Secure</p>)}
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
          {/* <span>{JSON.stringify(this.state.shopData)}</span> */}
          {console.log(this.state.shopData)}
        </div>
      </>
    );
  }
}
export default AddNewShop;
