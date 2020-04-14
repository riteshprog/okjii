import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Link } from 'react-router-dom';
import { MDBIcon } from "mdbreact";

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class AddPageDetails extends Component {
  render() {


    return (
      <>
        <div className="content coupion-content">
        <div class="customer-filter wallet-row">
          <div class="col-md-9">
            <p>
            Pages 
                        </p>
          </div>
          <div class="filter-search col-md-3">
          <Link class="wallet-link" to="/admin/coupon/add-page"><Button><MDBIcon icon="plus" /> Add FAQS</Button></Link>
          </div>
        </div>
        <MDBTable className="customer-table" striped>
      <MDBTableHead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Status</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>17</td>
          <td>Guideline for Discussion forum</td>
          <td><span className="bg-green">Published</span></td>
          <td className="no-break">8 months ago</td>
          <td className="no-break">7 months ago</td>
          <td><Button><MDBIcon icon="pencil-alt" /></Button></td>
        </tr>
        <tr>
          <td>16</td>
          <td>Disclaimer</td>
          <td><span className="bg-green">Published</span></td>
          <td className="no-break">8 months ago</td>
          <td className="no-break">8 months ago</td>
          <td><Button><MDBIcon icon="pencil-alt" /></Button></td>
        </tr>
        <tr>
          <td>15</td>
          <td>Find Latest Teaching Jobs Across the Country - New Teacher Jobs</td>
          <td><span className="bg-green">Published</span></td>
          <td className="no-break">8 months ago</td>
          <td className="no-break">7 months ago</td>
          <td><Button><MDBIcon icon="pencil-alt" /></Button></td>
        </tr>
        <tr>
          <td>13</td>
          <td>Find Top Schools for Child Admission in India - Get Online Admission for Your Child</td>
          <td><span className="bg-green">Published</span></td>
          <td className="no-break">1 year ago</td>
          <td className="no-break">8 months ago</td>
          <td><Button><MDBIcon icon="pencil-alt" /></Button></td>
        </tr>
      </MDBTableBody>
    </MDBTable>

        </div>
      </>
    )
  }
}
