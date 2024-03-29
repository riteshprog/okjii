import axios from 'axios';
import React, { Component } from 'react';
import { Switch, message, Select } from 'antd';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { FormGroup, Label, Input } from "reactstrap";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";

import CookieHandler from '../../utils/cookieHandler';
import filterIcon from "../../img/wallet/filterIcon.png";

const {Option} = Select;

class Region extends Component {
  constructor(props){
    super(props);
    this.state = {
      createRegionModalVisibility: false,
      editRegionModalVisibility: false,
      allRegions: [
      ],
      singleRegion: {
        name: '',
        alias: []
      },
      editRegion: {
      }
    }
  }
  componentDidMount() {
    this.getRegions();
  }

  getRegions = () => {
    let url = process.env.REACT_APP_API_URL + '/region';
    let token = JSON.parse(CookieHandler.readCookie('token'));
    axios.get(url, {
      headers: {
        token
      }
    }).then(({data})=>{
      let {allRegions} = this.state;
      allRegions = data.data;
      this.setState({allRegions})
    }).catch(ex=>{
      if(ex.response && ex.response.status == 401){
        message.info('Session Expired!, Please Login Again.')
      }else {
        message.error(`Something went wrong`);
      }
    })
  }

  toggleModal = (type, data) => {
    if(type === 'create') {
      let {createRegionModalVisibility} = this.state;
      this.setState({ createRegionModalVisibility: !createRegionModalVisibility, singleRegion: { name: '', alias: [] } });
    }else if(type === 'delete'){
      let {deleteRegionModalVisibility} = this.state;
      this.setState({ deleteRegionModalVisibility: !deleteRegionModalVisibility, singleRegion: {} });
    }else if(type === 'edit'){
      let {editRegionModalVisibility} = this.state;
      this.setState({ editRegionModalVisibility: !editRegionModalVisibility, singleRegion: {} });
    }
    if(data){
      let { editRegion } = this.state;
      editRegion = data;
      this.setState({ editRegion});
    }
  };
  handleOnChange = (e, type, key) => {
    let value = e.target.value;
    let { singleRegion, editRegion } = this.state;

    if(type == 'create') {
      singleRegion[key] = value
      this.setState({singleRegion});
    } else if(type == 'edit') {
      editRegion[key] = value;
      this.setState({editRegion});
    }
  }

  handleOnAdd = () => {
    let { singleRegion } = this.state;
    let url = process.env.REACT_APP_API_URL + '/region';
    let token = JSON.parse(CookieHandler.readCookie('token'));
    
    if(singleRegion.name){
      axios.post(url, singleRegion, {
        headers: {
          token
        }
      }).then(({data})=> {
        if(data.status){
          message.success(`Region added Successfully!!`);
          this.toggleModal('create');
          this.getRegions();
        }else {
          message.error(data.message)
        }
      }).catch(ex=>{
        if(ex.response && ex.response.status == 401){
          message.info('Session Expired!, Please Login Again.')
        }else {
          message.error(`Something went wrong`);
        }
      })
    }else {
      message.error(`Name should not be empty!`)
    }
  }
  handleUpdateStatus = (status, region) => {
    let updateObj = {
      isActive: status
    }
    this.handleOnUpdate(region._id, updateObj, 'status')
  }

  handleOnUpdate = (regionId, updateObject = null, type) => {
    let url = process.env.REACT_APP_API_URL + '/region/' + regionId;
    let token = JSON.parse(CookieHandler.readCookie('token'));
    if(!updateObject){
      updateObject = this.state.editRegion;
      console.log(updateObject)
    }

    axios.patch(url, updateObject, {
      headers: {
        token
      }
    }).then(({data})=>{
      if(data.status){
        message.success(`Region Updated Successfully`);
        if(type != 'status') this.toggleModal('edit');
        this.getRegions();
      }
    }).catch(ex=>{
      if(ex.response && ex.response.status == 401){
        message.info('Session Expired!, Please Login Again.')
      }else {
        message.error(`Something went wrong`);
      }
    })
  }
  handleOnSelect = (value, key, type='create') => {
    if(type =='create'){
      let {singleRegion} = this.state;
      if(singleRegion.alias.includes(value)){
        let index = singleRegion.alias.findIndex((name => name==value));
        singleRegion.alias.splice(index, 1)
      }else singleRegion.alias.push(value);
      this.setState({singleRegion});
    }else if(type == 'edit') {
      let {editRegion} = this.state;
      if(editRegion[key].includes(value)){
        let index = editRegion.alias.findIndex((name => name==value));
        editRegion.alias.splice(index, 1)
      }else editRegion.alias.push(value);
      this.setState({editRegion});
    }
  }
  
