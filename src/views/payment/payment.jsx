import React, { Component } from 'react';
import { Row, Col, 
  Card,
  CardBody,
} from 'reactstrap';
  import {MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
  import {MDBIcon} from 'mdbreact'
  import filterIcon from '../../assets/img/filterIcon.png';
import TotalOnline from '../../assets/img/TotalOnline.png';
import TotalOffline from '../../assets/img/TotalOffline.png';

export default class Payment extends Component {
  

  render() {

    return (
      <>
      <div className="content total-sals-details">
      <div class="customer-filter">
         <div>
           <p>
           Payment 
           </p>
         </div>
         <div className="filter-search ">
           <p><i class="fa fa-search"></i></p>
           <p> <span className="text-green">Date</span> <MDBIcon icon="calendar-alt" className="calender-icon" /></p>
           <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
         </div>
        </div> 
        <Row >
        <Col md="4">
              <Card>
                <CardBody>
<div className="total-sale-details">
  <div><img src={TotalOnline} alt="" className="table-icon" /></div>
  <div><p>Today's Total Online</p>
  <p className="text-large">Rs. 2110.00</p>
</div>
</div>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
              <CardBody>
              <div className="total-sale-details">
              <div><img src={TotalOffline} alt="" className="table-icon" /></div>
  <div><p>Cash on Delivery</p>
  <p className="text-large">Rs. 2110.00</p>
</div>
</div>
</CardBody>
          </Card>
            </Col>
            <Col md="4">
              <Card>
              <CardBody>
              <div className="total-sale-details">
              <div><img src={TotalOffline} alt="" className="table-icon" /></div>
  <div><p>Pay to Store</p>
  <p className="text-large">Rs. 2110.00</p>
</div>
</div>
</CardBody>
          </Card>
            </Col>

        </Row>


          <Row>
          <Col lg="12" md="12" sm="12"><p className="recent-payment">Recent Payment</p></Col>
        </Row>
        <MDBTable className="customer-table" striped>
      <MDBTableHead>
        <tr className="border-bottom">
          <th className="text-center thead-background" colSpan="2">Online</th>
          <th className="text-center" colSpan="2">Cash on Delivery</th>
          <th className="text-center" colSpan="2">Pay To Store</th>
          
        </tr>
        <tr>
          <th>Time</th>
          <th>Transacation Id</th>
          <th>Order Id</th>
          <th>Customer Id</th>
          <th>Store Name</th>
          <th>Total Amount</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>4:21 PM</td>
          <td><span className="text-green">#</span>98765476573</td>
          <td><span className="text-green">#</span>98765476573</td>
          <td><span className="text-green">#</span>98765476573</td>
          <td><span className="text-green">Ravi Kirana Store</span></td>
          <td><span className="text-green">Rs. 1500</span></td>
        </tr>
        <tr>
          <td>4:21 PM</td>
          <td><span className="text-green">#</span>98765476573</td>
          <td><span className="text-green">#</span>98765476573</td>
          <td><span className="text-green">#</span>98765476573</td>
          <td><span className="text-green">Ravi Kirana Store</span></td>
          <td><span className="text-green">Rs. 1500</span></td>
        </tr>
        <tr>
          <td>4:21 PM</td>
          <td><span className="text-green">#</span>98765476573</td>
          <td><span className="text-green">#</span>98765476573</td>
          <td><span className="text-green">#</span>98765476573</td>
          <td><span className="text-green">Ravi Kirana Store</span></td>
          <td><span className="text-green">Rs. 1500</span></td>
        </tr>
        <tr>
          <td>4:21 PM</td>
          <td><span className="text-green">#</span>98765476573</td>
          <td><span className="text-green">#</span>98765476573</td>
          <td><span className="text-green">#</span>98765476573</td>
          <td><span className="text-green">Ravi Kirana Store</span></td>
          <td><span className="text-green">Rs. 1500</span></td>
        </tr>
        <tr>
          <td>4:21 PM</td>
          <td><span className="text-green">#</span>98765476573</td>
          <td><span className="text-green">#</span>98765476573</td>
          <td><span className="text-green">#</span>98765476573</td>
          <td><span className="text-green">Ravi Kirana Store</span></td>
          <td><span className="text-green">Rs. 1500</span></td>
        </tr>
      </MDBTableBody>
    </MDBTable>
 

        </div>
      </>
    )
  }
}



