import React, { Component } from "react";
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

const { Step } = Steps;
const { Option } = Select;
const { TextArea } = Input;

class SingleShopEdit extends Component {
  state = {};
  render() {
    return ( 
      <div className="content">
        <Row>
          <Col md="12 mt-3">
          <Card className="card-user pr-3">
            <CardHeader>
            <CardTitle tag="h5">Basic</CardTitle>
            </CardHeader>
            <CardBody>
        </CardBody>
        </Card>
        </Col>
        </Row>
        </div>
    );
  }
}

export default SingleShopEdit;
