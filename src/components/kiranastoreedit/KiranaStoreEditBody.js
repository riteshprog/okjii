import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import EditButton from '../kiranastoreedit/EditButton';

export default class KiranaStoreEditBody extends Component {
  render() {
    return (
      <div className="kirana-store">
        <EditButton />
        <Form>
      <FormGroup row>
        <Label for="exampleSName" sm={2}>Store Name:</Label>
        <Col sm={4}>
          <Input type="name" name="Name" id="exampleSName" placeholder="Store Name:"  />
        </Col>
        <Label for="exampleOName" sm={2}>Owner Name:</Label>
        <Col sm={4}>
          <Input type="name" name="name" id="exampleOName" placeholder="Owner Name:"  />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSType" sm={2}>Store Type:</Label>
        <Col sm={4}>
          <Input type="name" name="Stype" id="exampleSType" placeholder="Store Type"  />
        </Col>
        <Label for="exampleMNumber" sm={2}>Mobile Number:</Label>
        <Col sm={4}>
          <Input type="tel" name="name" id="exampleMNumber" placeholder="Mobile Number"  />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleGLocation" sm={2}>Google Location:</Label>
        <Col sm={10}>
          <Input type="text" name="email" id="exampleGLocation" placeholder="Google Location" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleBName" sm={2}>Bank Name:</Label>
        <Col sm={4}>
          <Input type="name" name="BName" id="exampleBName" placeholder="Bank Name"  />
        </Col>
        <Label for="exampleMNumber" sm={2}>Acc Holder Name:</Label>
        <Col sm={4}>
          <Input type="Name" name="name" id="exampleACName" placeholder="Acc Holder Name"  />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleAName" sm={2}>Account Number:</Label>
        <Col sm={4}>
          <Input type="name" name="AName" id="exampleAName" placeholder="Account Number"  />
        </Col>
        <Label for="exampleIFSCode" sm={2}>IFSC Code:</Label>
        <Col sm={4}>
          <Input type="text" name="name" id="exampleIFSCode" placeholder="IFSC Code"  />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleAType" sm={2}>Account Type:</Label>
        <Col sm={4}>
          <Input type="name" name="AType" id="exampleAType" placeholder="Account Type"  />
        </Col>
        <Label for="examplePNumber" sm={2}>Phone Number:</Label>
        <Col sm={4}>
          <Input type="tel" name="PNumber" id="examplePNumber" placeholder="Phone Number"  />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleBAddress" sm={2}>Bank Address:</Label>
        <Col sm={10}>
          <Input type="text" name="BAddress" id="exampleBAddress" placeholder="Bank Address" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleOImage" sm={2}>Owner Image:</Label>
        <Col sm={4}>
          <p>Placed Images</p>
        </Col>
        <Label for="examplePNumber" sm={2}>Document Image:</Label>
        <Col sm={4}>
          <p>Placed Images</p>
        </Col>
      </FormGroup>

    </Form>
      </div>
    )
  }
}
