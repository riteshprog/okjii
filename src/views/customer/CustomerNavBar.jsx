import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


export default class CustomerNavBar extends Component {
  render() {
    return (
      <>
        <div className="content">
          <Row className="customer-filter">
            <Col md="4" className="col-5"><p>Store</p></Col>
            <Col md="8" className="filter-search col-7"><p><i class="fas fa-search" /></p>
            <p><span className="filter-txt"> Filter</span> <i class="fas fa-bars"></i></p></Col>
          </Row>
        </div>
      </>
    )
  }
}
