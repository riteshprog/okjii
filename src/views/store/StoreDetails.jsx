import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'antd';

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import avatar from '../../img/home/avatar.png';
import CustomerNavBar from '../customer/CustomerNavBar';
import { CustomInput, Row, Col } from 'reactstrap';



export default class StoreDetails extends Component {
  render() {
    return (
      <>
        <div className="content store-page">
          <CustomerNavBar />
         <MDBTable className="customer-table" striped>
      <MDBTableHead>
        <tr>
          <th><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></th>
          <th>Serial No.</th>
          <th>Customer Name</th>
          <th>Mobile Number</th>
          <th>Location</th>
          <th className="text-center">Active</th>
          <th className="text-center">Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
          <td><span className="text-green">Okk</span>P0001</td>
          <td><span className="text-green">Ravi Kumar Singh</span></td>
          <td>9876543210</td>
          <td>Kankarbagh</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
         <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="store/viewstoredetails/:storeId">View Details</Link></MDBDropdownItem>
          <MDBDropdownItem><Link to="store/product/:storeId">Product</Link></MDBDropdownItem>
          <MDBDropdownItem>Wallet</MDBDropdownItem>
          <MDBDropdownItem>OkkJi Khata</MDBDropdownItem>
          <MDBDropdownItem>Setting</MDBDropdownItem>
          <MDBDropdownItem>Target</MDBDropdownItem>
          <MDBDropdownItem>Revenue</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
          <td><span className="text-green">Okk</span>P0002</td>
          <td><span className="text-green">Praveen Kumar</span></td>
          <td>9998887777</td>
          <td>Kankarbagh</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="store/viewstoredetails/:storeId">View Details</Link></MDBDropdownItem>
          <MDBDropdownItem><Link to="store/product/:storeId">Product</Link></MDBDropdownItem>
          <MDBDropdownItem>Wallet</MDBDropdownItem>
          <MDBDropdownItem>OkkJi Khata</MDBDropdownItem>
          <MDBDropdownItem>Setting</MDBDropdownItem>
          <MDBDropdownItem>Target</MDBDropdownItem>
          <MDBDropdownItem>Revenue</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
          <td><span className="text-green">Okk</span>P0005</td>
          <td><span className="text-green">Ravinesh Gupta</span></td>
          <td>9876543210</td>
          <td>Kankarbagh</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="store/viewstoredetails/:storeId">View Details</Link></MDBDropdownItem>
          <MDBDropdownItem><Link to="store/product/:storeId">Product</Link></MDBDropdownItem>
          <MDBDropdownItem>Wallet</MDBDropdownItem>
          <MDBDropdownItem>OkkJi Khata</MDBDropdownItem>
          <MDBDropdownItem>Setting</MDBDropdownItem>
          <MDBDropdownItem>Target</MDBDropdownItem>
          <MDBDropdownItem>Revenue</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
          <td><span className="text-green">Okk</span>P0007</td>
          <td><span className="text-green">Sumit Kumar Singh</span></td>
          <td>9999999999</td>
          <td>Bhootnath</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="store/viewstoredetails/:storeId">View Details</Link></MDBDropdownItem>
          <MDBDropdownItem><Link to="store/product/:storeId">Product</Link></MDBDropdownItem>
          <MDBDropdownItem>Wallet</MDBDropdownItem>
          <MDBDropdownItem>OkkJi Khata</MDBDropdownItem>
          <MDBDropdownItem>Setting</MDBDropdownItem>
          <MDBDropdownItem>Target</MDBDropdownItem>
          <MDBDropdownItem>Revenue</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
          <td><span className="text-green">Okk</span>P0010</td>
          <td><span className="text-green">Sudhir Kumar</span></td>
          <td>9876543210</td>
          <td>Bhootnath</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="store/viewstoredetails/:storeId">View Details</Link></MDBDropdownItem>
          <MDBDropdownItem><Link to="store/product/:storeId">Product</Link></MDBDropdownItem>
          <MDBDropdownItem>Wallet</MDBDropdownItem>
          <MDBDropdownItem>OkkJi Khata</MDBDropdownItem>
          <MDBDropdownItem>Setting</MDBDropdownItem>
          <MDBDropdownItem>Target</MDBDropdownItem>
          <MDBDropdownItem>Revenue</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td><img src={avatar} className="rounded-circle testimoni-img" width="40" height="40" alt="avatar" /></td>
          <td><span className="text-green">Okk</span>P0013</td>
          <td><span className="text-green">Yashwant Singh Yadav</span></td>
          <td>8888888888</td>
          <td>BhootNath</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="store/viewstoredetails/:storeId">View Details</Link></MDBDropdownItem>
          <MDBDropdownItem><Link to="store/product/:storeId">Product</Link></MDBDropdownItem>
          <MDBDropdownItem>Wallet</MDBDropdownItem>
          <MDBDropdownItem>OkkJi Khata</MDBDropdownItem>
          <MDBDropdownItem>Setting</MDBDropdownItem>
          <MDBDropdownItem>Target</MDBDropdownItem>
          <MDBDropdownItem>Revenue</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
      </MDBTableBody>
    </MDBTable>


   
        </div>
      </>
    )
  }
}
