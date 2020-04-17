import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { Row, Col } from 'reactstrap';
import filterIcon from '../../assets/img/filterIcon.png';
import Hyper from "../../img/home/Hyper.png";
import Patanjali from "../../img/home/Patanjali.png";
import SHEKHAR from "../../img/home/SHEKHAR.png";
import EzeeFresh from "../../img/home/EzeeFresh.png";
import BigMart from "../../img/home/BigMart.png";
import Crossing from "../../img/home/Crossing.png";



export default class TrustedBy extends Component {

  render() {
    return (


      <>
       <div className="content m-store-view-add">
       <div class="customer-filter">
          <div>
            <p>
            Trusted By 
            </p>
          </div>
          <div className="filter-search ">
            <p><i class="fa fa-search"></i></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>

	      </div>
          <div className='new-customer'>
             <MDBTable className="customer-table" striped>
              <MDBTableHead>
                <tr>
                  <th>Company Logo</th>
                  <th>Company  ID</th>
                  <th>Company Name</th>
                  <th>Reg. Date</th>
                  <th>Location</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td><img className="item" src={SHEKHAR} alt="" /></td>
                  <td><span className="text-green">C001</span></td>
                  <td><span className="text-green">SHEKHAR</span></td>
                  <td>January 2020</td>
                  <td>Patna</td>
                </tr>
                <tr>
                  <td><img className="item" src={Patanjali} alt="" /></td>
                  <td><span className="text-green">C002</span></td>
                  <td><span className="text-green">PATANJALI</span></td>
                  <td>January 2020</td>
                  <td>Patna</td>
                </tr>
                <tr>
                  <td><img className="item" src={Hyper} alt="" /></td>
                  <td><span className="text-green">C001</span></td>
                  <td><span className="text-green">HYPER</span></td>
                  <td>January 2020</td>
                  <td>Patna</td>
                </tr>
                <tr>
                  <td><img className="item" src={EzeeFresh} alt="" /></td>
                  <td><span className="text-green">C001</span></td>
                  <td><span className="text-green">EZEEFRESH</span></td>
                  <td>January 2020</td>
                  <td>Patna</td>
                </tr>
                <tr>
                  <td><img className="item" src={BigMart} alt="" /></td>
                  <td><span className="text-green">C001</span></td>
                  <td><span className="text-green">BIGMART</span></td>
                  <td>January 2020</td>
                  <td>Patna</td>
                </tr>
                <tr>
                  <td><img className="item" src={Crossing} alt="" /></td>
                  <td><span className="text-green">C001</span></td>
                  <td><span className="text-green">CROSSING</span></td>
                  <td>January 2020</td>
                  <td>Patna</td>
                </tr>

              </MDBTableBody>
            </MDBTable>
          </div>
        </div>
      </>
    )
  }
}
