import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import avatar from '../../../img/home/avatar.png';
import { Row, Col } from 'reactstrap';
import filterIcon from '../../../assets/img/filterIcon.png';



export default class marketingCustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerDetails: [
        {_id: 1, 
          Serial: 9876543210,
          CName: 'Ram Lal Kumar',
          location: 'P.C. Colony, Kankarbagh',
          time: '9:10 am',
          day: 'Today',
          Status: 'Link Send' },
        {_id: 2, 
          Serial: 9876543210,
          CName: 'Ravi Retail Shop',
          location: 'P.C. Colony, Kankarbagh',
          time: '9:10 am',
          day: 'Today',
          Status: 'Install Sucessfully'      
        },
        {_id: 2, 
          Serial: 9876543210,
          CName: 'Akash Kirana Dukan',
          location: 'P.C. Colony, Kankarbagh',
          time: '9:10 am',
          day: 'Today',
          Status: 'Install Sucessfully'      
        },
        {_id: 2, 
          Serial: 9876543210,
          CName: 'Ram Lal Kirana Store',
          location: 'Main Road, Bhoothnath',
          time: '9:10 am',
          day: '15 Apr',
          Status: 'Install Sucessfully'      
        },
        {_id: 2, 
          Serial: 9876543210,
          CName: 'Ravi Retail Shop',
          location: 'Main Road, Bhoothnath',
          time: '9:10 am',
          day: '15 Apr',
          Status: 'Install Sucessfully'      
        },
        {_id: 2, 
          Serial: 9876543210,
          CName: 'Akash Kirana Dukan',
          location: 'Main Road, Bhoothnath',
          time: '9:10 am',
          day: '15 Apr',
          Status: 'Install Sucessfully'      
        },
        {_id: 2, 
          Serial: 9876543210,
          CName: 'Ram Lal Kirana Store',
          location: 'Bazar Samiti, Kumrahar',
          time: '9:10 am',
          day: '14 Apr',
          Status: 'Install Sucessfully'      
        },
        {_id: 2, 
          Serial: 9876543210,
          CName: 'Ravi Retail Shop',
          location: 'Bazar Samiti, Kumrahar',
          time: '9:10 am',
          day: '14 Apr',
          Status: 'Install Sucessfully'      
        },
        ]

      }
    }

  render() {
    return (


      <>
       <div className="content m-store-view-add">
       <div class="customer-filter">
          <div>
            <p>
            Customer 
            </p>
          </div>
          <div className="filter-search ">
            <p><i class="fa fa-search"></i></p>
            <p>Add Customer <i class="fas fa-plus mr-2"/></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>

	      </div>
          <div className='new-customer'>
             <MDBTable className="customer-table" striped>
              <MDBTableHead>
                <tr>
                  <th>Serial No.</th>
                  <th>Customer Name</th>
                  <th>Location</th>
                  <th>Time</th>
                  <th>Day</th>
                  <th>Status</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              {this.state.customerDetails.map((customer, i)=>(
				      <tr key={customer._id}>
				          <td><span className="text-green">#</span>{customer.Serial}</td>
                  <td><span className="text-green">{customer.CName}</span></td>
                  <td>{customer.location}</td>
                  <td>{customer.time}</td>
                  <td>{customer.day}</td>
              <td><span className="text-green">{customer.Status}</span></td>
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
