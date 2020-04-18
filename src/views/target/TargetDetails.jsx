import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import avatar from '../../img/home/avatar.png';
//import { Pie } from "react-chartjs-2";
import PieChart from 'react-minimal-pie-chart';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";

import filterIcon from '../../assets/img/filterIcon.png';
import {
  Sell,
  AddStore,
  AddCustomer
} from "../../variables/ShellChart";



export default class marketingCustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetDetails: [
        {_id: 1, 
          StartDate: '01 Apr 2019',
          EndDate: '10 Apr 2019',
          ParaMeters: ['Sell', 'Add Store', 'Add Customer'],
          Target: ['1 Lakh', '10 Stores', '20 Customers'],
          Status: ['1.15 Lakhs', '12 Stores', '25 Customers'],
          Details: 'View Details'
        },
        {_id: 2, 
          StartDate: '21 Mar 2019',
          EndDate: '30 Mar 2019',
          ParaMeters: ['Sell', 'Add Store', 'Add Customer'],
          Target: ['1 Lakh', '10 Stores', '20 Customers'],
          Status: ['1.15 Lakhs', '12 Stores', '25 Customers'],
          Details: 'View Details'
        },
                ]

      }
    }

  render() {
    return (


      <>
       <div className="content m-store-view-add target-card">
       <div class="customer-filter">
          <div>
            <p>
            Target 
            </p>
          </div>
          <div className="filter-search ">
            <p><i class="fa fa-search"></i></p>
            <p>Add Customer <i class="fas fa-plus mr-2"/></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>

	      </div>
<h4>Target complete in 10 April 2020 to 20 April 2020</h4>
        <Row>
        <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5" className="sell">Sell </CardTitle>
                  <p className="card-category">Target set on the basic of sell</p>
                </CardHeader>
                <CardBody>
<PieChart
  data={[
    { title: 'One', value: 70, color: '#FFAE2B' },
    { title: 'Two', value: 30, color: '#FEE6C2' },
    
  ]}
  label
  labelPosition={50}
  labelStyle={{
    fill: '#fff',
    fontFamily: 'sans-serif',
    fontSize: '5px'
  }}
  lengthAngle={360}
  lineWidth={100}
  paddingAngle={0}
  radius={50}
  rounded={false}
  startAngle={270}
  viewBoxSize={[
    30,
    30
  ]}
  style={{
    height: '150px'
  }}
/>
                </CardBody>
                <CardFooter>
                  <div className="legend">
                  <i className="fa fa-circle sell-com" /> Completed
                    <i className="fa fa-circle sell-reman" /> Remains
                  </div>
                </CardFooter>
                <Button className="text-center"><Link to="TSell/view-details/:ViewId">View Details</Link></Button>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5" className="addstore">Add Store</CardTitle>
                  <p className="card-category">Target set on the basic of Added</p>
                </CardHeader>
                <CardBody>
<PieChart
  data={[
    { title: 'One', value: 7, color: '#B71FFE' },
    { title: 'Two', value: 3, color: '#DABDFF' },
    
  ]}
  label
  labelPosition={50}
  labelStyle={{
    fill: '#fff',
    fontFamily: 'sans-serif',
    fontSize: '5px'
  }}
  lengthAngle={360}
  lineWidth={100}
  paddingAngle={0}
  radius={50}
  rounded={false}
  startAngle={270}
  viewBoxSize={[
    30,
    30
  ]}
  style={{
    height: '150px'
  }}
/>
                </CardBody>
                <CardFooter>
                  <div className="legend">
                  <i className="fa fa-circle addstore-com" /> Completed
                    <i className="fa fa-circle addstore-reman" /> Remains
                  </div>
                </CardFooter>
                <Button className="text-center"><Link to="market/view-details/:ViewId">View Details</Link></Button>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5" className="addcustomer">Add Customer</CardTitle>
                  <p className="card-category">Target set on the basic of store added</p>
                </CardHeader>
                <CardBody>
<PieChart
  data={[
    { title: 'One', value: 7, color: '#3059FF' },
    { title: 'Two', value: 3, color: '#B8CCFF' },
    
  ]}
  label
  labelPosition={50}
  labelStyle={{
    fill: '#fff',
    fontFamily: 'sans-serif',
    fontSize: '5px'
  }}
  lengthAngle={360}
  lineWidth={100}
  paddingAngle={0}
  radius={50}
  rounded={false}
  startAngle={270}
  viewBoxSize={[
    30,
    30
  ]}
  style={{
    height: '150px'
  }}
/>
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle addcust-com" /> Completed
                    <i className="fa fa-circle addcust-reman" /> Remains
                  </div>
                </CardFooter>
                <Button className="text-center"><Link to="TAddCust/view-details/:ViewId">View Details</Link></Button>
              </Card>
            </Col>

        </Row>
             <MDBTable className="customer-table" responsive striped>
              <MDBTableHead>
                <tr>
                  <th>Start Day</th>
                  <th>End Day</th>
                  <th>Parameters</th>
                  <th>Targets</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              {this.state.targetDetails.map((target, i)=>(
				      <tr key={target._id}>
				          <td>{target.StartDate}</td>
                  <td>{target.EndDate}</td>
                  <td><p>{target.ParaMeters[0]}</p>
                  <p>{target.ParaMeters[1]}</p>
                  <p>{target.ParaMeters[2]}</p>
                  </td>
                  <td><p>{target.Target[0]}</p>
                  <p>{target.Target[1]}</p>
                  <p>{target.Target[2]}</p>
                  </td>
                  <td><p>{target.Status[0]}</p>
                  <p>{target.Status[1]}</p>
                  <p>{target.Status[2]}</p>
                  </td>
                  <td><Button className="btn-primary"><Link to="market/view-details/:ViewId">{target.Details}</Link></Button></td>
                </tr>
              ))
  }


              </MDBTableBody>
            </MDBTable>
        </div>
      </>
    )
  }
}
