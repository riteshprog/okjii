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



export default class AddCustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 3,
      error: false,
      targetViewDetails: [
        {_id: 1, 
          CustomerID: '9876543210',
          CustomerName: 'Ram Lal Kumar',
          Location: 'P.C. Colony, Kankarbagh',
          Time: '09: 10 am',
          Day: 'Today',
          Status: 'Link Sent',
        },
        {_id: 2, 
          CustomerID: '9876543210',
          CustomerName: 'Ravi Retail Shop',
          Location: 'P.C. Colony, Kankarbagh',
          Time: '09: 10 am',
          Day: 'Today',
          Status: 'Install Successfully',
        },
        {_id: 3, 
          CustomerID: '9876543210',
          CustomerName: 'Akash Kirana Dukan',
          Location: 'P.C. Colony, Kankarbagh',
          Time: '09: 10 am',
          Day: 'Today',
          Status: 'Install Successfully',
        },
        {_id: 4, 
          CustomerID: '9876543210',
          CustomerName: 'Ram Lal Kirana Store',
          Location: 'Main Road, Bhootnath',
          Time: '09: 10 am',
          Day: '15 Apr',
          Status: 'Install Successfully',
        },
        {_id: 5, 
          CustomerID: '9876543210',
          CustomerName: 'Ravi Retail Shop',
          Location: 'Main Road, Bhootnath',
          Time: '09: 10 am',
          Day: '15 Apr',
          Status: 'Install Successfully',
        },
        {_id: 6, 
          CustomerID: '9876543210',
          CustomerName: 'Akash Kirana Dukan',
          Location: 'Main Road, Bhootnath',
          Time: '09: 10 am',
          Day: '15 Apr',
          Status: 'Install Successfully',
        },
                ]

      }
      this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
      this.setState((prev) => {
        return {visible: prev.visible + 3};
      });
    }
  

  render() {
    return (


      <>
       <div className="content target-view-card">

        <MDBTable className="customer-table" responsive striped>
              <MDBTableHead>
                <tr>
                <th>Customer Id.</th>
                  <th>Customer Name</th>
                  <th>Location</th>
                  <th>Time</th>
                  <th>Day</th>
                  <th>Status</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              {this.state.targetViewDetails.slice(0, this.state.visible).map((targetv, i)=>(
				      <tr key={targetv._id}>
                  <td><span className="text-green">#</span>{targetv.CustomerID}</td>
                  <td><span className="text-green">{targetv.CustomerName}</span>
                  </td>
                  <td>{targetv.Location}</td>
                  <td>{targetv.Time}</td>
                  <td>{targetv.Day}</td>
                  <td><span className="text-green">{targetv.Status}</span></td>
                </tr>

              ))
  }
              </MDBTableBody>
            </MDBTable>


            {this.state.visible < this.state.targetViewDetails.length &&
             <button onClick={this.loadMore} type="button" className="load-more ">Load more...</button>
          }

        </div>
      </>
    )
  }
}
