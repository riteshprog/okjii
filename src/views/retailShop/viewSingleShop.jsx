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
  Input
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
        basic: {}
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
    const { basic, shopInfo } = this.state.shopData;
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
          <Row>
            <Card className="card-user pr-3 fg-1">
              <CardHeader>
                <CardTitle tag="h5">Basic</CardTitle>
              </CardHeader>
              <CardBody>
                <Col className="pr-1" md={6}  >
                  <span>{basic.shopName}</span>
                </Col>
                <Col className="pr-1" md={6}>
                  <span>{basic.shopName}</span>
                </Col>
              </CardBody>
            </Card>
          </Row>
          <span>{JSON.stringify(this.state.shopData)}</span>
          
        </div>
      </>
    );
  }
}
export default AddNewShop;
