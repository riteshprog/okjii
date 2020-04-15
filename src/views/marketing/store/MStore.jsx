import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'antd';

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import avatar from '../../../img/home/avatar.png';
import { CustomInput, Row, Col } from 'reactstrap';
import storeIcon from '../../../assets/img/storeIcon.png';
import filterIcon from '../../../assets/img/filterIcon.png';


export default class MStore extends Component {
  render() {
    return (
      <>
        <div className="content ">
        <div class="customer-filter">
          <div>
            <p>
            Store 
            </p>
          </div>
          <div className="filter-search ">
            <p><i class="fa fa-search"></i></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>

	      </div>

         <MDBTable className="customer-table" responsive striped>
      <MDBTableHead>
        <tr>
          <th><img src={storeIcon} alt="" className="storeIcon no-break" /></th>
          <th>Serial No.</th>
          <th>Store Name</th>
          <th>Location</th>
          <th>Categories</th>
          <th className="text-center">Active</th>
          <th className="text-center">Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td><img src={storeIcon} alt="" className="storeIcon" /></td>
          <td><span className="text-green">Okk</span>P0001</td>
          <td><span className="text-green no-break">Ram Lal Kirana Store</span></td>
          <td>Kankarbagh</td>
          <td>Medium</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
         <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="mstore/storeviewDdetails/:mstoreId">View Details</Link></MDBDropdownItem>
          <MDBDropdownItem><Link to="store/product/:storeId">Add Product</Link></MDBDropdownItem>
          <MDBDropdownItem>Target</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td><img src={storeIcon} alt="" className="storeIcon" /></td>
          <td><span className="text-green">Okk</span>P0002</td>
          <td><span className="text-green">Ravi Retail Shop</span></td>
          <td>Kankarbagh</td>
          <td>Standrad</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
         <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="mstore/storeviewDdetails/:mstoreId">View Details</Link></MDBDropdownItem>
          <MDBDropdownItem><Link to="store/product/:storeId">Add Product</Link></MDBDropdownItem>
          <MDBDropdownItem>Target</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td><img src={storeIcon} alt="" className="storeIcon" /></td>
          <td><span className="text-green">Okk</span>P0005</td>
          <td><span className="text-green">Akash Kirana Dukan</span></td>
          <td>Kankarbagh</td>
          <td>Medium</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
         <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="mstore/storeviewDdetails/:mstoreId">View Details</Link></MDBDropdownItem>
          <MDBDropdownItem><Link to="store/product/:storeId">Add Product</Link></MDBDropdownItem>
          <MDBDropdownItem>Target</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td><img src={storeIcon} alt="" className="storeIcon" /></td>
          <td><span className="text-green">Okk</span>P0007</td>
          <td><span className="text-green">Ram Lal Kirana Store</span></td>
          <td>Kankarbagh</td>
          <td>Medium</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
         <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="mstore/storeviewDdetails/:mstoreId">View Details</Link></MDBDropdownItem>
          <MDBDropdownItem><Link to="store/product/:storeId">Add Product</Link></MDBDropdownItem>
          <MDBDropdownItem>Target</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td><img src={storeIcon} alt="" className="storeIcon" /></td>
          <td><span className="text-green">Okk</span>P0010</td>
          <td><span className="text-green">Ravi Retail Shop</span></td>
          <td>Bhootnath</td>
          <td>24 &time; 7</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
         <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="mstore/storeviewDdetails/:mstoreId">View Details</Link></MDBDropdownItem>
          <MDBDropdownItem><Link to="store/product/:storeId">Add Product</Link></MDBDropdownItem>
          <MDBDropdownItem>Target</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td><img src={storeIcon} alt="" className="storeIcon" /></td>
          <td><span className="text-green">Okk</span>P0013</td>
          <td><span className="text-green">Akash Kirana Dukan</span></td>
          <td>Bhootnath</td>
          <td>Medium</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
         <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="mstore/storeviewDdetails/:mstoreId">View Details</Link></MDBDropdownItem>
          <MDBDropdownItem><Link to="store/product/:storeId">Add Product</Link></MDBDropdownItem>
          <MDBDropdownItem>Target</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td><img src={storeIcon} alt="" className="storeIcon" /></td>
          <td><span className="text-green">Okk</span>P0014</td>
          <td><span className="text-green">Ram Lal Kirana Store</span></td>
          <td>Kumrahar</td>
          <td>OkkJi Access</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
         <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="mstore/storeviewDdetails/:mstoreId">View Details</Link></MDBDropdownItem>
          <MDBDropdownItem><Link to="store/product/:storeId">Add Product</Link></MDBDropdownItem>
          <MDBDropdownItem>Target</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td><img src={storeIcon} alt="" className="storeIcon" /></td>
          <td><span className="text-green">Okk</span>P0013</td>
          <td><span className="text-green">Ravi Retail Shop</span></td>
          <td>Kumrahar</td>
          <td>Standard</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
         <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="mstore/storeviewDdetails/:mstoreId">View Details</Link></MDBDropdownItem>
          <MDBDropdownItem><Link to="store/product/:storeId">Add Product</Link></MDBDropdownItem>
          <MDBDropdownItem>Target</MDBDropdownItem>
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
