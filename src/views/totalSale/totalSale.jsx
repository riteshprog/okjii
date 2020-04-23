import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {MDBIcon} from 'mdbreact'
import filterIcon from '../../assets/img/filterIcon.png';
import { MDBTable, MDBTableBody, MDBTableHead, MDBDropdownToggle, MDBDropdownMenu, MDBDropdown, MDBDropdownItem } from 'mdbreact';
import { Col, Row, Button, Card, CardBody, CardTitle,CardHeader, CardFooter } from 'reactstrap';
import Googlemap from '../../img/retailer/Googlemap.png';
import callIcon from '../../assets/img/callIcon.png';
import AddStore1 from '../../assets/img/AddStore.png';
import Time from '../../assets/img/Time.png';
import Store1 from '../../assets/img/Store1.png';
import storeIcon  from '../../assets/img/storeIcon.png';
import rupeesSymbol from '../../assets/img/rupeesSymbol.png';
import Totalorders from '../../assets/img/Totalorders.png';
import BarChart from './BarChart'
class TotalSale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetViewDetails: [
        {_id: 1, 
          img: Store1,
          Serialno: 'P0001',
          Sname: 'Ram Lal Kirana Store',
          Location: 'Kankarbagh',
          SType: 'Medium',
          Sales: 'Rs. 3500.00',
          Action: ['View Details', 'View Target'],
        },
        {_id: 2, 
          img: Store1,
          Serialno: 'P0002',
          Sname: 'Ravi Retail Shop',
          Location: 'Kankarbagh',
          SType: 'Standard',
          Sales: 'Rs. 3500.00',
          Action: ['View Details', 'View Target'],
        },
        {_id: 3, 
          img: Store1,
          Serialno: 'P0005',
          Sname: 'Akash Kirana Dukan',
          Location: 'Kankarbagh',
          SType: 'Medium',
          Sales: 'Rs. 3500.00',
          Action: ['View Details', 'View Target'],
        },
        {_id: 4, 
          img: Store1,
          Serialno: 'P0007',
          Sname: 'Ram Lal Kirana Store',
          Location: 'Bhootnath',
          SType: 'Standard',
          Sales: 'Rs. 3500.00',
          Action: ['View Details', 'View Target'],
        },
                ]

      }
    }


  render() { 
    return ( 
      <div className="content total-sals-details">
      <div class="customer-filter">
         <div>
           <p>
           Total Sale 
           </p>
         </div>
         <div className="filter-search ">
           <p><i class="fa fa-search"></i></p>
           <p> <span className="text-green">Date</span> <MDBIcon icon="calendar-alt" className="calender-icon" /></p>
           <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
         </div>
        </div> 
        <Row >
        <Col md="4">
              <Card>
                <CardBody>
<div className="total-sale-details">
  <div><img src={rupeesSymbol} alt="" className="table-icon" /></div>
  <div><p>Today's Total Sale</p>
  <p className="text-large">Rs. 12,550.00</p>
  <p>On the basic of total purches by customer</p>
</div>
</div>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
              <CardBody>
              <div className="total-sale-details">
              <div><img src={Totalorders} alt="" className="table-icon" /></div>
  <div><p>Today's Total Order</p>
  <p className="text-large">50</p>
  <p>On the basic of total order by customer</p>
</div>
</div>
</CardBody>
          </Card>
            </Col>
            <Col md="4">
              <Card>
              <CardBody>
              <div className="total-sale-details">
              <div><img src={rupeesSymbol} alt="" className="table-icon" /></div>
  <div><p>Payment Received</p>
  <p className="text-large">Rs. 8500.00</p>
  <p>On the basic of total payment made by customer</p>
</div>
</div>
</CardBody>
          </Card>
            </Col>

        </Row>

        
    <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle className="total-sale-para" tag="h5">Total Sales </CardTitle>
                  <p className="card-category">Month&#x2019;s Campaign Performance</p>
                </CardHeader>
                <CardBody>
               <BarChart />
                </CardBody>
              </Card>
            </Col>
          </Row>

             <MDBTable className="customer-table" responsive striped>
              <MDBTableHead>
                <tr>
                  <th className="text-center"><img src={storeIcon} alt="" className="table-icon" /></th>
                  <th>Serial No.</th>
                  <th>Store Name</th>
                  <th>Location</th>
                  <th>Category</th>
                  <th>Salles</th>
                  <th>Action</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              {this.state.targetViewDetails.map((targetv, i)=>(
				      <tr key={targetv._id}>
				          <td className="text-center"><img src={targetv.img} alt="" /></td>
                  <td><span className="text-green">Okk</span>{targetv.Serialno}</td>
                  <td><span className="text-green">{targetv.Sname}</span></td>
                  <td>{targetv.Location}</td>
                  <td>{targetv.SType}</td>
                  <td>{targetv.Sales}</td>
                  <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="mstore/storeviewDdetails/:mstoreId">{targetv.Action[0]}</Link></MDBDropdownItem>
          <MDBDropdownItem><Link to="store/product/:storeId">{targetv.Action[1]}</Link></MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
                </tr>
              ))
  }


              </MDBTableBody>
            </MDBTable>

</div>
     );
  }
}
 
export default TotalSale;