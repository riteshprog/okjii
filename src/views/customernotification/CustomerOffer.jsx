
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBInput } from "mdbreact";
import avatar from '../../img/home/avatar.png';
import { Row, Col } from 'reactstrap';
import { Checkbox, Form } from 'antd';



export default class CustomerNotification extends Component {
  render() {
      return (
      <>
        <div className="content customer-offer">
        <Row className="customer-filter">
            <Col md="12"><p>Customer <span className="greter-than">></span> Offer</p></Col>
        </Row>
        <Row>
          <Col md="12"><p>Your Offer</p></Col>
        </Row>
         <MDBTable className="customer-table" striped>
      <MDBTableHead>
        <tr>
          <th className="text-center thead-background" colSpan="2">All</th>
          <th className="text-center">Applied</th>
          <th className="text-center" colSpan="2">Expired</th>
          
        </tr>
        <tr>
          <th>Offer ID</th>
          <th>Offer Name</th>
          <th></th>
          <th>Expiry Date</th>
          <th>Status</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td><span className="text-green">Okk</span>01</td>
          <td colSpan="2">Get 20 % off on okkji fast service</td>
          <td>17 Nov 2019</td>
          <td>Applied</td>
        </tr>
        <tr>
          <td><span className="text-green">Okk</span>02</td>
          <td colSpan="2">Get upto 200 rs off on every monthly purchesing greater than 3000</td>
          <td>15 Dec 2019</td>
          <td>Applied</td>
        </tr>
        <tr>
          <td><span className="text-green">Okk</span>01</td>
          <td colSpan="2">Get 20 % off on okkji fast service for three month</td>
          <td>20 Feb 2019</td>
          <td></td>
        </tr>

      </MDBTableBody>
    </MDBTable>

    <Row>
          <Col md="12"><p className="mt-4">Cashback Benefit</p></Col>
        </Row>
         <MDBTable className="customer-table" striped>
      <MDBTableHead>
        <tr>
          <th  className="text-center thead-background" colSpan="2" >All</th>
          <th className="text-center">Applied</th>
          <th className="text-center" colSpan="2">Expired</th>
        </tr>
        <tr>
          <th>Offer ID</th>
          <th>Offer Name</th>
          <th></th>
          <th>Expiry Date</th>
          <th>Status</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td><span className="text-green">Okk</span>01</td>
          <td colSpan="2">Get 20 % off on okkji fast service</td>
          <td>17 Nov 2019</td>
          <td>Applied</td>
        </tr>

      </MDBTableBody>
    </MDBTable>
   
        </div>
      </>
    )
  }
}
