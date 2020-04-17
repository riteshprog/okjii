import axios from "axios";
import { Switch, notification, message } from "antd";
import moment from "moment-timezone";
import React, { Component } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { CustomInput, Row, Col, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCollapse, MDBCard, MDBCardBody } from "mdbreact";

class EmailNotification extends Component {
  state = {
    createEmailNotificationModalVisibility: false,
    editEmailNotificationModalVisibility: false,
    deleteEmailNotificationModalVisibility: false,
    collapseID: "create",
    newEmailNotification: {
      parameter: "",
      appId: [],
      status: 1
    },
    pushData: [],
    allEmailNotifications: []
  };

  constructor(props) {
    super(props);
    this.pushData = [];
  }

  getAppId(data) {
    let appId = data.toString();
    appId = appId.replace("1", "Customer");
    appId = appId.replace(2, "Retailer");
    appId = appId.replace(3, "Okkji Fast");
    return appId;
  }

  componentDidMount() {
    this.getEmailNotification();
  }

  getEmailNotification = () => {
    axios.get(process.env.REACT_APP_API_URL + "/emailPreferences")
    .then(({ data }) => {
      const allEmailNotifications = data.data;
      this.setState({ allEmailNotifications });
    })
    .catch((err) => {
      console.log(`catch err`, err);
    });
  }

