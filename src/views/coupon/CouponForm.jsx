import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class CouponForm extends Component {
  renderRequiredIcon = () => <span className='form-required'> * </span>
  renderRequiredIconWithText = () => <span className='form-required'> * (Cannot be changed once added) </span>
  render() {


    return (
      <>
        <div className="content  coupion-content">
        <div class="customer-filter wallet-row">
          <div class="col-md-9">
            <p>
            Create Coupon 
            </p>
          </div>
          <div class="filter-search col-md-3">
<Button>List</Button>
          </div>
        </div>
        <Row>
          <Col md="6" sm="6">
          <Form>
      <FormGroup>
    <Label for="exampleTitle">Title {this.renderRequiredIcon()}</Label>
        <Input type="text" name="title" id="exampleTitle" placeholder="Title" />
      </FormGroup>
      <FormGroup>
    <Label for="exampleDType">Discount Type {this.renderRequiredIconWithText()}</Label>
        <Input type="text" name="dtype" id="exampleDType" placeholder="Value" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleMDiscount">Maximum Discount {this.renderRequiredIconWithText()}</Label>
        <Input type="text" name="mddiscount" id="exampleMDiscount" placeholder="Enter Maximum Amount" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleVForm">Valid From</Label>
        <Input type="Date" name="vform" id="exampleVForm" placeholder="2020/04/10" />
      </FormGroup>
      </Form>
      <FormGroup>
        <Label for="exampleStatus">Status {this.renderRequiredIcon()}</Label>
        <Input type="text" name="status" id="exampleStatus" placeholder="Active" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Upload Image {this.renderRequiredIcon()}</Label>
        <Input type="file" name="status" id="exampleFile" />
      </FormGroup>
          </Col>
          <Col md="6" sm="6">
          <FormGroup>
           <Label for="exampleCCode">Coupon Code {this.renderRequiredIconWithText()}</Label>
           <Input type="text" name="ccode" id="exampleCCode" placeholder="Coupon Code" />
          </FormGroup>
          <FormGroup>
           <Label for="exampleDValue">Discount Value {this.renderRequiredIconWithText()}</Label>
           <Input type="text" name="dvalue" id="exampleDValue" placeholder="Enter Value" />
          </FormGroup>
          <FormGroup>
           <Label for="exampleULimit">Usage Limit {this.renderRequiredIcon()}</Label>
           <Input type="text" name="ulimit" id="exampleULimit" placeholder="Enter Usage Limit Per User" />
          </FormGroup>
          <FormGroup>
           <Label for="exampleValidTo">Valid To</Label>
           <Input type="date" name="vt" id="exampleValidTo" placeholder="2020/04/04" />
          </FormGroup>
          <FormGroup>
           <Label for="exampleFeatured">Featured {this.renderRequiredIcon()}</Label>
           <Input type="text" name="vtfeatured" id="exampleFeatured" placeholder="Select" />
          </FormGroup>
          <FormGroup>
          </FormGroup>
          </Col>
        </Row> 

        </div>
      </>
    )
  }
}
