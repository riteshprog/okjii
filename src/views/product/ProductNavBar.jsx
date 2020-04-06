import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


export default class ProductNavBar extends Component {
  render() {
    return (
      <>
        <div className="content">
          <Row className="customer-filter">
            <Col md="9"><p>Store <span className="greter-than">></span> Product</p></Col>
            <Col md="3" className="filter-search"><p><i class="fas fa-search" /></p>
            <p><i class="fas fa-plus"  /></p>
            <p><span className="filter-txt"> Filter</span> <i class="fas fa-bars"></i></p></Col>
          </Row>
        </div>
      </>
    )
  }
}
