import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Link } from 'react-router-dom';

import { MDBIcon } from "mdbreact";

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
export default class AddCityDetail extends Component {
  render() {


    return (
      <>
        <div className="content city-module  coupion-content">
        <div class=" wallet-row">
          <div class="customer-coupon col-md-6">
          <Input type="text" name="cityid" id="exampleID" placeholder="Enter City id" />
          <Input type="text" name="cityname" id="exampleName" placeholder="Enter City Name" />
          <Input type="text" name="prce" id="examplePrice" placeholder="Enter Price" />
          </div>
          <div class="col-md-6 customer-coupon-button">
<Button><MDBIcon icon="search" /> Search</Button>
<Button>All City</Button>
<Link class="wallet-link" to="/admin/coupon/add-city"><Button><MDBIcon icon="plus" />Add</Button></Link>
          </div>
        </div>
        <MDBTable className="customer-table" responsive striped>
      <MDBTableHead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th className="no-break">Status</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>693</td>
          <td>Sealdah</td>
          <td><span className="bg-danger">Inactive</span></td>
          <td className="no-break">7 months ago</td>
          <td className="no-break">7 months ago</td>
          <td className="edit-back"><Button><MDBIcon icon="pencil-alt" /> Edit</Button></td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    <Pagination aria-label="Page navigation example">
      <PaginationItem active>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          6
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
        </div>
      </>
    )
  }
}
