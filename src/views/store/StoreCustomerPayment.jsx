import React, { Component } from 'react';
import { Row, Col, Button, 
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle, } from 'reactstrap';
  import {  MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBCollapse, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import filterIcon from '../../assets/img/filterIcon.png';

import Profile01 from '../../assets/img/Profile-01.png';
import callIcon from '../../assets/img/callIcon.png';
import downloadStatement from '../../assets/img/downloadStatement.png';
import TotalOnline from '../../assets/img/TotalOnline.png';
import TotalOffline from '../../assets/img/TotalOffline.png';
import transaction from '../../assets/img/transaction.png';
import Calender from '../../assets/img/Calender.png';

export default class StoreCustomerPayment extends Component {
  

  render() {

    return (
      <>
        <div className="content  okjii-dashboard reward-content">
        <div class="customer-filter wallet-row">
          <div class="col-md-9">
            <p>
            Store <i class="left-space fa fa-angle-right"></i> Customer Payments 
            </p>
          </div>
          <div class="filter-search col-md-3">
            <p><i class="fa fa-search"></i></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>
        </div>

        <div class="customer-wallets wallet-row">
	        <div class="col-lg-6 col-md-6 col-sm-6">
	          <div class="customer-wallet wallet-stats">
	            <div class="wallet-body">
	              <div class="wallet-row">
	                <div class=" wallet-img text-center icon-warning">
	                   <img src={Profile01} alt="" width="60"/>
	                </div>
	                <div class="numbers">
	                  <p><span class="text-green">Ravi Kirana Store</span></p>
	                  <p><span class="text-green">Okk</span>P0001</p>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	        <div class="col-lg-6 col-md-6 col-sm-6">
	          <div class="customer-wallet wallet-stats">
	            <div class="profile-body">
	              <div class="wallet-row">
	                <div class="profile">
	                  <p>9998888777</p>
	                  <p>Kanti, Factory Kankarbagh, Patna</p>
	                </div>
	                <div class="text-center">
	                   <a href="tel:9998888777"><img src={callIcon} className="callicon"/></a>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
<Row >
  <Col md="6" sm="6">
    <div className="card card-payment">
      <p><img src={TotalOnline} alt="" className="TotalOnline" /> Today's Total Online <img src={Calender} alt="" className="Calender" /></p>
      <p className="payment-rupee float-right">4710.00</p>
    </div>
  </Col>
  <Col md="6" sm="6"><div className="card card-payment">
      <p><img src={TotalOffline} alt="" className="TotalOnline" /> Today's Total Offline <img src={Calender} alt="" className="Calender" /></p>
      <p className="payment-rupee float-right">2110.00</p>
</div></Col>
</Row>
<Row >
  <Col md="6" sm="6">
    <div className="card card-download">
      <p><img src={transaction} alt="" className="transaction" /> View Previous Settlement <i class="fa fa-chevron-right" /></p>
    </div>
  </Col>
  <Col md="6" sm="6"><div className="card card-download">
      <p><img src={downloadStatement} alt="" className="TotalOnline" /> Download Statement <i class="fa fa-chevron-right" /></p>
</div>
</Col>
</Row>
          <Row>
          <Col lg="12" md="12" sm="12"><p className="dashbord-text">Redeem History</p></Col>
        </Row>
      <MDBTable className="customer-table" striped>
      <MDBTableHead>
        <tr>
          <th>Time</th>
          <th>Date</th>
          <th>Transaction ID</th>
          <th>Customer</th>
          <th>Medium</th>
          <th>Total Amount</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>04:21 PM</td>
          <td>25 Mar</td>
          <td>#98765476573</td>
          <td><span className="text-green">Ravi Kumar Singh</span></td>
          <td>Cash on Delivery</td>
          <td><span className="text-green">Rs. 1500</span></td>
        </tr>
        <tr>
          <td>04:21 PM</td>
          <td>18 Mar</td>
          <td>#98765476573</td>
          <td><span className="text-green">Soni Singh</span></td>
          <td>Pay Via PhonePe</td>
          <td><span className="text-green">Rs. 1500</span></td>
        </tr>
        <tr>
          <td>04:21 PM</td>
          <td>11 Mar</td>
          <td>#98765476573</td>
          <td><span className="text-green">Abhishek Kumar</span></td>
          <td>Transaction Via Wallet</td>
          <td><span className="text-green">Rs. 1500</span></td>
        </tr>


      </MDBTableBody>
    </MDBTable>
 

        </div>
      </>
    )
  }
}
