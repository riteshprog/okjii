import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
//import avatar from '../../img/home/avatar.png';
import BlogNavBar from '../blog/BlogNavBar.jsx';
//import { Row, Col } from 'reactstrap';



export default class CustomerDetails extends Component {
  render() {
    return (
      <>
        <div className="content">
         <BlogNavBar />
         <MDBTable className="blog-table" striped>
      <MDBTableHead>
        <tr>
          <th className="text-center">Id</th>
          <th>Title</th>
          <th>Blog type</th>
          <th>Status</th>
          <th>Created</th>
          <th>Updated</th>
          <th className="text-center">Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td className="text-center">77</td>
          <td>Why Kirana stores are Evergreen in Indian Society?</td>
          <td><span className="text-green-background no-break">Blog Latest New</span></td>
          <td><span className="text-green-background no-break">Published</span></td>
          <td>Two Weak ago</td>
          <td className="no-break">8 Hours ago</td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="blog/singleblog/:blogId">Edit</Link></MDBDropdownItem>
          <MDBDropdownItem>Delete</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      </td>
        </tr>
        <tr>
          <td className="text-center">78</td>
          <td>Why Kirana Store is Loosing its Charm?</td>
          <td><span className="text-green-background no-break">Blog Latest New</span></td>
          <td><span className="text-green-background no-break">Published</span></td>
          <td className="no-break">One Weak ago</td>
          <td className="no-break">11 Hours ago</td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="customer/singlecustomer/:custId">Edit</Link></MDBDropdownItem>
          <MDBDropdownItem>Delete</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      </td>
        </tr>
        <tr>
          <td className="text-center">79</td>
          <td>Why India Needs Online Kirana Stores?</td>
          <td><span className="text-green-background no-break">Blog Latest New</span></td>
          <td><span className="text-green-background no-break">Published</span></td>
          <td className="no-break">Three Weak ago</td>
          <td>1 Hours ago</td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="customer/singlecustomer/:custId">Edit</Link></MDBDropdownItem>
          <MDBDropdownItem>Delete</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      </td>
        </tr>
        <tr>
          <td className="text-center">77</td>
          <td>Why Neighbourhood Kirana Survive in the Wave of E-Commerce</td>
          <td><span className="text-green-background no-break">Blog Latest New</span></td>
          <td><span className="text-green-background no-break">Published</span></td>
          <td>Four Weak ago</td>
          <td>5 Hours ago</td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="customer/singlecustomer/:custId">Edit</Link></MDBDropdownItem>
          <MDBDropdownItem>Delete</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      </td>
        </tr>
        <tr>
        <td className="text-center">77</td>
          <td>What is SONAR?</td>
          <td><span className="text-green-background no-break">Blog Latest New</span></td>
          <td><span className="text-green-background no-break">Published</span></td>
          <td>One Weak ago</td>
          <td>11 Hours ago</td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="customer/singlecustomer/:custId">Edit</Link></MDBDropdownItem>
          <MDBDropdownItem>Delete</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      </td>
        </tr>
        <tr>
          <td className="text-center">77</td>
          <td>What is SONAR?</td>
          <td><span className="text-green-background no-break">Blog Latest New</span></td>
          <td><span className="text-green-background no-break">Published</span></td>
          <td>One Weak ago</td>
          <td>11 Hours ago</td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem><Link to="customer/singlecustomer/:custId">Edit</Link></MDBDropdownItem>
          <MDBDropdownItem>Delete</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      </td>
      </tr>


      </MDBTableBody>
    </MDBTable>
   
        </div>
      </>
    )
  }
}
