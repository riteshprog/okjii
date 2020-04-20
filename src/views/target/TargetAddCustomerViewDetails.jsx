import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import avatar from '../../img/home/avatar.png';
import {
  Card,
  CardBody,
  Row,
  Col,
} from "reactstrap";

import filterIcon from '../../assets/img/filterIcon.png';
import AddStore1 from '../../assets/img/AddStore.png';
import Time from '../../assets/img/Time.png';



export default class TargetAddCustomerViewDetails extends Component {
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
       <div className="content target-view-card">
       <div class="customer-filter">
          <div>
            <p>
            Target <i class="left-space fa fa-angle-right"></i> Add Customer (View Details)
            </p>
          </div>
          <div className="filter-search ">
            <p><i class="fa fa-search"></i></p>
            <p>Add Customer <i class="fas fa-plus mr-2"/></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>

	      </div>
<h4>Target complete in 10 April 2020 to 20 April 2020</h4>
        <Row >
        <Col md="6">
              <Card>
                <CardBody>
<div className="target-view-details">
  <p><img src={AddStore1} alt="" className="table-icon" /> Add Summary</p>
  <p className="text-large">07 / 01</p>
</div>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
              <CardBody>
              <div className="target-view-details1">
  <p><img src={Time} alt="" className="table-icon" /> Day Summary</p>
  <p className="text-large">07D / 10D</p>
</div>
</CardBody>
          </Card>
            </Col>

        </Row>
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
      </>
    )
  }
}
