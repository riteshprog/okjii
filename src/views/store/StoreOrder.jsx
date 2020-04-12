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
import Bulb from '../../assets/img/Bulb.png';
import Acceptorder from '../../assets/img/Acceptorder.png';
import PickPay from '../../assets/img/PickPay.png';
import Coin from '../../assets/img/Coin.png';
import Reviews from '../../assets/img/Reviews.png';
import TotalEarning from '../../assets/img/TotalEarning.png';

export default class StoreOrder extends Component {
  render() {
 
    return (
      <>
        <div className="content store-order">
        <div class="customer-filter wallet-row">
          <div class="col-md-9">
            <p>
            Store <i class="left-space fa fa-angle-right"></i> Order 
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
	                  <p>Track your current order Status</p>
	                </div>
	                <div class="text-center">
	                   <a href="tel:9998888777"><img src={Bulb} className="Bulb"/></a>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
        <MDBTable className="customer-table" striped>
      <MDBTableHead>
        <tr>
          <th className="text-center thead-background" colSpan="2">All</th>
          <th className="text-center" colSpan="2">Pending</th>
          <th className="text-center" colSpan="2">Delivered</th>
          <th className="text-center" colSpan="2">Cancelled</th>
          
        </tr>
        <tr>
          <th><img src={Profile01} alt=""/></th>
          <th>Customer Name</th>
          <th>Order ID</th>
          <th>Status</th>
          <th className="text-center">Amount</th>
          <th className="text-center">Time</th>
          <th className="text-center">Day</th>
          <th className="text-center">View Details</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td><img src={Profile01} alt=""/></td>
          <td><span className="text-green">Ram Lal Singh</span></td>
          <td><span className="text-green">#98765432</span></td>
          <td>Order Delivered</td>
          <td className="text-center">400</td>
          <td className="text-center">04:50 PM</td>
          <td className="text-center">TODAY</td>
          <td className="text-center"><Button>View Details</Button></td>
        </tr>
        <tr>
          <td><img src={Profile01} alt=""/></td>
          <td><span className="text-green">Ravi Kumar Singh</span></td>
          <td><span className="text-green">#98765432</span></td>
          <td><span className="text-green">Order Pending</span></td>
          <td className="text-center">500</td>
          <td className="text-center">10:30 AM</td>
          <td className="text-center">24 Feb</td>
          <td className="text-center"><Button>View Details</Button></td>
        </tr>
        <tr>
          <td><img src={Profile01} alt=""/></td>
          <td><span className="text-green">Ramesh Kumar</span></td>
          <td><span className="text-green">#98765432</span></td>
          <td>Order Delivered</td>
          <td className="text-center">1500</td>
          <td className="text-center">04:00 PM</td>
          <td className="text-center">23 Feb</td>
          <td className="text-center"><Button>View Details</Button></td>
        </tr>
        <tr>
          <td><img src={Profile01} alt=""/></td>
          <td><span className="text-green">Aakash Kumar</span></td>
          <td><span className="text-green">#98765432</span></td>
          <td>Order Delivered</td>
          <td className="text-center">1200</td>
          <td className="text-center">11:20 AM</td>
          <td className="text-center">23 Feb</td>
          <td className="text-center"><Button>View Details</Button></td>
        </tr>
        <tr>
          <td><img src={Profile01} alt=""/></td>
          <td><span className="text-green">Ramesh Gupta</span></td>
          <td><span className="text-green">#98765432</span></td>
          <td><span className="text-danger">Order Canceled</span></td>
          <td className="text-center">600</td>
          <td className="text-center">04:00 PM</td>
          <td className="text-center">22 Jan</td>
          <td className="text-center"><Button>View Details</Button></td>
        </tr>
        <tr>
          <td><img src={Profile01} alt=""/></td>
          <td><span className="text-green">Ravi Kumar Singh</span></td>
          <td><span className="text-green">#98765432</span></td>
          <td>Order Delivered</td>
          <td className="text-center">1700</td>
          <td className="text-center">09:40 AM</td>
          <td className="text-center">15 Jan</td>
          <td className="text-center"><Button>View Details</Button></td>
        </tr>

      </MDBTableBody>
    </MDBTable>

 

        </div>
      </>
    )
  }
}
