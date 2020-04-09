import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBInput } from "mdbreact";
import avatar from '../../img/home/avatar.png';
import { Row, Col } from 'reactstrap';
import { Checkbox, Form } from 'antd';



export default class StoreNotification extends Component {
  render() {
      return (
      <>
        <div className="content customer-notification">
        <Row className="customer-filter">
            <Col md="8"><p>Store <span className="greter-than">></span> Notification</p></Col>
            <Col md="4" className="filter-search"><p><MDBIcon icon="trash" /></p>
            <p><span className="filter-txt"> Mark All As Read</span></p></Col>
          </Row>
         <MDBTable className="customer-table" striped>
      <MDBTableHead>
        <tr>
          <th><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></th>
          <th>Notification</th>
          <th className="text-center">Time</th>
          <th className="text-center">Day</th>
          <th className="text-center">Select</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
          <td>Massage from your Store, Your order is packed. Please go and received your order. </td>
          <td className="text-center">04:53 PM</td>
          <td className="text-center">TODAY</td>
          <td className="text-center"> <Checkbox value="A" /></td>
        </tr>
        <tr>
          <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
          <td>Massage from your Store, Your order is packed. Please go and received your order. </td>
          <td className="text-center">04:53 PM</td>
          <td className="text-center">TODAY</td>
          <td className="text-center"> <Checkbox value="A" /></td>
        </tr>
        <tr>
          <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
          <td>Massage from your Store, Your order is packed. Please go and received your order. </td>
          <td className="text-center">04:53 PM</td>
          <td className="text-center">TODAY</td>
          <td className="text-center"> <Checkbox value="A" /></td>
        </tr>
        <tr>
          <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
          <td>Massage from your Store, Your order is packed. Please go and received your order. </td>
          <td className="text-center">04:53 PM</td>
          <td className="text-center">TODAY</td>
          <td className="text-center"> <Checkbox value="A" /></td>
        </tr>
        <tr>
          <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
          <td>Massage from your Store, Your order is packed. Please go and received your order. </td>
          <td className="text-center">04:53 PM</td>
          <td className="text-center">TODAY</td>
          <td className="text-center"> <Checkbox value="A" /></td>
        </tr>
        <tr>
          <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
          <td>Massage from your Store, Your order is packed. Please go and received your order. </td>
          <td className="text-center">04:53 PM</td>
          <td className="text-center">TODAY</td>
          <td className="text-center"> <Checkbox value="A" /></td>
        </tr>
        <tr>
          <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
          <td>Massage from your Store, Your order is packed. Please go and received your order. </td>
          <td className="text-center">04:53 PM</td>
          <td className="text-center">TODAY</td>
          <td className="text-center"> <Checkbox value="A" /></td>
        </tr>
        <tr>
          <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
          <td>Massage from your Store, Your order is packed. Please go and received your order. </td>
          <td className="text-center">04:53 PM</td>
          <td className="text-center">TODAY</td>
          <td className="text-center"> <Checkbox value="A" /></td>
        </tr>


      </MDBTableBody>
    </MDBTable>
   
        </div>
      </>
    )
  }
}
