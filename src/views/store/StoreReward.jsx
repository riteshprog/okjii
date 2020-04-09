import React, { Component } from 'react';
import { Row, Col, Button, 
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle, } from 'reactstrap';
  import {  MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBCollapse, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import filterIcon from '../../assets/img/filterIcon.png';

import Profile01 from '../../assets/img/Profile-01.png';
import callIcon from '../../assets/img/callIcon.png';
import Acceptorder from '../../assets/img/Acceptorder.png';
import PickPay from '../../assets/img/PickPay.png';
import Coin from '../../assets/img/Coin.png';
import Reviews from '../../assets/img/Reviews.png';
import TotalEarning from '../../assets/img/TotalEarning.png';

export default class StoreReward extends Component {
  state={
    modal4: false,
    collapseID: "collapse1"


  }
  
  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));

  render() {
    const { collapseID } = this.state;

    return (
      <>
        <div className="content  okjii-dashboard reward-content">
        <div class="customer-filter wallet-row">
          <div class="col-md-9">
            <p>
            Customer <i class="left-space fa fa-angle-right"></i> Reward 
            </p>
          </div>
          <div class="filter-search col-md-3">
            <p><i class="fa fa-search"></i></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>
        </div>

        <div class="customer-wallets wallet-row">
	        <div class="col-lg-6 col-md-6 col-sm-6">
	          <div class="customer-wallet wallet-stats">
	            <div class="wallet-body">
	              <div class="wallet-row">
	                <div class=" wallet-img text-center icon-warning">
	                   <img src={Profile01} alt="" width="60"/>
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
	              <div class="wallet-row">
	                <div class="profile">
	                  <p >9998888777</p>
	                  <p >Kanti, Factory Kankarbagh, Patna</p>
	                </div>
	                <div class="text-center">
	                   <a href="tel:9998888777"><img src={callIcon} className="callicon"/></a>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats  dashbord-card1">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="text-center">
                      <img src={TotalEarning} className="totalearning" alt=""/>
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Shops</p>
                          <CardTitle tag="p">₹ 500</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats dashbord-card2">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className=" text-center ">
                      <img src={Acceptorder}   className="acceptorder" alt="" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Accept Order</p>
                          <CardTitle tag="p"><img src={Coin} width="20" height="20" alt="" /> 7000</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats dashbord-card3">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="text-center">
                      <img src={PickPay} alt=""  className="pickpay" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Pick &amp; Pay</p>
                          <CardTitle tag="p"><img src={Coin} width="20" height="20" alt="" /> 2000</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats dashbord-card4">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="text-center">
                          <img src={Reviews} className="reviews" alt="" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Reviews</p>
                          <CardTitle tag="p">
                            <img src={Coin} width="20" height="20" alt="" /> 8000</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
          <Col lg="6" md="6" sm="6"><p className="dashbord-text">Redeem History</p></Col>
            <Col lg="6" md="6" sm="6" className="text-right">
              <Button onClick={this.toggle(14)}>Reward Condition</Button>
            </Col>
        </Row>
      <MDBTable className="customer-table" striped>
      <MDBTableHead>
        <tr>
          <th>Accept Order</th>
          <th>Pick &amp; Pay</th>
          <th>Reviews</th>
          <th>Redeem Date</th>
          <th>Total Amount</th>
          <th>Status</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>7000</td>
          <td>2000</td>
          <td>8000</td>
          <td>09 April 2020</td>
          <td><spn className="text-green">Rs. 500</spn></td>
          <td>Pending...</td>
        </tr>
        <tr>
          <td>8000</td>
          <td>2500</td>
          <td>9450</td>
          <td>15 March 2020</td>
          <td><spn className="text-green">Rs. 650</spn></td>
          <td>Transfered in wallet</td>
        </tr>
        <tr>
          <td>6500</td>
          <td>1850</td>
          <td>8750</td>
          <td>17 Feb 2020</td>
          <td><spn className="text-green">Rs. 450</spn></td>
          <td>Transfered in wallet</td>
        </tr>


      </MDBTableBody>
    </MDBTable>
    <MDBContainer>
        
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
        
            <h4>Reward Conditions <a href=""><span className="float-right">Close</span></a></h4>
            
          
          <MDBCollapse id="collapse1" isOpen={collapseID}>

          <MDBModalBody>
            <ol>
              <li>100 points for accepting order within 1 min</li>
              <li>On time delivery will give 200 points</li>
              <li>100 points for 4 &amp; above customer ratings </li>
              <li>A surprise gift to the best performer of the month</li>
              <li>Point can be redeemed as cash</li>
            </ol>

          </MDBModalBody>
        </MDBCollapse>
        </MDBModal>
      </MDBContainer>
 

        </div>
      </>
    )
  }
}
