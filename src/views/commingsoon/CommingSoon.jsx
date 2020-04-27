import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import filterIcon from '../../assets/img/filterIcon.png';
import ComingSoon from '../../assets/img/ComingSoon.png';

export default class CommingSoon extends Component {
  render() {
 
    return (
      <>
        <div className="content comming-soon">
          {/*
          <div class="customer-filter wallet-row">
            <div class="col-md-9">
              <p>
              Total Sale 
              </p>
            </div>
            <div class="filter-search col-md-3">
              <p><i class="fa fa-search"></i></p>
              <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
            </div>
          </div>
          */}
          <Row>
            <Col md="12">
              <figure className="text-center">
                <img src={ComingSoon} alt="" className=" ComingSoon" />
                <figcaption className="text-center">We will be here soon here</figcaption>
              </figure>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}
