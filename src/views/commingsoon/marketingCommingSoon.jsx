import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import filterIcon from '../../assets/img/filterIcon.png';
import ComingSoon from '../../assets/img/ComingSoon.png';

export default class MarketingCommingSoon extends Component {
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
          <div>
          <h4> Support Videos</h4>
          </div>
          <Row>
            <Col lg="4" md="6" sm="12">
              <iframe className="marketing-iframe"
              src="https://www.youtube.com/embed/D6LYJXhcBdU">
              </iframe>
            </Col>
            <Col lg="4" md="6" sm="12">
              <iframe className="marketing-iframe"
              src="https://www.youtube.com/embed/VKlrRn4Q0a0">
              </iframe>
            </Col>
            <Col lg="4" md="6" sm="12">
              <iframe className="marketing-iframe"
              src="https://www.youtube.com/embed/V7l8BYhahvc">
              </iframe>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}
