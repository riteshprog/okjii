/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "../variables/charts";
import Axios from "axios";
import Performence from '../assets/img/Performence.png';
import Acceptorder from '../assets/img/Acceptorder.png';
import OrderListing from '../assets/img/OrderListing.png';
import Target from '../assets/img/Target.png';
import Winning from '../assets/img/Winning.png';
import newcustomer from '../assets/img/newcustomer.png';
import Eye from '../assets/img/Eye.png';
import storeIcon from '../assets/img/storeIcon.png';
import filterIcon from '../assets/img/filterIcon.png';

class MarketingDashBoard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dashboardData: {
        shopsCount: 0,
        productCount: 0,
        earning: 0,
        preReg: 0
      }
    }
  }
  componentDidMount() {
    Axios.get(process.env.REACT_APP_API_URL + '/dashboard').then(({data})=>{
      const dashboardData = data.dashboardData;
      this.setState({dashboardData})
    }).catch(err=>{
      console.log(`catch err`, err);
    })

  }
  render() {
    return (
      <>
        <div className="content okjii-dashboard marketing-dashbord">
          <div class="customer-filter wallet-row">
          <div class="col-md-9 col-sm-6 col-5">
          <p className=" dashbord-text">Dashboard</p>
                    </div>
          <div class="filter-search col-md-3 col-sm-6 col-7">
            <p><i class="fa fa-search"></i></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>
        </div>
          <Row style={{'margin-top': '15px'
  }}>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats dashbord-card1">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <img src={Acceptorder} alt="" className="Acceptorder" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Today's Listing</p>
                          <CardTitle tag="p">{this.state.dashboardData.shopsCount}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats footer-card1">
                     See Store <i className="far fa-calendar-alt float-right" />
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats dashbord-card2">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="text-center">
                      <img src={Target} alt="" className="Target" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Tasks completed</p>
                          <CardTitle tag="p">21/70</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats footer-card2">
                  See Store <i className="far fa-calendar-alt float-right" />
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats dashbord-card3">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="text-center">
                      <img src={newcustomer} alt="" className="Target" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Customer Lead</p>
                          <CardTitle tag="p">49</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats footer-card3">
                  See Store <i className="far fa-calendar-alt float-right" />
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats dashbord-card4">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="text-center">
                      <img src={Winning} alt="" className="Acceptorder" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Winning Award</p>
                          <CardTitle tag="p">14</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats footer-card4">
                  See Store <i className="far fa-calendar-alt float-right" />
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
                   <Row>
                   <Col  className="card-list-body" md="5">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Current Listing <img src={OrderListing} alt="" className="OrderListing OrderListing-img float-right" /></CardTitle>
                  <p className="card-category">Today's Campaign Performance</p>
                  
                </CardHeader>
                <CardBody>
                  <Row className="card-list">
                    <Col md="2" className="col-3"><img src={storeIcon} alt="" className="storeIcon" />
                    </Col>
                    <Col md="10" className="col-9 kirna-store-name">Ram Lal Kirana Store</Col>
    
                  </Row>
                  <Row className="card-list">
                    <Col md="2" className="col-3"><img src={storeIcon} alt="" className="storeIcon" />
                    </Col>
                    <Col md="10" className="col-9 kirna-store-name">Ram Lal Kirana Store</Col>
    
                  </Row>
                  <Row className="card-list">
                    <Col md="2" className="col-3"><img src={storeIcon} alt="" className="storeIcon" />
                    </Col>
                    <Col md="10" className="col-9 kirna-store-name">Ram Lal Kirana Store</Col>
    
                  </Row>
                  <Row className="card-list">
                    <Col md="2" className="col-3"><img src={storeIcon} alt="" className="storeIcon" />
                    </Col>
                    <Col md="10" className="col-9 kirna-store-name">Ram Lal Kirana Store</Col>
    
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md="7">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Performence <img src={Performence} alt="" className="Performence float-right" /></CardTitle>
                  <p className="card-category">Month&#x2019;s Campaign Performance </p>
                </CardHeader>
                <CardBody>
                  <Bar
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={163}
                  />
                </CardBody>
                <CardFooter>
                  {/* <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                    <i className="fa fa-circle text-warning" /> BMW 5 Series
                  </div>
                  <hr /> */}
                  <div className="card-stats">
                    Apr
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>



        </div>
      </>
    );
  }
}

export default MarketingDashBoard;
