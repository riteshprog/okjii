import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label } from 'reactstrap';

export default class EditButton extends Component {
  render() {
    return (
      <div>
        <Form>
        <FormGroup row>
        <Label for="exampleSName" sm={2}>Store Name:</Label>
        <Col sm={8}>
          <p>Ram Lal Kirana Store</p>
          <p><span className="text-green">OKK</span>P0001</p>
        </Col>
        <Col sm={2}>
        <Button className="bg-green">Submit</Button>
        </Col>
      </FormGroup>
      </Form>
      </div>
    )
  }
}
