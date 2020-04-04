import React, { Component } from 'react';
//import NotificationNavBar from './NotificationNavBar'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCollapse, MDBCard, MDBCardBody } from "mdbreact";
import { CustomInput, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Switch } from 'antd';

class EmailNotification extends Component {
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
      <div className='content notification-container'>
          <Row className="customer-filter">
            <Col md="10"><p>Notifications <span className="greter-than">></span> Email Notifications</p></Col>
            <Col md="2" className="filter-search">
            <a onClick={this.toggle(16)}><span className="filter-txt"> Create</span> <span className="pluse-sign"><i class="fas fa-plus"></i></span></a></Col>
          </Row>
       <MDBTable className="customer-table" striped>
      <MDBTableHead>
        <tr>
          <th>PUSH ID</th>
          <th>PARAMETER</th>
          <th>APP ID</th>
          <th>CREATED</th>
          <th className="text-center">ACTIVE</th>
          <th className="text-center">ACTION</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td><span className="text-green">Okk</span>01</td>
          <td>Active on my Reviews</td>
          <td><span className="text-green">Customer</span></td>
          <td>17 Nov 2019</td>
          <td className="text-center"> <Switch checkedChildren="yes" unCheckedChildren="no" /></td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem onClick={this.toggle(14)}>Edit</MDBDropdownItem>
          <MDBDropdownItem onClick={this.toggle(15)}>Delete</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td><span className="text-green">Okk</span>02</td>
          <td>Important Updates for Okkji</td>
          <td><span className="text-green">Retail</span></td>
          <td>15 Dec 2019</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" /></td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
        <MDBDropdownItem onClick={this.toggle(14)}>Edit</MDBDropdownItem>
          <MDBDropdownItem onClick={this.toggle(15)}>Delete</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td><span className="text-green">Okk</span>03</td>
          <td>Activity on my Reviews</td>
          <td><span className="text-green">OkkJi Fast</span></td>
          <td>20 Feb 2020</td>
          <td className="text-center"><Switch checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
        <MDBDropdownItem onClick={this.toggle(14)}>Edit</MDBDropdownItem>
          <MDBDropdownItem onClick={this.toggle(15)}>Delete</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>


      </MDBTableBody>
    </MDBTable>
 
    <MDBContainer>
        
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>Edit Email Notification</MDBModalHeader>
          <MDBModalBody>
          <FormGroup>
        <Label for="exampleEmail">Parameter</Label>
        <Input
          type="text"
          name="email"
          id="exampleEmail"
          placeholder="Activity on my Reviews"
        />
      </FormGroup>
      <MDBCard className="collesp-header">
          <h4 onClick={this.toggleCollapse("collapse1")}>
          Selected App ID
            <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon float-right" : "fa fa-angle-down float-right" } />
          </h4>
          <MDBCollapse id="collapse1" isOpen={collapseID}>
            <MDBCardBody>
            <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
        <label class="custom-control-label" for="defaultUnchecked">Customer</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
        <label class="custom-control-label" for="defaultUnchecked">Retailer</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
        <label class="custom-control-label" for="defaultUnchecked">OkkJi Fast</label>
      </div>
                  </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>Update</MDBBtn>
            <MDBBtn outline color="green" className="cancel-model">Cancel</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>

      <MDBContainer>
        
        <MDBModal isOpen={this.state.modal15} toggle={this.toggle(15)} centered>
          <MDBModalHeader toggle={this.toggle(15)}>Delete Email Notification</MDBModalHeader>
          <MDBModalBody>
You want to Delete &#x201C;PUSH ID Okk01&#x201D; notification, Please Confirme.            </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(15)}>DELETE</MDBBtn>
            <MDBBtn  outline color="green" className="cancel-model">CANCEL</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    
      <MDBContainer>
        
        <MDBModal isOpen={this.state.modal16} toggle={this.toggle(16)} centered>
          <MDBModalHeader toggle={this.toggle(16)}>Edit Email Notification</MDBModalHeader>
          <MDBModalBody>
          <FormGroup>
        <Label for="exampleEmail">Parameter</Label>
        <Input
          type="text"
          name="email"
          id="exampleEmail"
          placeholder="Enter Parameter Name"
        />
      </FormGroup>
      <MDBCard className="collesp-header">
          <h4 onClick={this.toggleCollapse("collapse1")}>
          Selected App ID
            <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon float-right" : "fa fa-angle-down float-right" } />
          </h4>
          <MDBCollapse id="collapse1" isOpen={collapseID}>
            <MDBCardBody>
            <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
        <label class="custom-control-label" for="defaultUnchecked">Customer</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
        <label class="custom-control-label" for="defaultUnchecked">Retailer</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
        <label class="custom-control-label" for="defaultUnchecked">OkkJi Fast</label>
      </div>
                  </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(16)}>ADD</MDBBtn>
            <MDBBtn  outline color="green" className="cancel-model">CANCEL</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>



                </div>
     );
  }
}
 
export default EmailNotification;