import React, { Component } from 'react';
//import NotificationNavBar from './NotificationNavBar'
import { Switch } from 'antd';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCollapse, MDBCard, MDBCardBody } from "mdbreact";
import { CustomInput, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Axios from "axios";
import moment from 'moment-timezone';

class Notification extends Component {
  state={
    modal4: false,
    modal5: false,
    modal6: false,
    collapseID: "collapse1",
    modalData:{
      parameter:'',
      appId:[],
    },
    pushData:[],
  }

  constructor(props){
    super(props)
    this.pushData = [];
  }

  getAppId(data)
    {
      let appId = data.toString();
      appId = appId.replace('1', "Customer");
      appId = appId.replace(2, "Retailer");
      appId = appId.replace(3, "Okkji Fast");
      return appId;
    }
  
  componentDidMount() {
    Axios.get(process.env.REACT_APP_API_URL + '/pushNotifications').then(({data})=>{
     const pushData = data.data;
     this.pushData = pushData;
     this.setState({pushData})
    }).catch(err=>{
      console.log(`catch err`, err);
    })
  }

  editModal = (nr,data) => () => {
    let modalData = data;
    let modalNumber = 'modal' + nr;
    this.setState({modalData:modalData});
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    })
  }

  deleteModal = (nr,data) => () => {
    let modalData = data;
    let modalNumber = 'modal' + nr;
    this.setState({modalData:modalData});
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    })
  }

  createModal = (nr) => () => {
    let modalNumber = 'modal' + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    })
  }

  closeEditModal = (nr) => () => {
    let modalNumber = 'modal' + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    })
  }



  toggle = (nr,data) => () => {
    console.log(nr);
    console.log(data);
    let modalData = data;
    let modalNumber = 'modal' + nr;
    this.setState({modalData:modalData});
    console.log(this.state.modalData);
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    })
  }
  toggleCollapse = collapseID => () =>
    {
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }));
    }


   handleOnChange = (e, type) => {
    const modalData = this.state.modalData;
    modalData[type] = e.target.value;
    this.setState({modalData});
  }

  handleOnSelect = (e, type) => {
    console.log(e);
    console.log(e.target.value);
    const modalData = this.state.modalData;
    modalData[type] = e.target.value;
    this.setState({modalData});
  }

  handleOnUpdate = (e) => {
    console.log(this.state.modalData);
    Axios.post(process.env.REACT_APP_API_URL + '/pushNotifications/update',this.state.modalData).then(({data})=>{
       const pushData = data.data;
       this.pushData = pushData;
       this.setState({pushData})
      }).catch(err=>{
        console.log(`catch err`, err);
      })
  }

  editPushNotif = (e) => {
    console.log(this.state.modalData);
  }

  render() { 
    const { collapseID } = this.state;
    const data = this.state.pushData;
    const modalData = this.state.modalData;
    return ( 
      <div className='content notification-container'>
          <Row className="customer-filter">
            <Col md="10"><p>Notification <span className="greter-than">></span> Push Notification</p></Col>
            <Col md="2" className="filter-search">
            <a onClick={this.createModal(16)}><span className="filter-txt"> Create</span> <span className="pluse-sign"><i class="fas fa-plus"></i></span></a></Col>
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
          {data.map((obj,index) => {
                  return (
                            <tr>
                              <td><span className="text-green">Okk </span>{index+1}</td>
                              <td>{obj.parameter}</td>
                              <td><span className="text-green">{this.getAppId(obj.appId)}</span></td>
                              <td>{moment(obj.createdAt).format('DD/MM/YYYY')}</td>
                              <td className="text-center">
                                <Switch checked={obj.status == 1 ? true:false} checkedChildren="yes" unCheckedChildren="no" className="Switch-button" />
                              </td>
                              <td className="text-center">
                                <MDBDropdown dropleft>
                                  <MDBDropdownToggle color="primary">
                                     <i class="fas fa-ellipsis-v" />
                                  </MDBDropdownToggle>
                                  <MDBDropdownMenu  basic className="dropdown-bottom" >
                                    <MDBDropdownItem onClick={this.editModal(14,obj)}>Edit</MDBDropdownItem>
                                    <MDBDropdownItem onClick={this.deleteModal(15,obj)}>Delete</MDBDropdownItem>
                                  </MDBDropdownMenu>
                                </MDBDropdown>
                              </td>
                            </tr>
                         )
                })}
          </MDBTableBody>
        </MDBTable>
 
    <MDBContainer>
      <MDBModal backdrop={false} isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>Edit Push Notification</MDBModalHeader>
          <MDBModalBody>
            <FormGroup>
              <Label for="editParameter">Parameter</Label>
              {console.log(modalData)}
              <Input
                type="text"
                name="parameter"
                id="editParameter"
                onChange={(e)=> this.handleOnChange(e,'parameter') }
                value={modalData && modalData.parameter ? modalData.parameter : ''}
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
                    <input onChange={(e)=> this.handleOnSelect(e,'appId')} value="1" checked={modalData  && modalData.appId && modalData.appId.includes(1) ? true:false} type="checkbox" class="custom-control-input" id="customerCheckbox" />
                    <label class="custom-control-label" for="customerCheckbox">Customer</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input onChange={(e)=> this.handleOnSelect(e,'appId')} value="2" checked={modalData  && modalData.appId && modalData.appId.includes(2) ? true:false} type="checkbox" class="custom-control-input" id="retailerCheckbox" />
                    <label class="custom-control-label" for="retailerCheckbox">Retailer</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input onChange={(e)=> this.handleOnSelect(e,'appId')} value="3" checked={modalData  && modalData.appId && modalData.appId.includes(3) ? true:false} type="checkbox" class="custom-control-input" id="fastCheckbox" />
                    <label class="custom-control-label" for="fastCheckbox">OkkJi Fast</label>
                  </div>
                </MDBCardBody>
              </MDBCollapse>
            </MDBCard>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.handleOnUpdate}>Update</MDBBtn>
            <MDBBtn outline color="green" onClick={this.closeEditModal(14)} className="cancel-model">Cancel</MDBBtn>
          </MDBModalFooter>
      </MDBModal>
    </MDBContainer>

      <MDBContainer>
        
        <MDBModal  isOpen={this.state.modal15} toggle={this.toggle(15)} centered>
          <MDBModalHeader toggle={this.toggle(15)}>Delete Push Notification</MDBModalHeader>
          <MDBModalBody>
              You want to Delete &#x201C;PUSH ID Okk01&#x201D; notification, Please Confirme.            
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(15)}>DELETE</MDBBtn>
            <MDBBtn  outline color="green" className="cancel-model">CANCEL</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    
      <MDBContainer>
        
        <MDBModal isOpen={this.state.modal16} toggle={this.toggle(16)} centered>
          <MDBModalHeader toggle={this.toggle(16)}>Create New Push Notification</MDBModalHeader>
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

      <Label for="exampleSelect">App ID</Label>
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
 
export default Notification;