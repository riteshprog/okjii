import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


export default class CustomerNavBar extends Component {
  render() {
    return (
      <>
        <div className="content">
          <Row className="customer-filter">
            <Col md="10"><p>Customer</p></Col>
            <Col md="2" className="filter-search"><p><i class="fas fa-search" /></p>
            <p><span className="filter-txt"> Filter</span> <i class="fas fa-bars"></i></p></Col>
          </Row>
        </div>
      </>
    )
  }
}
