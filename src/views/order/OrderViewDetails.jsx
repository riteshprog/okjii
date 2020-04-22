import React, { Component } from 'react';
import {MDBIcon} from 'mdbreact'
import rupeesSymbol from '../../assets/img/rupeesSymbol.png';
import filterIcon from '../../assets/img/filterIcon.png';
import { Col, Row, Button } from 'reactstrap';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetViewDetails: [
        {_id: 1, 
          OrderId: 987654321,
          Time: '09:45 am',
          Cname: 'Ravi Kumar Singh',
          SName: 'Ravi Kirana Store',
          Item: '05',
          Location: 'Kankarbagh',
          Status: 'Pending',
          VDetails: 'view Details',
        },
        {_id: 2, 
          OrderId: 987654321,
          Time: '09:43 am',
          Cname: 'Praveen Kumar',
          SName: 'Akash Retail Store',
          Item: '07',
          Location: 'Boring Road',
          Status: 'In Process',
          VDetails: 'view Details',
        },
        {_id: 3, 
          OrderId: 987654321,
          Time: '09:40 am',
          Cname: 'Yashwant Singh',
          SName: 'Ramlal Kirana Dukan',
          Item: '03',
          Location: 'Kankarbagh',
          Status: 'Modifing',
          VDetails: 'view Details',
        },
        {_id: 4, 
          OrderId: 987654321,
          Time: '09:35 am',
          Cname: 'Ravinesh Kumar',
          SName: '24&times;Retail Store',
          Item: '05',
          Location: 'Bhoothnath',
          Status: 'Delivered',
          VDetails: 'view Details',
        },
        {_id: 5, 
          OrderId: 987654321,
          Time: '09:31 am',
          Cname: 'Ravi Kumar Singh',
          SName: 'Easy Day Club',
          Item: '10',
          Location: 'Kankarbagh',
          Status: 'Canceled',
          VDetails: 'view Details',
        },
                ]

      }
    }

  render() { 
    return ( 
            <div className="content m-store-view-add order-card">
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

<div className="container-fluid order-details">
  <div md="2">
    <p>Total Order</p>
    <p className="order-list">70</p>
  </div>
  <div md="2">
    <p>Sucessfull Delivered</p>
    <p className="order-list">35</p>
  </div>
  <div md="2">
    <p>Modified Order</p>
    <p className="order-list">14</p>
  </div>
  <div md="2">
    <p>Canceled Order</p>
    <p className="order-list">07</p>
  </div>
  <div md="2">
    <p>Pending Order</p>
    <p className="order-list">07</p>
  </div>
  <div md="2">
    <p>In Process Order</p>
    <p className="order-list">07</p>

  </div>
</div>

<Row className="payment-details">
  <Col md="6">
    <div className="card">
      <p><img src={rupeesSymbol} alt="" /></p>
      <p>Today's Udhaar Order Amount<br />
      <small>on the basic of total payment dues by customer</small></p>
      <p className="text-large">Rs. 2110.00</p>
    </div>
  </Col>
  <Col md="6">
  <div className="card">
      <p><img src={rupeesSymbol} alt="" /></p>
      <p>Today's Total Order Amount<br />
      <small>on the basic of total payment dues by customer</small></p>
      <p className="text-large">Rs. 7450.00</p>
    </div>

  </Col>
</Row>
<MDBTable className="customer-table" responsive striped>
              <MDBTableHead>
                <tr>
                  <th>OrderId</th>
                  <th>Time</th>
                  <th>Customer Name</th>
                  <th>Store Name</th>
                  <th>Items</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>View Details</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              {this.state.targetViewDetails.map((targetv, i)=>(
				      <tr key={targetv._id}>
				          <td><span className="text-green">#</span>{targetv.OrderId}</td>
                  <td>{targetv.Time}</td>
                  <td><span className="text-green">{targetv.Cname}</span></td>
                  <td>{targetv.SName}</td>
                  <td>{targetv.Item}</td>
                  <td>{targetv.Location}</td>
                  <td className={targetv.Status}>{targetv.Status}</td>
                  <td><Button>{targetv.VDetails}</Button></td>
                </tr>
              ))
  }
              </MDBTableBody>
            </MDBTable>
   
      </div>
     );
  }
}
 
export default Order;