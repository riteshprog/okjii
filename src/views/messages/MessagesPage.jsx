import React, { Component } from 'react';
import { Switch } from 'antd';
import { CloseSquareFilled, EyeOutlined } from '@ant-design/icons';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCollapse, MDBCard, MDBCardBody } from "mdbreact";
import {  FormGroup, Label, Input } from 'reactstrap';
class MessagesPage extends Component {

  state={
    modal4: false,
    modal5: false,
    modal6: false,
    collapseID: "collapse1"
  }
  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));

  render() { 
    const { collapseID } = this.state;
    return ( 
      <div className='content  message-container'>
       <MDBTable className="customer-table" striped>
      <MDBTableHead>
        <tr>
          <th>ID</th>
          <th>From</th>
          <th>Email</th>
          <th>Contact No.</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Created</th>
          <th>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      <tr>
          <td>924</td>
          <td className="no-break">Chandni Shrivastava</td>
          <td>mpowerjobs2013@gmail.com</td>
          <td>7400707867</td>
          <td><span className="bg-support">Support</span></td>
          <td><span className="bg-read">Read</span></td>
          <td className="no-break">2 weeks ago</td>
          <td className="no-break"><span className="eye-outline"><EyeOutlined onClick={this.toggle(14)} /></span><span className="eye-outline"><CloseSquareFilled /></span></td>
        </tr>
        <tr>
          <td>923</td>
          <td>Urdu teacher jobs</td>
          <td>aneessyed134@gmail.com</td>
          <td>6301112470</td>
          <td><span className="bg-callback">Callback</span></td>
          <td><span className="bg-read">Read</span></td>
          <td>4 weeks ago</td>
          <td className="no-break"><span className="eye-outline"><EyeOutlined onClick={this.toggle(14)} /></span><span className="eye-outline"><CloseSquareFilled /></span></td>
        </tr>
        <tr>
          <td>922</td>
          <td>SUDIPTA ROY</td>
          <td>sudiptaroy306@gmail.com</td>
          <td>8436300506</td>
          <td><span className="bg-complain">Complain/Feedback</span></td>
          <td><span className="bg-read">Read</span></td>
          <td>1 Month ago</td>
          <td className="no-break"><span className="eye-outline"><EyeOutlined onClick={this.toggle(14)} /></span><span className="eye-outline"><CloseSquareFilled /></span></td>
        </tr>
        <tr>
          <td>921</td>
          <td>Pradeep Dhayal</td>
          <td>dhayal.pradeep15@gmail.com</td>
          <td>9116117011</td>
          <td><span className="bg-callback">CallBack</span></td>
          <td><span className="bg-read">Read</span></td>
          <td>1 Month ago</td>
          <td className="no-break"><span className="eye-outline"><EyeOutlined onClick={this.toggle(14)} /></span><span className="eye-outline"><CloseSquareFilled /></span></td>
        </tr>
       

      </MDBTableBody>
    </MDBTable>
 
    <MDBContainer>
        
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>Message Of user</MDBModalHeader>
          <MDBModalBody>
          <FormGroup>
        <Label for="exampleEmail">Name: Chandni Shrivastava</Label>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email: mpowerjobs2013@gmail.com</Label>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Number: 7400707867</Label>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Purpose: 7400707867</Label>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Subject: Support</Label>
      </FormGroup>


          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>View</MDBBtn>
            <MDBBtn outline color="green" className="cancel-model">Cancel</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
      </div>
     );
  }
}
 
export default MessagesPage;
