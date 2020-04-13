import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col,   CardHeader,
  CardBody,
  CardFooter
 } from 'reactstrap';
  import {  MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBCollapse, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import filterIcon from '../../assets/img/filterIcon.png';

import Profile01 from '../../assets/img/Profile-01.png';
import callIcon from '../../assets/img/callIcon.png';
import rupeesSymbol from '../../assets/img/rupeesSymbol.png';
import BlackCalendar from '../../assets/img/BlackCalendar.png';
import Totalorders from '../../assets/img/Totalorders.png';

import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "../../variables/charts1";
import { Bar } from 'react-chartjs-2';

export default class StoreTotalSale extends Component {
  render() {
 
    return (
      <>
        <div className="content store-order">
        <div class="customer-filter wallet-row">
          <div class="col-md-9">
            <p>
            Store <i class="left-space fa fa-angle-right"></i> Total Sales 
            </p>
          </div>
          <div class="filter-search col-md-3">
            <p><i class="fa fa-search"></i></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>
        </div>

        <div class="customer-filter wallet-row">
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
        <Row className="sale-order">
      <Col sm="4">
        <Card className="total-sale-card" body>
        <div>
      <img src={rupeesSymbol} alt="" className="rupeesSymbol" />
</div>

<div className="total-sale-content card1">
  <h4>Total Sale</h4>
  <p className="big-text">RS. 4710.00</p>
  <p className="small-text">On the Basic of total purches by customer </p>
</div>
        </Card>
      </Col>
      <Col sm="4">
        <Card className="total-sale-card" body>
        <div>
  <img src={Totalorders} alt="" className="Totalorders" />
  </div>
<div className="total-sale-content">
  <h4>Total Order</h4>
  <p className="big-text">50</p>
  <p className="small-text">On the Basic of total order by customer</p>
</div>

        </Card>
      </Col>
      <Col sm="4">
        <Card className="total-sale-card" body>

        <div>
  <img src={rupeesSymbol} alt="" className="rupeesSymbol" />
  </div>
<div className="total-sale-content">
  <h4>Payment Received</h4>
  <p className="big-text">RS. 4000.00</p>
  <p className="small-text">On the Basic of Total Payment made by customer</p>
</div>
        </Card>
      </Col>
    </Row>

    <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Total Sales <img src={BlackCalendar} alt="" className="float-right BlackCalendar" /><span className="float-right date-font">Date</span></CardTitle>
                  <p className="card-category">Month&#x2019;s Campaign Performance</p>
                </CardHeader>
                <CardBody>
                  <Bar
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>



        </div>
      </>
    )
  }
}
