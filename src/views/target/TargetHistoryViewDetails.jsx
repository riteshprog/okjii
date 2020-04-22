import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import avatar from '../../img/home/avatar.png';
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
import Googlemap from '../../img/retailer/Googlemap.png';
import callIcon from '../../assets/img/callIcon.png';
import AddStore1 from '../../assets/img/AddStore.png';
import Time from '../../assets/img/Time.png';
import SellSummery from '../../assets/img/SellSummery.png';
import AddCustomer1 from '../../assets/img/AddCustomer.png';

import Store1 from '../../assets/img/Store1.png';
import storeIcon  from '../../assets/img/storeIcon.png';
import SellDetailsTable from './SellDetailsTable';
import AddStoreDetails from './AddStoreDetails';
import AddCustomerDetails from './AddCustomerDetails';

export default class TargetHistoryViewDetails extends Component {
  

  render() {
    return (


      <>
       <div className="content target-view-card">
       <div class="customer-filter">
          <div>
            <p>
            Target <i class="left-space fa fa-angle-right"></i> History (View Details)
            </p>
          </div>
          <div className="filter-search ">
            <p><i class="fa fa-search"></i></p>
            <p>Add Customer <i class="fas fa-plus mr-2"/></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>

	      </div>
<h4>Target complete in 10 April 2020 to 20 April 2020</h4>
        <Row className="target-view-history">
        <Col md="4">
              <Card>
                <CardBody>
<div className="target-view-details">
  <p><img src={SellSummery} alt="" className="table-icon" /> Sell Summary</p>
  <p className="text-large">1.25L / 01L</p>
</div>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardBody>
<div className="target-view-details">
  <p><img src={AddStore1} alt="" className="table-icon" /> Add Store</p>
  <p className="text-large">12 / 10</p>
</div>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
              <CardBody>
              <div className="target-view-details1">
  <p><img src={AddCustomer1} alt="" className="table-icon" /> Add Customer</p>
  <p className="text-large">12 / 10</p>
</div>
</CardBody>
          </Card>
            </Col>

        </Row>
        <div className="target-history-details">
<h3>Sell Details</h3>

<SellDetailsTable />
<h3>Add Store Details</h3>
<AddStoreDetails />
<h3>Add Customer Details</h3>
<AddCustomerDetails />
</div>
        </div>
      </>
    )
  }
}
