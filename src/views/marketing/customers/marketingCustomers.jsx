import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import avatar from '../../../img/home/avatar.png';
import CustomerNavBar from '../../customer/CustomerNavBar';
import { Row, Col } from 'reactstrap';



export default class MarketingCustomerDetails extends Component {
    constructor(props) {
    super(props);
    this.state = {
      targetViewDetails: [
        {_id: 1, 
          CustomerID: '9876543210',
          CustomerName: 'Ram Lal Kumar',
          Location: 'P.C. Colony, Kankarbagh',
          Time: '09: 10 am',
          Day: 'Today',
          Status: 'Link Sent',
        },
        {_id: 2, 
          CustomerID: '9876543210',
          CustomerName: 'Ravi Retail Shop',
          Location: 'P.C. Colony, Kankarbagh',
          Time: '09: 10 am',
          Day: 'Today',
          Status: 'Install Successfully',
        },
        {_id: 3, 
          CustomerID: '9876543210',
          CustomerName: 'Akash Kirana Dukan',
          Location: 'P.C. Colony, Kankarbagh',
          Time: '09: 10 am',
          Day: 'Today',
          Status: 'Install Successfully',
        },
        {_id: 4, 
          CustomerID: '9876543210',
          CustomerName: 'Ram Lal Kirana Store',
          Location: 'Main Road, Bhootnath',
          Time: '09: 10 am',
          Day: '15 Apr',
          Status: 'Install Successfully',
        },
        {_id: 5, 
          CustomerID: '9876543210',
          CustomerName: 'Ravi Retail Shop',
          Location: 'Main Road, Bhootnath',
          Time: '09: 10 am',
          Day: '15 Apr',
          Status: 'Install Successfully',
        },
        {_id: 6, 
          CustomerID: '9876543210',
          CustomerName: 'Akash Kirana Dukan',
          Location: 'Main Road, Bhootnath',
          Time: '09: 10 am',
          Day: '15 Apr',
          Status: 'Install Successfully',
        },
                ]

      }
    }
  render() {
    return (
      <>
        <div className="content customer-information">
          <div className="content">
          <Row className="customer-filter">
            <Col md="6" className="col-6"><p>New Customer</p></Col>
            <Col md="6" className="filter-search col-6"><p><i class="fas fa-search" /></p>
              <p ><Link to='/admin/Addcustomer/add-customer' className='t-text op8' >Add New Customer<i class="fas fa-plus mr-2"/></Link></p>
            <p><span className="filter-txt"> Filter</span> <i class="fas fa-bars"></i></p></Col>
          </Row>
        </div>
          <div className='new-customer'>
            <MDBTable className="customer-table" responsive striped>
              <MDBTableHead>
                <tr>
                  <th>Customer Id.</th>
                  <th>Customer Name</th>
                  <th>Location</th>
                  <th>Time</th>
                  <th>Day</th>
                  <th>Status</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              {this.state.targetViewDetails.map((targetv, i)=>(
              <tr key={targetv._id}>
                  <td><span className="text-green">#</span>{targetv.CustomerID}</td>
                  <td><span className="text-green">{targetv.CustomerName}</span>
                  </td>
                  <td>{targetv.Location}</td>
                  <td>{targetv.Time}</td>
                  <td>{targetv.Day}</td>
                  <td><span className="text-green">{targetv.Status}</span></td>
                </tr>
              ))
  }


              </MDBTableBody>
            </MDBTable>
          </div>
        </div>
      </>
    )
  }
}
