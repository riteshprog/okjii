import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';
import filterIcon from '../../../assets/img/filterIcon.png';
import {
  Button, Form, FormGroup, Label, Input,  Row,
  Col
} from "reactstrap";


export default class MarketingAddNewCustomer extends Component {

  render() {
    return (


      <>
       <div className="content add-new-customer">
       <div class="customer-filter">
          <div>
            <p>
            Customer <i class="left-space fa fa-angle-right"></i> Add New Customer
            </p>
          </div>
          <div className="filter-search ">
            <p><i class="fa fa-search"></i></p>
            <p>Add Customer <i class="fas fa-plus mr-2"/></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>

	      </div>
        <div className="details-add-new-customer">
      <Row>
        <Col md="1">
        <Form>
      <FormGroup className="text-center">
        <Label for="exampleAdd">Add</Label><br/>
        <MDBIcon icon="times-circle" />
      </FormGroup>
      </Form>
        </Col>
        <Col md="3">
        <Form>
      <FormGroup>
        <Label for="exampleCName">Customer Name*</Label>
        <Input type="text" name="Cname" id="exampleCName" placeholder="Ravi Kumar Singh" />
      </FormGroup>
      </Form>
        </Col>
        <Col md="3">
        <Form>
      <FormGroup>
        <Label for="exampleCName">Mobile Number*</Label>
        <Input type="tel" name="mNumber" id="examplemNumber" placeholder="+91 9876543210" />
      </FormGroup>
      </Form>

        </Col>
        <Col md="3">
        <Form>
      <FormGroup>
        <Label for="exampleCName">Location*</Label>
        <Input type="text" name="mlocation" id="examplemLocation" placeholder="Pani Tanki Bhoothnath" />
      </FormGroup>
      </Form>

        </Col>
        <Col md="1">
        <Form>
      <FormGroup className="text-center">
        <Label for="exampleCName">Mark</Label>
        <br />
        <MDBIcon far icon="check-square" />
      </FormGroup>
      </Form>
        </Col>
      </Row>

      <Row>
        <Col md="1">
        <Form>
      <FormGroup className="text-center">
      <Label className="text-hiden">times</Label>
        <MDBIcon icon="times-circle" />
      </FormGroup>
      </Form>
        </Col>
        <Col md="3">
        <Form>
      <FormGroup>
        <Label for="exampleCName">Customer Name*</Label>
        <Input type="text" name="Cname" id="exampleCName" placeholder="Aakash Kumar" />
      </FormGroup>
      </Form>
        </Col>
        <Col md="3">
        <Form>
      <FormGroup>
        <Label for="exampleCName">Mobile Number*</Label>
        <Input type="tel" name="mNumber" id="examplemNumber" placeholder="+91 9876543210" />
      </FormGroup>
      </Form>

        </Col>
        <Col md="3">
        <Form>
      <FormGroup>
        <Label for="exampleCName">Location*</Label>
        <Input type="text" name="mlocation" id="examplemLocation" placeholder="Pani Tanki Bhoothnath" />
      </FormGroup>
      </Form>

        </Col>
        <Col md="1">
        <Form>
      <FormGroup className="text-center">
      <Label className="text-hiden">times</Label>
      <MDBIcon far icon="square" />
      </FormGroup>
      </Form>
        </Col>
      </Row>
      <Row>
        <Col md="1">
        <Form>
      <FormGroup className="text-center">
      <Label className="text-hiden">times</Label>
      <MDBIcon icon="plus-square" />
      </FormGroup>
      </Form>
        </Col>
        <Col md="3">
        <Form>
      <FormGroup>
        <Label for="exampleCName">Customer Name*</Label>
        <Input type="text" name="Cname" id="exampleCName" placeholder="Ravinash Kumar" />
      </FormGroup>
      </Form>
        </Col>
        <Col md="3">
        <Form>
      <FormGroup>
        <Label for="exampleCName">Mobile Number*</Label>
        <Input type="tel" name="mNumber" id="examplemNumber" placeholder="+91 9876543210" />
      </FormGroup>
      </Form>

        </Col>
        <Col md="3">
        <Form>
      <FormGroup>
        <Label for="exampleCName">Location*</Label>
        <Input type="text" name="mlocation" id="examplemLocation" placeholder="Pani Tanki Bhoothnath" />
      </FormGroup>
      </Form>

        </Col>
        <Col md="1">
        <Form>
      <FormGroup className="text-center">
      <Label className="text-hiden">times</Label>
      <MDBIcon far icon="check-square" />
            </FormGroup>
      </Form>
        </Col>
      </Row>
<Row className="text-center">
  <Col md="12"><Button>Send Link</Button> </Col>
</Row>
</div>
        </div>
      </>
    )
  }
}
