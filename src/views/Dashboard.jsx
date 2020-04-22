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
import { Line, Pie } from "react-chartjs-2";
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

class Dashboard extends React.Component {
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
    if(window.location.hostname.split('.')[0] === 'marketing') {
      window.location.href = '/admin/market-dashboard';
    }
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
        <div className="content okjii-dashboard">
          <Row>
            <Col md="12">
              <p className="border-bottom dashbord-text">Dashboard</p>
            </Col>
          </Row>
        {/*-------------------Top Cards Starts-----------  */}
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats dashbord-card1">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-shop text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Shops</p>
                          <CardTitle tag="p">{this.state.dashboardData.shopsCount}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats footer-card1">
                     Update Now <i className="far fa-calendar-alt float-right" />
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats dashbord-card2">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-tag-content text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Products</p>
                          <CardTitle tag="p">{this.state.dashboardData.productCount}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats footer-card2">
                     Last day <i className="far fa-calendar float-right" />
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats dashbord-card3">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Earning</p>
                          <CardTitle tag="p">{this.state.dashboardData.earning}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats footer-card3">
                     In the last hour <i className="far fa-clock float-right" />
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats dashbord-card4">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Pre Registrations</p>
                          <CardTitle tag="p">{this.state.dashboardData.preReg?this.state.dashboardData.preReg:0}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats footer-card4">
                     Update now <i className="fas fa-sync-alt float-right" />
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          {/*-------------------Top Cards Ends-----------  */}
         
          {/*-------------------Pie Starts-----------  */}
         
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Email Statistics</CardTitle>
                  <p className="card-category">Last Campaign Performance</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-primary" /> Opened
                    <i className="fa fa-circle text-warning" /> Read
                    <i className="fa fa-circle text-danger" /> Deleted
                    <i className="fa fa-circle text-gray" /> Unopened
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" /> Number of emails sent
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                  <p className="card-category">Line Chart with Points</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                    <i className="fa fa-circle text-warning" /> BMW 5 Series
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          {/*-------------------Pie Ends-----------  */}
          
          {/*-------------------bar starts-----------  */}

          {/*-------------------bar Ends-----------  */}


        
          {/* ---------------other Cards------------- */}
          <div className='df jcsa'>
            <div className='m-card df jcsa aic p-10 f1'>
              <i className="fa fa-money fa-3x" />
              <div>
                <p>Today's Online Payment</p>
                <p>Rs. 4710.00</p>
              </div>
              <i className="far fa-calendar-alt fa-3x" />
            </div>
            <div className='m-card df jcsa aic p-10 f1'>
              <i className="fa fa-money fa-3x" />
              <div>
                <p>Today's COD Payment</p>
                <p>Rs. 4710.00</p>
              </div>
              <i className="far fa-calendar-alt fa-3x" />
            </div>
          </div>

          {/* ------------------current listing */}
          <Row className="card-list-body">
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Current Listing <i className="nc-icon nc-shop text-warning float-right" /> &#160;&#160;&#160;&#160;</CardTitle>
                  <p className="card-category">Today's Campaign Performance</p>
                </CardHeader>
                <CardBody>
                  <Row className="card-list">
                    <Col md="2"><i className="nc-icon nc-shop text-warning" /></Col>
                    <Col md="8">Ram Lal Kirana Store</Col>
                    <Col md="2"><i class="fas fa-eye pr-2" aria-hidden="true" /></Col>
                  </Row>
                  <Row className="card-list">
                    <Col md="2"><i className="nc-icon nc-shop text-warning" /></Col>
                    <Col md="8">Ravi Retail Shop</Col>
                    <Col md="2"><i class="fas fa-eye" aria-hidden="true" /></Col>
                  </Row>
                  <Row className="card-list">
                    <Col md="2"><i className="nc-icon nc-shop text-warning" /></Col>
                    <Col md="8">Akash Kirana</Col>
                    <Col md="2"><i class="fas fa-eye pr-2" aria-hidden="true" /></Col>
                  </Row>
                  <Row className="card-list">
                    <Col md="2"><i className="nc-icon nc-shop text-warning" /></Col>
                    <Col md="8">Easy Club</Col>
                    <Col md="2"><i class="fas fa-eye pr-2" aria-hidden="true" /></Col>
                  </Row>
                  <Row className="card-list">
                    <Col md="2"><i className="nc-icon nc-shop text-warning" /></Col>
                    <Col md="8">9 to 9 Store</Col>
                    <Col md="2"><i class="fas fa-eye pr-2" aria-hidden="true" /></Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md="8">
            </Col>
          </Row>

        </div>
      </>
    );
  }
}

export default Dashboard;
