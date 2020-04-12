import React, { Component, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AddFAQ extends Component {
  renderRequiredIcon = () => <span className='form-required'> * </span>
  render() {


    return (
      <>
        <div className="content  coupion-content">
        <div class="customer-filter wallet-row">
          <div class="col-md-9">
            <p>
            Add Faqs 
            </p>
          </div>
          <div class="filter-search col-md-3">
          <Link class="wallet-link" to="/admin/coupon/add-faq"><Button>Back</Button></Link>
          </div>
        </div>
        <Row>
          <Col md="12" sm="12">
          <Form>
      <FormGroup>
    <Label for="exampleFaqType">FAQ Type {this.renderRequiredIcon()}</Label>
        <Input type="text" name="faqtype" id="exampleFaqType" placeholder="Select FAQ Type" />
      </FormGroup>
      <FormGroup>
    <Label for="exampleTitle">Title {this.renderRequiredIcon()}</Label>
        <Input type="text" name="title" id="exampleTitle" placeholder="Enter Page Title" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDescription">Description {this.renderRequiredIcon()}</Label>
        <Editor
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={this.onEditorStateChange}
/>      </FormGroup>
      <FormGroup>
    <Label for="exampleStatus">Status {this.renderRequiredIcon()}</Label>
        <Input type="text" name="dtype" id="exampleDType" placeholder="Select Status" />
      </FormGroup>
      <FormGroup className="text-center">
        <Button>Add</Button>
      </FormGroup>
    </Form>
          </Col>
        </Row> 

        </div>
      </>
    )
  }
}
