import React, { Component } from 'react';
import rupeesSymbol from '../../assets/img/rupeesSymbol.png';
import {MDBIcon} from 'mdbreact'
import filterIcon from '../../assets/img/filterIcon.png';
import avatar from '../../img/home/avatar.png';
import { Col, Row, Button } from 'reactstrap';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class OrderViewDetails extends Component {
  render() { 
    return ( 
            <div className="content order-view-details">
       <div class="customer-filter">
          <div>
            <p>
            Order <i class="left-space fa fa-angle-right"></i> View Details 
            </p>
          </div>
          <div className="filter-search ">
            <p><i class="fa fa-search"></i></p>
            <p> <MDBIcon icon="calendar-alt" className="calender-icon" /></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>
</div>

<div class="order-row">
          <div className="order-left-navbar">
            <div>
            <img src={avatar} className="rounded-circle testimoni-img" width="60" height="60" alt="avatar" />
            </div>
            <p>Ravi Kumar Singh<br />
              <span className="text-green">Okk</span>P0001
              </p>

          </div>
          <div className="order-right-navbar">
            <div className="">
              <p>9998888777</p>
              <p>Kanti Factory, Kankarbagh, patna</p>
          </div>
        <div><Button>View Details</Button></div>
      </div>
      </div>
      <div>
        <p className="order-para">Order Details : <span className="text-green">09:45 am</span></p>
        <MDBTable className="customer-table" responsive>
              <MDBTableBody>
              <tr>
                <td>Aashirvaad Multigrain Atta</td>
                <td><span className="text-green">05 Kg / ₹250</span></td>
                <td>01</td>
                <td><span className="text-green">Rs. 250</span></td>
              </tr>
              <tr>
                <td>Aquafina Water Bottle</td>
                <td><span className="text-green">01 L / ₹20</span></td>
                <td>02</td>
                <td><span className="text-green">Rs. 40</span></td>
              </tr>
              <tr>
                <td>Nutrila Soya Big Chunks</td>
                <td><span className="text-green">90 Gms / ₹45</span></td>
                <td>04</td>
                <td><span className="text-green">Rs. 180</span></td>
              </tr>
              <tr>
                <td>Aashirvaad Multigrain Atta</td>
                <td><span className="text-green">05 Kg / ₹250</span></td>
                <td>01</td>
                <td><span className="text-green">Rs. 250</span></td>
              </tr>
              </MDBTableBody>
        </MDBTable>
        
      </div>
      <div  className="order-para"> 
<p><Button className="no-background">More...</Button></p>
</div>
<hr />
<p className="order-para">Order Accepted : <span className="text-green">09:45 am (within 30 sec)</span> by -</p>

<div class="order-row">
          <div className="order-left-navbar">
            <div>
            <img src={avatar} className="rounded-circle testimoni-img" width="60" height="60" alt="avatar" />
            </div>
            <p>Ravi Kirana Store<br />
              <span className="text-green">Okk</span>P0001
              </p>

          </div>
          <div className="order-right-navbar">
            <div className="">
              <p><span className="text-green">900 m</span> away from customer</p>
              <p>P.C. Colony, Kankarbagh, patna</p>
          </div>
        <div><Button>View Details</Button></div>
      </div>
      </div>
      <p className="order-para">Order Delivering By </p>
      <div class="order-row">
          <div className="order-left-navbar">
            <div>
            <img src={avatar} className="rounded-circle testimoni-img" width="60" height="60" alt="avatar" />
            </div>
            <p>Sumit Kumar<br />
              <span className="text-green">Okk</span>P0001
              </p>

          </div>
          <div className="order-right-navbar">
            <div className="">
              <p><span className="text-green">Delivery Mode : Bicycle</span> </p>
              <p>kanti Factory, Kankarbagh, patna</p>
          </div>
        <div><Button>View Details</Button></div>
      </div>
      </div>
<div className="text-center"><Button>Track Status</Button></div>
      </div>
     );
  }
}
 
export default OrderViewDetails;