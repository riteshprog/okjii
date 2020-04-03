import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



export default class BlogAdd extends Component {
  render() {
    return (
      <>
        <div className="content add-blog-page">
        <Row className="blog-navbar">
            <Col md="10"><p>Add Blog</p></Col>
            <Col md="2"><p><Link to="admin/blog" type="button" className="btn">BACK</Link> </p></Col>
          </Row>
          <Form className="add-blog">
      <FormGroup>
        <Label for="exampleBlogType">Blog Type <span className="text-danger">*</span></Label>
        <Input type="text" name="btype" id="exampleBlogType" placeholder="Selected Heading" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleBlogTitle">Blog Title <span className="text-danger">*</span></Label>
        <Input type="text" name="btitle" id="exampleBlogTitle" placeholder="Enter Blog Title" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleBlogSlug">Blog Slug <span className="text-danger">*</span></Label>
        <Input type="text" name="bslug" id="exampleBlogSlug" placeholder="Enter Blog Slug" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDiscription">Discription <span className="text-danger">*</span></Label>
        <Input type="textarea" name="text" id="exampleDiscription" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleBlogTag">Tag <span className="text-danger">*</span></Label>
        <Input type="text" name="btag" id="exampleBlogTag" placeholder="Enter Blog Tag" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Featured image</Label>
        <br />
        <Input type="file" name="file" id="exampleFile" placeholder="" />
        <FormText color="muted"> 

        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleBlogTag">Status <span className="text-danger">*</span></Label>
        <Input type="text" name="btag" id="exampleBlogTag" placeholder="Active" />
      </FormGroup>
      <Button className="text-center">Add</Button>
      </Form>
   
        </div>
      </>
    )
  }
}
