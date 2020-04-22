import React, { Component } from 'react';
import {MDBIcon} from 'mdbreact'
import filterIcon from '../../assets/img/filterIcon.png';
import { Col, Row } from 'reactstrap';

class Order extends Component {

  render() { 
    return ( 
            <div className="content m-store-view-add target-card">
       <div class="customer-filter">
          <div>
            <p>
            Order 
            </p>
          </div>
          <div className="filter-search ">
            <p><i class="fa fa-search"></i></p>
            <p> <MDBIcon icon="calendar-alt" className="calender-icon" /></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>
</div>
<Row className="order-details">
  <Col md="2">
    <p>Total Order</p>
    <p className="order-list">70</p>
  </Col>
  <Col md="2">
    <p>Sucessfull Delivered</p>
    <p className="order-list">35</p>
  </Col>
  <Col md="2">
    <p>Modified Order</p>
    <p className="order-list">14</p>
  </Col>
  <Col md="2">
    <p>Canceled Order</p>
    <p className="order-list">07</p>
  </Col>
  <Col md="2">
    <p>Pending Order</p>
    <p className="order-list">07</p>
  </Col>
  <Col md="2">
    <p>In Process Order</p>
    <p className="order-list">07</p>

  </Col>
</Row>


      </div>
     );
  }
}
 
export default Order;