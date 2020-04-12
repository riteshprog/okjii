import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Link } from 'react-router-dom';
import { MDBIcon } from "mdbreact";

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class AddFAQDetail extends Component {
  render() {


    return (
      <>
        <div className="content coupion-content">
        <div class="customer-filter wallet-row">
          <div class="col-md-9">
            <p>
            Faqs 
                        </p>
          </div>
          <div class="filter-search col-md-3">
          <Link class="wallet-link" to="/admin/coupon/add-faq-list"><Button><MDBIcon icon="plus" /> Add FAQS</Button></Link>
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
          <td>39</td>
          <td>How to Track application for child admission?</td>
          <td><span className="bg-green">Active</span></td>
          <td className="no-break">11 months ago</td>
          <td className="no-break">11 months ago</td>
          <td><Button><MDBIcon icon="pencil-alt" /></Button></td>
        </tr>
        <tr>
          <td>38</td>
          <td>How to Search &amp; apply schools for Child Admission?</td>
          <td><span className="bg-green">Active</span></td>
          <td className="no-break">11 months ago</td>
          <td className="no-break">11 months ago</td>
          <td><Button><MDBIcon icon="pencil-alt" /></Button></td>
        </tr>
        <tr>
          <td>37</td>
          <td>How to add child for admission?</td>
          <td><span className="bg-green">Active</span></td>
          <td className="no-break">11 months ago</td>
          <td className="no-break">11 months ago</td>
          <td><Button><MDBIcon icon="pencil-alt" /></Button></td>
        </tr>
        <tr>
          <td>36</td>
          <td>How to login with OTP as a Parent?</td>
          <td><span className="bg-green">Active</span></td>
          <td className="no-break">11 months ago</td>
          <td className="no-break">11 months ago</td>
          <td><Button><MDBIcon icon="pencil-alt" /></Button></td>
        </tr>
        <tr>
          <td>35</td>
          <td>How to Login as a Parent?</td>
          <td><span className="bg-green">Active</span></td>
          <td className="no-break">11 months ago</td>
          <td className="no-break">11 months ago</td>
          <td><Button><MDBIcon icon="pencil-alt" /></Button></td>
        </tr>
      </MDBTableBody>
    </MDBTable>

        </div>
      </>
    )
  }
}
