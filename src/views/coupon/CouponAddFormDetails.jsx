import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import { MDBIcon } from "mdbreact";

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class CouponAddFormDetails extends Component {
  render() {


    return (
      <>
        <div className="content  coupion-content">
        <div class=" wallet-row">
          <div class="customer-coupon col-md-6">
          <Input type="text" name="couponid" id="exampleID" placeholder="Enter Coupon id" />
          <Input type="text" name="coupontitle" id="exampleTitle" placeholder="Enter Coupon id" />
          <Input type="text" name="couponName" id="exampleName" placeholder="Enter Coupon id" />
          </div>
          <div class="col-md-6 customer-coupon-button">
<Button><MDBIcon icon="search" /> Search</Button>
<Button>All Coupon</Button>
<Button><MDBIcon icon="plus" />Add</Button>
          </div>
        </div>
        <MDBTable className="customer-table" striped>
      <MDBTableHead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th className="no-break">Coupon Code</th>
          <th>Type</th>
          <th>Discount</th>
          <th className="no-break">Maximum Discount</th>
          <th>Limit</th>
          <th>Featured</th>
          <th>Status</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>3</td>
          <td>test</td>
          <td>TEST20</td>
          <td>value</td>
          <td>20.00</td>
          <td>20.00</td>
          <td>2</td>
          <td><span className="bg-danger">No</span></td>
          <td><span className="bg-danger">Inactive</span></td>
          <td className="no-break">11 months ago</td>
          <td className="no-break">11 months ago</td>
          <td><Button><MDBIcon icon="pencil-alt" /> Edit</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>test</td>
          <td>TEST20</td>
          <td>value</td>
          <td>20.00</td>
          <td>20.00</td>
          <td>2</td>
          <td><span className="bg-green">No</span></td>
          <td><span className="bg-green">Inactive</span></td>
          <td>11 months ago</td>
          <td>11 months ago</td>
          <td><Button><MDBIcon icon="pencil-alt" /> Edit</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>test</td>
          <td>TEST20</td>
          <td>value</td>
          <td>20.00</td>
          <td>20.00</td>
          <td>2</td>
          <td><span className="bg-danger">No</span></td>
          <td><span className="bg-danger">Inactive</span></td>
          <td>11 months ago</td>
          <td>11 months ago</td>
          <td className="no-break"><Button><MDBIcon icon="pencil-alt" /> Edit</Button></td>
        </tr>
      </MDBTableBody>
    </MDBTable>

        </div>
      </>
    )
  }
}
