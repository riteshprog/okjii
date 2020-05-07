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
import Store1 from '../../assets/img/Store1.png';
import storeIcon  from '../../assets/img/storeIcon.png';



export default class TargetViewDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetViewDetails: [
        {_id: 1, 
          img: Store1,
          Serialno: 'P0001',
          Sname: 'Ram Lal Kirana Store',
          Location: 'Kankarbagh',
          Date: '17 April',
          Status: 'Not Add Product',
          MLocation: Googlemap,
          Call: callIcon,
        },
        {_id: 2, 
          img: Store1,
          Serialno: 'P0002',
          Sname: 'Ravi Retail Shop',
          Location: 'Kankarbagh',
          Date: '17 April',
          Status: 'Not Add Product',
          MLocation: Googlemap,
          Call: callIcon,
        },
        {_id: 3, 
          img: Store1,
          Serialno: 'P0005',
          Sname: 'Akash Kirana Dukan',
          Location: 'Kankarbagh',
          Date: '16 April',
          Status: 'Product Updated',
          MLocation: Googlemap,
          Call: callIcon,
        },
        {_id: 4, 
          img: Store1,
          Serialno: 'P0007',
          Sname: 'Ram Lal Kirana Store',
          Location: 'Bhootnath',
          Date: '16 April',
          Status: 'Product Updated',
          MLocation: Googlemap,
          Call: callIcon,
        },
        {_id: 5, 
          img: Store1,
          Serialno: 'P0010',
          Sname: 'Ravi Retail Shop',
          Location: 'Bhootnath',
          Date: '15 April',
          Status: 'Not Add Product',
          MLocation: Googlemap,
          Call: callIcon,
        },
        {_id: 6, 
          img: Store1,
          Serialno: 'P0010',
          Sname: 'Ram Lal Kirana Store',
          Location: 'Bhootnath',
          Date: '15 April',
          Status: 'Product Updated',
          MLocation: Googlemap,
          Call: callIcon,
        },
                ]

      }
    }

  render() {
    return (


      <>
       <div className="content target-view-card">
       <div class="customer-filter">
          <div>
            <p>
            Target <i class="left-space fa fa-angle-right"></i> Add Store (View Details)
            </p>
          </div>
          <div className="filter-search ">
            <p><i class="fa fa-search"></i></p>
            <p>Add Store <i class="fas fa-plus mr-2"/></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>

	      </div>
<h4>Target complete in 10 April 2020 to 20 April 2020</h4>
        <Row >
        <Col md="6">
              <Card>
                <CardBody>
<div className="target-view-details">
  <p><img src={AddStore1} alt="" className="table-icon" /> Add Summary</p>
  <p className="text-large">07 / 01</p>
</div>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
              <CardBody>
              <div className="target-view-details1">
  <p><img src={Time} alt="" className="table-icon" /> Day Summary</p>
  <p className="text-large">07D / 10D</p>
</div>
</CardBody>
          </Card>
            </Col>

        </Row>
            <div className='new-customer'>
             <MDBTable className="customer-table" responsive striped>
              <MDBTableHead>
                <tr>
                  <th className="text-center"><img src={storeIcon} alt="" className="table-icon" /></th>
                  <th>Serial No.</th>
                  <th>Store Name</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th className="text-center">Location</th>
                  <th className="text-center">Call</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              {this.state.targetViewDetails.map((targetv, i)=>(
				      <tr key={targetv._id}>
				          <td className="text-center"><img src={targetv.img} alt="" /></td>
                  <td><span className="text-green">Okk</span>{targetv.Serialno}</td>
                  <td><span className="text-green">{targetv.Sname}</span></td>
                  <td>{targetv.Location}</td>
                  <td>{targetv.Date}</td>
                  <td>{targetv.Status}</td>
                  <td className="text-center"><img src={targetv.MLocation} alt="" /></td>
                  <td className="text-center"><img src={targetv.Call} alt="" /></td>
                </tr>
              ))
  }


              </MDBTableBody>
            </MDBTable>
            </div>
        </div>
      </>
    )
  }
}