  editModal = (nr, data) => () => {
    let modalData = data;
    let modalNumber = "modal" + nr;
    this.setState({ modalData: modalData });
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  deleteModal = (nr, data) => () => {
    let modalData = data;
    let modalNumber = "modal" + nr;
    this.setState({ modalData: modalData });
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  createModal = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  closeEditModal = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  toggleModal = (type, data) => {
    if(type === 'create') {
      let {createEmailNotificationModalVisibility} = this.state;
      this.setState({ createEmailNotificationModalVisibility: !createEmailNotificationModalVisibility });
    }else if(type === 'delete'){
      let {deleteEmailNotificationModalVisibility} = this.state;
      this.setState({ deleteEmailNotificationModalVisibility: !deleteEmailNotificationModalVisibility });
    }else if(type === 'edit'){
      let {editEmailNotificationModalVisibility, newEmailNotification} = this.state;
      this.setState({ editEmailNotificationModalVisibility: !editEmailNotificationModalVisibility });
    }
    if(data){
      let { newEmailNotification } = this.state;
      newEmailNotification = data;
      data && this.setState({ newEmailNotification});
    }
  };
  

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  };

  handleOnChange = (e, type, key) => {
    if(type === 'create'){
      const { newEmailNotification } = this.state;
      if(key==='parameter') newEmailNotification[key] = e.target.value;
      else {
        const value = parseInt(e.target.value);
        const index = newEmailNotification[key].indexOf(value);
        if(index == -1) newEmailNotification[key].push(value);
        else newEmailNotification[key].splice(index, 1);
      }
      this.setState({ newEmailNotification });
    }
  };

  handleOnSelect = (e, type, key) => {
    console.log(e, type, key);
  };

  handleOnUpdate = (e) => {
    axios.post(
      process.env.REACT_APP_API_URL + "/emailPreferences/update",
      this.state.modalData
    )
      .then(({ data }) => {
        const pushData = data.data;
        this.pushData = pushData;
        this.setState({ pushData });
      })
      .catch((err) => {
        console.log(`catch err`, err);
      });
  };
  handleOnDelete = () => {
    const { newEmailNotification } = this.state;
    axios.delete(process.env.REACT_APP_API_URL + '/pushNotifications', {
      "_id": newEmailNotification._id
    })
    .then(({data})=> {
      if(data.status) message.suceess(data.message)
    }).catch(ex=>{
      console.log(ex)
      message.error(`Something went wrong`)
    })
  }

  handleToggleActive = (e, id) => {
    let updateObj = {
      status: e?1:2
    }
    this.handleUpdateNotification(id, updateObj);
  }

  editPushNotif = (e) => console.log(this.state.modalData);

  handleOnAdd = ()=> {
    const data = this.state.newEmailNotification;
    axios.post(process.env.REACT_APP_API_URL + '/emailPreferences/add', data)
    .then(({data})=>{
      if(data.status) {
        this.toggleModal('create');
        this.getEmailNotification();
      }
    }).catch(err=>{
      console.log(err);
    })
  }
  handleUpdateNotification = (id, updateObj) => {
    axios.patch(process.env.REACT_APP_API_URL + '/pushNotifications/' + id, updateObj)
    .then(({data})=>{
      this.getEmailNotification()

    }).catch(err=>{
      console.log(err)
    })
  }

  render() {
    const { collapseID, createEmailNotificationModalVisibility, deleteEmailNotificationModalVisibility, editEmailNotificationModalVisibility, newEmailNotification, allEmailNotifications } = this.state;
    return (
      <div className="content notification-container">
        <Row className="customer-filter">
          <Col md="10">
            <p> Notification <span className="greter-than">></span> Push Notification </p>
          </Col>
          <Col md="2" className="filter-search">
            <a onClick={()=>this.toggleModal('create')}>
              <span className="filter-txt"> Create</span>
              <span className="pluse-sign">
                <i class="fas fa-plus"></i>
              </span>
            </a>
          </Col>
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
            {allEmailNotifications.map((obj, index) => {
              return (
                <tr>
                  <td>
                    <span className="text-green">Okk </span> {index + 1}
                  </td>
                  <td>{obj.parameter}</td>
                  <td>
                    <span className="text-green"> {this.getAppId(obj.appId)} </span>
                  </td>
                  <td>{moment(obj.createdAt).format("DD/MM/YYYY")}</td>
                  <td className="text-center">
                    <Switch checked={obj.status==1?true:false}  checkedChildren="yes" onClick={e=>this.handleToggleActive(e, obj._id)} unCheckedChildren="no" className="Switch-button" />
                  </td>
                  <td className="text-center">
                    <MDBDropdown dropleft>
                      <MDBDropdownToggle color="primary">
                        <i class="fas fa-ellipsis-v" />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic className="dropdown-bottom">
                        <MDBDropdownItem onClick={()=>this.toggleModal('edit', obj)}> Edit </MDBDropdownItem>
                        <MDBDropdownItem onClick={()=>this.toggleModal('delete', obj)}> Delete </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>

        {this.renderCreateNewPushNotificationModal(
          collapseID,
          createEmailNotificationModalVisibility
        )}
        {this.renderDeleteModal(
          deleteEmailNotificationModalVisibility
        )}
        {this.renderEditModal(
          collapseID,
          editEmailNotificationModalVisibility,
          newEmailNotification
        )}
      </div>
    );
  }

  renderCreateNewPushNotificationModal = ( collapseID, createEmailNotificationModalVisibility ) => (
    <MDBContainer>
      <MDBModal isOpen={createEmailNotificationModalVisibility} toggle={()=>this.toggleModal('create')} centered >
        <MDBModalHeader toggle={()=>this.toggleModal('create')}>
          Create New Push Notification
        </MDBModalHeader>
        <MDBModalBody>
          <FormGroup>
            <Label>Parameter</Label>
            <Input onChange={(e)=>this.handleOnChange(e, 'create', 'parameter')} value={this.state.newEmailNotification.name} type="text" placeholder="Enter Parameter Name" />
          </FormGroup>

          <Label for="exampleSelect">App ID</Label>
          <MDBCard className="collesp-header">
            <h4 onClick={this.toggleCollapse("collapse1")}> Selected App ID <i className={ collapseID === "collapse1" ? "fa fa-angle-down rotate-icon float-right" : "fa fa-angle-down float-right" } /> </h4>
            <MDBCollapse id="collapse1" isOpen={collapseID}>
              <MDBCardBody>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customer" value={1} onChange={(e)=>this.handleOnChange(e, 'create', 'appId')} checked={this.state.newEmailNotification.appId.includes(1)} />
                  <label class="custom-control-label" for="customer"> Customer </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="retailer" value={2} onChange={(e)=>this.handleOnChange(e, 'create', 'appId')} checked={this.state.newEmailNotification.appId.includes(2)} />
                  <label class="custom-control-label" for="retailer"> Retailer </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="okkjiFast" value={3} onChange={(e)=>this.handleOnChange(e, 'create', 'appId')} checked={this.state.newEmailNotification.appId.includes(3)}/>
                  <label class="custom-control-label" for="okkjiFast"> OkkJi Fast </label>
                </div>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={()=>this.handleOnAdd('create')}> ADD </MDBBtn>
          <MDBBtn outline color="green" className="cancel-model" onClick={()=>this.toggleModal('create')}> CANCEL </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );

  renderDeleteModal = (deleteEmailNotificationModalVisibility) => (
    <MDBContainer>
      <MDBModal isOpen={deleteEmailNotificationModalVisibility} toggle={()=>this.toggleModal('delete')} centered >
        <MDBModalHeader toggle={()=>this.toggleModal('delete')} > Delete Push Notification </MDBModalHeader>
        <MDBModalBody> You want to Delete &#x201C;PUSH ID Okk01&#x201D; notification, Please Confirm </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={()=>this.handleOnDelete()}> DELETE </MDBBtn>
          <MDBBtn outline color="green" className="cancel-model" onClick={()=>this.toggleModal('delete')}> CANCEL </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  )

  renderEditModal = (collapseID, editEmailNotificationModalVisibility, notification) => (
    <MDBContainer>
    <MDBModal isOpen={editEmailNotificationModalVisibility} toggle={()=>this.toggleModal('edit')} centered >
      <MDBModalHeader toggle={()=>this.toggleModal('edit')}> Edit Push Notification </MDBModalHeader>
      <MDBModalBody>
        <FormGroup>
          {console.log(`notification`, notification)}
          <Label for="editParameter">Parameter</Label>
          <Input type="text" name="parameter" id="editParameter" onChange={(e) => this.handleOnChange(e, "parameter")} 
          value={notification.parameter} 
          />
        </FormGroup>
        <MDBCard className="collesp-header">
          <h4 onClick={this.toggleCollapse("collapse1")}>
            Selected App ID
            <i className={ collapseID === "collapse1" ? "fa fa-angle-down rotate-icon float-right" : "fa fa-angle-down float-right" } />
          </h4>

          <MDBCollapse id="collapse1" isOpen={collapseID}>
            <MDBCardBody>
              <div class="custom-control custom-checkbox">
                <input
                  onChange={(e) => this.handleOnSelect(e, "appId")}
                  value="1"
                  type="checkbox"
                  class="custom-control-input"
                  id="customerCheckbox"
                />
                <label
                  class="custom-control-label"
                  for="customerCheckbox"
                >
                  Customer
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  onChange={(e) => this.handleOnSelect(e, "appId")}
                  value="2"
                  type="checkbox"
                  class="custom-control-input"
                  id="retailerCheckbox"
                />
                <label
                  class="custom-control-label"
                  for="retailerCheckbox"
                >
                  Retailer
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  onChange={(e) => this.handleOnSelect(e, "appId")}
                  value="3"
                  type="checkbox"
                  class="custom-control-input"
                  id="fastCheckbox"
                />
                <label class="custom-control-label" for="fastCheckbox">
                  OkkJi Fast
                </label>
              </div>
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" onClick={this.handleOnUpdate}>
          Update
        </MDBBtn>
        <MDBBtn
          outline
          color="green"
          onClick={()=>this.toggleModal('edit')}
          className="cancel-model"
        >
          Cancel
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  </MDBContainer>
  )
}

export default EmailNotification;
