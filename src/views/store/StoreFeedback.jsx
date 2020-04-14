import React, { Component } from 'react';
//import NotificationNavBar from './NotificationNavBar'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCollapse, MDBCard, MDBCardBody } from "mdbreact";
import { CustomInput, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Switch } from 'antd';

class StoreFeedBack extends Component {

  render() {
 
    return ( 
      <div className='content notification-container'>
          <Row className="customer-filter">
            <Col md="10"><p>Store <span className="greter-than">></span> Feedback</p></Col>
            <Col md="2" className="filter-search">
            </Col>
          </Row>
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
          <th>FEEDBACK ID</th>
          <th>FEEDBACK PARAMETER</th>
          <th>RATE US </th>
          <th>REVIEW DATE</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td><span className="text-green">Okk</span>01</td>
          <td>Smooth and convenient</td>
          <td><span className="text-green">4 Star</span></td>
          <td>17 Feb 2020</td>
        </tr>
        <tr>
          <td><span className="text-green">Okk</span>04</td>
          <td>Helpful to increase my sell</td>
          <td><span className="text-green">5 Star</span></td>
          <td>21 Jan 2020</td>
        </tr>
        <tr>
          <td><span className="text-green">Okk</span>11</td>
          <td>Smooth and Convenient</td>
          <td><span className="text-green">3 Star</span></td>
          <td>15 Dec 2019</td>
        </tr>
        <tr>
          <td><span className="text-green">Okk</span>07</td>
          <td>Happy to be digital</td>
          <td><span className="text-green">5 Star</span></td>
          <td>17 Nov 2019</td>
          
        </tr>


      </MDBTableBody>
    </MDBTable>

                </div>
     );
  }
}
 
export default StoreFeedBack;