import React, { Component } from 'react';
import avatar from '../../img/home/avatar.png';
import CustomerNavBar from '../customer/CustomerNavBar';
import { Row, Col } from 'reactstrap';



export default class ViewCustomerDetails extends Component {
  render() {
    return (
      <>
        <div className="content">
          <CustomerNavBar />
          <div className="customer-table">
            <Row>
              <Col md="2"><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></Col>
              <Col md="6"><p><span className="text-green">Ravi Kumar Singh</span><br />
              <span className="text-green">Okk</span>P0001
              </p></Col>
              <Col md="2"><button class="btn-copy-code btn">Edit</button></Col>
              <Col md="2">ENABEL </Col>
            </Row>
            <Row>
              <Col md="2"></Col>
              <Col md="10"><p>Mobole Number: <br /><span className="number-properties">9998888777</span></p>
              <p>Discription: <br /><span className="number-properties">Bank Po at PNB Kanti Factory, Kankarbagh</span></p>
              <p>Location: <br /><span className="number-properties">B-12, Mahatma Gandhi Nagar, Kanti Factory, Kankarbagh, Patna Bihar</span></p>
              <p>Total Number Orders: <br /><span className="number-properties">28 Times</span></p>
              <p>Total Collection: <br /><span className="number-properties">Rs 14,500</span></p>
              </Col>
            </Row>
          </div>
        </div>
      </>
    )
  }
}