  render() { 
    return ( 
      <div className="content">
        <div className="customer-filter wallet-row">
          <div className="col-md-9">
            <p>
              Region
            </p>
          </div>
          <div className="filter-search col-md-3">
            <p>
            <i onClick={()=>this.toggleModal('create')} className="cp op8 fa fa-plus mr-3"></i>
              <i className="fa fa-search"></i>
            </p>
            <p>
              <span className="filter-txt"> Filter</span>
              <img src={filterIcon} />
            </p>
          </div>
        </div>
        <div className=''>
            <MDBTable className="customer-table" striped>
              <MDBTableHead>
                <tr>
                  <th className="text-center">Name</th>
                  <th className="text-center">Alias</th>
                  <th className="text-center">Active</th>
                  <th className="text-center">Action</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              {this.state.allRegions.map(region=>(
                <tr>
                  <td className="text-center"><span className="text-green">{region.name}</span></td>
                  <td className="text-center"><span className="text-green">{region.alias.join(', ')}</span></td>
                  <td className="text-center"><Switch onChange={(e)=>this.handleUpdateStatus(e, region)} checked={region.isActive?true:false} checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
                  <td className="text-center"><MDBDropdown dropleft>
                      <MDBDropdownToggle color="primary">
                      <i className="fas fa-ellipsis-v" />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu  basic className="dropdown-bottom" >
                        <MDBDropdownItem onClick={()=>this.toggleModal('edit', Object.assign({}, region))}>Edit</MDBDropdownItem>
                    </MDBDropdownMenu>
                    </MDBDropdown>
                  </td>
                </tr>
            ))}
            </MDBTableBody>
          </MDBTable>
          </div>
          {this.state.createRegionModalVisibility?this.renderCreateNewRegionModal(this.state.createRegionModalVisibility):null}
          {this.state.editRegionModalVisibility?this.renderEditRegionModal(this.state.editRegionModalVisibility):null}
      </div>
     );
  }
  
  renderCreateNewRegionModal = ( createRegionModalVisibility ) => (
    <MDBContainer>
      <MDBModal isOpen={createRegionModalVisibility} toggle={()=>this.toggleModal('create')}>
        <MDBModalHeader toggle={()=>this.toggleModal('create')}>
          Create A New Region
        </MDBModalHeader>
        <MDBModalBody>
          <FormGroup>
            <Label>Name</Label>
            <Input onChange={(e)=>this.handleOnChange(e, 'create', 'name')} placeholder="Enter Name of the Region" />
          </FormGroup>
          <FormGroup>
            <Label>Add Alias</Label>
            <Select 
            mode="tags" 
            tokenSeparators={[',']} 
            style={{ width: "100%" }} 
            placeholder="Enter Alias"
            onSelect={(value)=>this.handleOnSelect(value, 'alias')}
            onDeselect={(value)=>this.handleOnSelect(value, 'alias')}
            >
            </Select>
          </FormGroup>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="success" onClick={()=>this.handleOnAdd('create')}> ADD </MDBBtn>
          <MDBBtn onClick={()=>this.toggleModal('create')}> CANCEL </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );

  renderEditRegionModal = ( editRegionModalVisibility) => (
    <MDBContainer>
      <MDBModal isOpen={editRegionModalVisibility} toggle={()=>this.toggleModal('edit')}>
        <MDBModalHeader toggle={()=>this.toggleModal('edit')}>
        Edit Region
        </MDBModalHeader>
        <MDBModalBody>
          <FormGroup>
            <Label>Name</Label>
            <Input onChange={(e)=>this.handleOnChange(e, 'edit', 'name')} value={this.state.editRegion.name} type="text" placeholder="Enter Name of the Region" />
          </FormGroup>
          <FormGroup>
            <Label>Add Alias</Label>
            <Select
            defaultValue={this.state.editRegion.alias}
            mode="tags" 
            tokenSeparators={[',']} 
            style={{ width: "100%" }} 
            placeholder="Enter Alias"
            onSelect={(value)=>this.handleOnSelect(value, 'alias', 'edit')}
            onDeselect={(value)=>this.handleOnSelect(value, 'alias', 'edit')}
            >
            </Select>
          </FormGroup>
        </MDBModalBody>
        <MDBModalFooter>  
          <MDBBtn color="success" onClick={()=>this.handleOnUpdate(this.state.editRegion._id)}> UPDATE </MDBBtn>
          <MDBBtn onClick={()=>this.toggleModal('edit')}> CANCEL </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
}




export default Region;