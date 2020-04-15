import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import avatar from '../../../img/home/avatar.png';
import CustomerNavBar from '../../customer/CustomerNavBar';
import { Row, Col } from 'reactstrap';



export default class MarketingCustomerDetails extends Component {
  render() {
    return (
      <>
        <div className="content customer-information">
          <div className="content">
          <Row className="customer-filter">
            <Col md="10"><p>New Customer</p></Col>
            <Col md="2" className="filter-search"><p><i class="fas fa-search" /></p>
            <p><span className="filter-txt"> Filter</span> <i class="fas fa-bars"></i></p></Col>
          </Row>
        </div>
          <div className='new-customer'>
             <MDBTable className="customer-table" striped>
              <MDBTableHead>
                <tr>
                  <th><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></th>
                  <th>Serial No.</th>
                  <th>Customer Name</th>
                  <th>Mobile Number</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
                  <td><span className="text-green">Okk</span>P0001</td>
                  <td><span className="text-green">Ravi Kumar Singh</span></td>
                  <td>999XXX1230</td>
                  <td>Kanti Factory, Kankarbagh</td>
                  <td>Installed</td>
                </tr>
                <tr>
                  <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
                  <td><span className="text-green">Okk</span>P0002</td>
                  <td><span className="text-green">Praveen Kumar</span></td>
                  <td>999XXX1230</td>
                  <td>Hanumam Nagar, Kankarbagh</td>
                  <td>Installed</td>
                </tr>
                <tr>
                  <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
                  <td><span className="text-green">Okk</span>P0005</td>
                  <td><span className="text-green">Ravinesh Gupta</span></td>
                  <td>999XXX1230</td>
                  <td>P.C. Colony, Kankarbagh</td>
                  <td>Installed</td>
                </tr>
                <tr>
                  <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
                  <td><span className="text-green">Okk</span>P0007</td>
                  <td><span className="text-green">Sumit Kumar Singh</span></td>
                  <td>999XXX1230</td>
                  <td>Pani Tanki, Bhootnath</td>
                  <td>Installed</td>
                </tr>
                <tr>
                  <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
                  <td><span className="text-green">Okk</span>P0010</td>
                  <td><span className="text-green">Sudhir Kumar</span></td>
                  <td>999XXX1230</td>
                  <td>Main Road, Bhootnath</td>
                  <td>Installed</td>
                </tr>
                <tr>
                  <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
                  <td><span className="text-green">Okk</span>P0013</td>
                  <td><span className="text-green">Yashwant Singh Yadav</span></td>
                  <td>999XXX1230</td>
                  <td>Pani Tanki, BhootNath</td>
                  <td>Installed</td>
                </tr>


              </MDBTableBody>
            </MDBTable>
          </div>
        </div>
      </>
    )
  }
}
