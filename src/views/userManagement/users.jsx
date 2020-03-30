import React from "react";
import Axios from "axios";
import Validate from 'raysk-vali';
import moment from 'moment-timezone';
import { Link } from "react-router-dom";
import { Avatar, Table, Tag, Select, DatePicker, message } from "antd";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, InputGroup, InputGroupAddon } from "reactstrap";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import './user.css';

const {Option} = Select;
const { RangePicker } = DatePicker;

const dateFormat = 'DD/MM/YYYY';

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      addNewUserModalVisibility: false,
      showActions: false,
      allUsers: [],
      newUser: {
        name: '',
        email: '',
        userType: '',
        country: '',
        state: '',
        district: '',
        dob: ''
      },
      errorMessage: '',
      showEmailError: false,
      userTypes: ['1', '2'],
      location: {
        lat: '',
        lng: '',
        label: ''
      },
      userPhoto: ''
    }
    this.ownerPhotoRef = React.createRef();
  }
  columns = [
    {
      title: `User Photo`,
      dataIndex: 'basic',
      key: '_id',
      render: ({userPhoto}) => <Avatar size={64} src={userPhoto}/>
    },
    {
      title: 'Name',
      dataIndex: 'basic',
      key: '_id',
      render: ({name}) => <span>{name?name:'N/A'}</span>,
    },
    {
      title: 'Email',
      dataIndex: 'basic',
      key: '_id',
      render: ({email}) => <span>{email}</span>,
    },
    {
      title: 'User Type',
      dataIndex: 'userInfo',
      key: '_id',
      render: ({userType}) => (userType && userType.name)?<Tag>{userType.name}</Tag>:<span>N/A</span>,
    },
    {
      title: 'Gender',
      dataIndex: 'basic',
      key: '_id',
      render: ({gender}) => <span>{gender?gender:'N/A'}</span>,
    },
    {
      title: 'Action',
      dataIndex: '_id',
      key: 'x',
      render: shopId => <a >View</a>, //href={`/admin/shops/single/${shopId}`}
    }
  ]
  componentDidMount(){
    this.getAllUsers();
    this.getAllUserTypes();
  }
  getAllUserTypes = () => {
    Axios.get(process.env.REACT_APP_API_URL + '/userType')
    .then(({data})=>{
      if(data.status){
        this.setState({userTypes: data.allUserTypes})
      }else{
        console.log('no user type found')
      }
    }).catch(err=>{
      console.log(`catch`, err);
    })
  }
  getAllUsers = () => {
    Axios.get(process.env.REACT_APP_API_URL + '/user')
    .then(({data})=>{
      if(data.status){
        this.setState({allUsers: data.allUsers})
      }else{
        console.log('no user found')
      }
    }).catch(err=>{
      console.log(`catch`, err);
    })
  }

  toggleAddNewUser = () => this.setState({addNewUserModalVisibility: !this.state.addNewUserModalVisibility})
  handleAddNewUser = (e, type) => {
    if(type == 'addNewUser'){
      // window.location.pathname= 'admin/user';
      this.toggleAddNewUser();
    }
  }
  
  checkForEmail = email => Validate.isEmail(email); 

  handleOnChange = (e, type) => {
    const newUser = this.state.newUser;
    type=='ownerPhoto' && e.preventDefault();
    if(type == 'ownerPhoto') {
      let userPhoto = e.target.files[0];
      this.setState({userPhoto})
    } else {
      newUser[type] = e.target.value;
    }
    this.setState({newUser});
  }
  handleDateChange = (e, type)=>{
    let newUser = this.state.newUser;
    newUser[type] = moment(e).format('DD/MM/YYYY');
    this.setState({newUser})
  }
  handleOnSelect = (e, type) => {
    const newUser = this.state.newUser;
    if(type == 'userPhoto'){
      e.preventDefault();
      this.ownerPhotoRef.current.click();
    } else if(type == 'userType') newUser.userType = e;

    this.setState({newUser})
  }


  renderFunc = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
    <div className="autocomplete-root">
      <input placeholder='Select Store Location from map' {...getInputProps({className: 'form-control'})} />
      <div className="autocomplete-dropdown-container">
        {suggestions.map(suggestion => (
          <div {...getSuggestionItemProps(suggestion)}>
            <span>{suggestion.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
  
  getAddressFromLatLong = (lat, lng) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBfvdlr4pZ5UbmIM9KzNSASmDy9pZsLQn0`;
    return Axios.get(url).then(({data})=>{
      let address = '';
      if(data.results.length){
        for ( var i = 0; i < data.results[0].address_components.length; i++) {
          if (data.results[0].address_components[i].types.indexOf("country") > -1) {
            address += data.results[0].address_components[i].long_name + "";
          }
          if (data.results[0].address_components[i].types.indexOf("administrative_area_level_1") > -1) {
            address += data.results[0].address_components[i].long_name + ", ";
          }
          if (data.results[0].address_components[i].types.indexOf("administrative_area_level_2") > -1) {
            address += data.results[0].address_components[i].long_name + ", ";
          }
        }
        return address;
      }else return address;
    }).catch(err => {
      console.log(err);
      return '';
    })
  }
  
  onPreferenceLocationChange = (preferenceLocation, type='') => {
    let location = this.state.location;
    let newUser = this.state.newUser;
    location['label'] = preferenceLocation;
    let labelArr = location['label'].split(', ').reverse();
    
    newUser.country = labelArr[0];
    newUser.state = labelArr[1];
    newUser.district = labelArr[2];

    this.setState({newUser})
    this.setState({location}, () => {
      geocodeByAddress(preferenceLocation)
      .then(results => getLatLng(results[0]))
      .then((latLng) => {
        let location = this.state.location;
        location['lat'] = latLng.lat;
        location['lng'] = latLng.lng;
        this.setState({location});
      }).catch(error => console.error('Error', error));
    });
  }
  
  submitNewUserDate = ({basic, userInfo}, e) => {
    let data = new FormData();
    console.log(basic, userInfo)
    data.set('basic', JSON.stringify(basic));
    data.set('userInfo', JSON.stringify(userInfo));
    
    data.append('userPhoto', this.state.userPhoto);

    Axios.post(process.env.REACT_APP_API_URL + '/user', data, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(({data})=>{
      if(data.status){
        this.setState({errorMessage: ``})
        document.querySelector('#save-btn').disabled = false;
        window.location.reload();
      }else{
        this.setState({errorMessage: data.errorMessage})
        console.log('Something went wrong', data.errorMessage);
        document.querySelector('#save-btn').disabled = false;
      }
    }).catch(err=>{
      this.setState({errorMessage: `Something went wrong`})
      document.querySelector('#save-btn').disabled = false;
      console.log(`catch`, err);
    })
  }
  
  handleOnUserSave = (e)=> {
    const {userType, ...basic} = this.state.newUser;
    const isValidEmail = this.checkForEmail(basic.email);
    if(!isValidEmail) this.setState({showEmailError: true});
    else {
      this.setState({showEmailError: false});
      let userObj = {};
      userObj = {
        basic: {
          ...basic
        },
        userInfo: {
          userType
        }
      }
      e.target.disabled = true;
      this.submitNewUserDate(userObj, e);
    }
  }

  renderAddNewModal = () => (
    <Modal isOpen={this.state.addNewUserModalVisibility} toggle={this.toggleAddNewUser} >
      <ModalHeader toggle={this.toggleAddNewUser}>Add A New User</ModalHeader>
      <ModalBody>
        <Form>
          <Row className='df jcc'>
            <Col className="pl-1" md="5">
              <FormGroup>
                <label htmlFor="userEmail">
                  Email address
                </label>
                <Input placeholder="Email" value={this.state.newUser.email} onChange={(e)=>this.handleOnChange(e, 'email')} type="email" />
                {this.state.showEmailError?<span className='text-danger'>Invalid Email</span>:null}
              </FormGroup>
            </Col>
            <Col className="pl-1" md="5">
              <FormGroup>
                <label htmlFor="userName">
                  Name
                </label>
                <Input placeholder="Enter Name" value={this.state.newUser.name} onChange={(e)=>this.handleOnChange(e, 'name')} type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row className='df jcc'>
            <Col className="pl-1" md="10">
              <FormGroup>
              <label htmlFor="dob">
                Date Of Birth
              </label>
                <div>
                  <DatePicker onChange={(e)=>this.handleDateChange(e, 'dob')} className='width-wfa' size='large' defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                </div>
              </FormGroup>
            </Col>
          </Row>
          <Row className='df jcc'>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">
                  User Photo
                </label>
                <InputGroup>
                <input type='file' accept='image/png,image/jpeg' onChange={(e)=>this.handleOnChange(e, 'ownerPhoto')} id='file' ref={this.ownerPhotoRef} style={{display: 'none'}}/>
                <span className='form-control'>{this.state.hasOwnerAvtar?this.state.userPhoto.name :'No File Selected'}</span>
                  <InputGroupAddon><button onClick={(e)=>this.handleOnSelect(e, 'userPhoto')}  className='btn-primary i-grp-btn'>Browse</button></InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>

          <Row className='df jcc'>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">
                  Mobile Number
                </label>
                <Input placeholder="Enter Mobile Number" value={this.state.newUser.mobileNUmber} onChange={(e)=>this.handleOnChange(e, 'mobileNumber')} type="number" />
                <InputGroup>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>

          <Row className='df jcc'>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">
                  Address
                </label>
                <InputGroup>
                  <PlacesAutocomplete onChange={this.onPreferenceLocationChange} value={this.state.location.label} options={{types: ['(regions)']}}>
                    {this.renderFunc}
                  </PlacesAutocomplete>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row className='df jcc'>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label>
                  User Type
                </label>
                <Select placeholder='Select User Type' size="large" onSelect={(e)=>this.handleOnSelect(e, 'userType')} showSearch style={{ width: '100%' }} >
                  <Option value="user types" disabled>User Types</Option>
                    {this.state.userTypes.map(type=><Option value={type.name}>{type.name}</Option>)}
                </Select>
              </FormGroup>
            </Col>
          </Row>
        </Form>
               
      </ModalBody>
      <ModalFooter>
        {this.state.errorMessage?<span className='mr-3 text-danger'>{this.state.errorMessage}</span>:null}
        <Button id='save-btn' color="primary" onClick={this.handleOnUserSave}>Add</Button>
        <Button color="secondary" onClick={this.toggleAddNewUser}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
  handleOnAddProductClicked = (shopId)=> <Link to='/login'/>

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Button className='ml-3 mb-3' color="primary" onClick={(e)=>this.handleAddNewUser(e, 'addNewUser')}>Add A New User</Button>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Users</CardTitle>
                </CardHeader>
                <CardBody>
                {this.state.allUsers.length?<span className='ml-1 desc'>Total User: {this.state.allUsers.length}</span>:(null)}
                  <Table columns={this.columns} dataSource={this.state.allUsers} />
                </CardBody>
              </Card>
            </Col>
            {this.renderAddNewModal()}
          </Row>
        </div>
      </>
    );
  }
}

export default User;
