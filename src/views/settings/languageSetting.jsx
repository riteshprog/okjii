import axios from "axios";
import { Switch, notification, message } from "antd";
import moment from "moment-timezone";
import React, { Component } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { CustomInput, Row, Col, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCollapse, MDBCard, MDBCardBody } from "mdbreact";

class LanuageSettings extends Component {
  state = {
    createLanguageModalVisibility: false,
    editLanguageModalVisibility: false,
    deleteLanguageModalVisibility: false,
    collapseID: "create",
    newLanguage: {
      parameter: "",
      appId: [],
      status: 1
    },
    pushData: [],
    allLanguages: []
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
    this.getNotification();
  }

  getNotification = () => {
    axios.get(process.env.REACT_APP_API_URL + "/languageSetting")
    .then(({ data }) => {
      const allLanguages = data.data;
      this.setState({ allLanguages });
    })
    .catch((err) => {
      console.log(`catch err`, err);
      if(err.response.status == 401){
        message.info('Session Expired!, Please Login Again.')
      }else {
				message.error(`Something went wrong`);
			}
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
      let {createLanguageModalVisibility} = this.state;
      this.setState({ createLanguageModalVisibility: !createLanguageModalVisibility });
    }else if(type === 'delete'){
      let {deleteLanguageModalVisibility} = this.state;
      this.setState({ deleteLanguageModalVisibility: !deleteLanguageModalVisibility });
    }else if(type === 'edit'){
      let {editLanguageModalVisibility, newLanguage} = this.state;
      this.setState({ editLanguageModalVisibility: !editLanguageModalVisibility });
    }
    if(data){
      let { newLanguage } = this.state;
      newLanguage = data;
      data && this.setState({ newLanguage});
    }
  };
  

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  };

  handleOnChange = (e, type, key) => {
    if(type === 'create'){
      const { newLanguage } = this.state;
      if(key==='parameter') newLanguage[key] = e.target.value;
      else {
        const value = parseInt(e.target.value);
        const index = newLanguage[key].indexOf(value);
        if(index == -1) newLanguage[key].push(value);
        else newLanguage[key].splice(index, 1);
      }
      this.setState({ newLanguage });
    }
  };

  handleOnSelect = (e, type, key) => {
    console.log(e, type, key);
  };

  handleOnUpdate = (e) => {
    axios.post(
      process.env.REACT_APP_API_URL + "/pushNotifications/update",
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
    const { newLanguage } = this.state;
    axios.delete(process.env.REACT_APP_API_URL + '/pushNotifications/' + newLanguage._id)
    .then(({data})=> {
      if(data.status) message.suceess(data.message)
    }).catch(ex=>{
      console.log(ex)
      message.error(`Something went wrong`)
    })
  }

  handleToggleActive = (e, id) => {
    let updateObj = {
      "_id": id,
      status: e?1:2
    }
    this.handleUpdateNotification(updateObj);
  }

  editPushNotif = (e) => console.log(this.state.modalData);

  handleOnAdd = ()=> {
    const data = this.state.newLanguage;
    axios.post(process.env.REACT_APP_API_URL + '/languageSetting/add', data)
    .then(({data})=>{
      if(data.status) {
        this.toggleModal('create');
        this.getNotification();
      }
    }).catch(err=>{
      console.log(err);
    })
  }
  handleUpdateNotification = (updateObj) => {
    axios.post(process.env.REACT_APP_API_URL + '/languageSetting/update', updateObj)
    .then(({data})=>{
      this.getNotification()

    }).catch(err=>{
      console.log(err)
    })
  }

  render() {
    const { collapseID, createLanguageModalVisibility, deleteLanguageModalVisibility, editLanguageModalVisibility, newLanguage, allLanguages } = this.state;
    return (
      <div className="content notification-container">
        <Row className="customer-filter">
          <Col md="10">
            <p> Notification <span className="greter-than">></span> Language Settings </p>
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
              <th>PARAMETER</th>
              <th>APP ID</th>
              <th>CREATED</th>
              <th className="text-center">ACTIVE</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {allLanguages.map((obj, index) => {
              return (
                <tr>
                  <td>{obj.parameter}</td>
                  <td>
                    <span className="text-green"> {this.getAppId(obj.appId)} </span>
                  </td>
                  <td>{moment(obj.createdAt).format("DD/MM/YYYY")}</td>
                  <td className="text-center">
                    <Switch checked={obj.status==1?true:false}  checkedChildren="yes" onClick={e=>this.handleToggleActive(e, obj._id)} unCheckedChildren="no" className="Switch-button" />
                  </td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>

        {this.renderCreateNewPushNotificationModal(
          collapseID,
          createLanguageModalVisibility
        )}
        {this.renderDeleteModal(
          deleteLanguageModalVisibility
        )}
        {this.renderEditModal(
          collapseID,
          editLanguageModalVisibility,
          newLanguage
        )}
      </div>
    );
  }

  renderCreateNewPushNotificationModal = ( collapseID, createLanguageModalVisibility ) => (
    <MDBContainer>
      <MDBModal isOpen={createLanguageModalVisibility} toggle={()=>this.toggleModal('create')} centered >
        <MDBModalHeader toggle={()=>this.toggleModal('create')}>
          Create New Push Notification
        </MDBModalHeader>
        <MDBModalBody>
          <FormGroup>
            <Label>Parameter</Label>
            <Input onChange={(e)=>this.handleOnChange(e, 'create', 'parameter')} value={this.state.newLanguage.name} type="text" placeholder="Enter Parameter Name" />
          </FormGroup>

          <Label for="exampleSelect">App ID</Label>
          <MDBCard className="collesp-header">
            <h4 onClick={this.toggleCollapse("collapse1")}> Selected App ID <i className={ collapseID === "collapse1" ? "fa fa-angle-down rotate-icon float-right" : "fa fa-angle-down float-right" } /> </h4>
            <MDBCollapse id="collapse1" isOpen={collapseID}>
              <MDBCardBody>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customer" value={1} onChange={(e)=>this.handleOnChange(e, 'create', 'appId')} checked={this.state.newLanguage.appId.includes(1)} />
                  <label class="custom-control-label" for="customer"> Customer </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="retailer" value={2} onChange={(e)=>this.handleOnChange(e, 'create', 'appId')} checked={this.state.newLanguage.appId.includes(2)} />
                  <label class="custom-control-label" for="retailer"> Retailer </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="okkjiFast" value={3} onChange={(e)=>this.handleOnChange(e, 'create', 'appId')} checked={this.state.newLanguage.appId.includes(3)}/>
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

  renderDeleteModal = (deleteLanguageModalVisibility) => (
    <MDBContainer>
      <MDBModal isOpen={deleteLanguageModalVisibility} toggle={()=>this.toggleModal('delete')} centered >
        <MDBModalHeader toggle={()=>this.toggleModal('delete')} > Delete Push Notification </MDBModalHeader>
        <MDBModalBody> You want to Delete &#x201C;PUSH ID Okk01&#x201D; notification, Please Confirm </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={()=>this.handleOnDelete()}> DELETE </MDBBtn>
          <MDBBtn outline color="green" className="cancel-model" onClick={()=>this.toggleModal('delete')}> CANCEL </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  )

  renderEditModal = (collapseID, editLanguageModalVisibility, notification) => (
    <MDBContainer>
    <MDBModal isOpen={editLanguageModalVisibility} toggle={()=>this.toggleModal('edit')} centered >
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

export default LanuageSettings;
