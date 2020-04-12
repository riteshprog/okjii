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

export default class StoreCurrentOrder extends Component {
  render() {
 
    return (
      <>
        <div className="content store-order store-customer-order">
        <div class="customer-filter wallet-row">
          <div class="col-md-9">
            <p>
            Store <i class="left-space fa fa-angle-right"></i> Order <i class="left-space fa fa-angle-right"></i> Current Order 
            </p>
          </div>
          <div class="filter-search col-md-3">
            <p><i class="fa fa-search"></i></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>
        </div>

        <div class=" wallet-row">
	        <div class="col-lg-6 col-md-6 col-sm-6">
	          <div class="customer-wallet wallet-stats">
	            <div class="wallet-body">
	              <div class="wallet-row">
	                <div class=" wallet-img text-center icon-warning">
	                   <img src={Profile01} width="60" alt=""/>
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
	              <div class="wallet-row order-bulb">
	                <div class="profile">
	                  <p>9998888777</p>
                    <p>Kanti Factory, Kankarbagh, Patna</p>
	                </div>
	                <div class="text-center">
	                   <a href="tel:9998888777"><img src={callIcon} className="callIcon"/></a>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
        <MDBTable className="customer-table" striped>
      <MDBTableHead>
        <tr>
          <th><img src={Profile01} alt=""/></th>
          <th>Customer Name</th>
          <th className="text-center">Time</th>
          <th>Distance</th>
          <th>No. Of Items</th>
          <th>Amount</th>
          <th>Status</th>
          <th className="text-center">View Details</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td><img src={Profile01} alt=""/></td>
          <td><span className="text-green">Ram Lal Singh</span></td>
          <td className="text-center">04.50 PM </td>
          <td>700 M</td>
          <td><span className="text-green">05 Items</span></td>
          <td>400</td>
          <td><span className="text-danger">Not Accepteed</span></td>
          <td className="text-center"><Button>View Details</Button></td>
        </tr>
        <tr>
          <td><img src={Profile01} alt=""/></td>
          <td><span className="text-green">Ravi Kumar Singh</span></td>
          <td className="text-center">10.30 AM </td>
          <td>550 M</td>
          <td><span className="text-green">07 Items</span></td>
          <td>500</td>
          <td><span className="text-green">Modifing</span></td>
          <td className="text-center"><Button>View Details</Button></td>
        </tr>
        <tr>
          <td><img src={Profile01} alt=""/></td>
          <td><span className="text-green">Ramesh Kumar</span></td>
          <td className="text-center">04.00 PM </td>
          <td>1.2 KM</td>
          <td><span className="text-green">03 Items</span></td>
          <td>1500</td>
          <td><span className="text-orange">In Process...</span></td>
          <td className="text-center"><Button>View Details</Button></td>
        </tr>

      </MDBTableBody>
    </MDBTable>

 

        </div>
      </>
    )
  }
}
