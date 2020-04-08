import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBIcon, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCollapse, MDBCard, MDBCardBody } from "mdbreact";


import avatar from '../../img/home/avatar.png';
//import ProductNavBar from '../product/ProductNavBar';
import { CustomInput, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
 } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';


export default class ProductDetails extends Component {
  state={
    modal13: false,
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
    const { Option } = Select;
    const { collapseID } = this.state;
    
    return (
      <>
        <div className="content product-details">
        <Row className="customer-filter">
            <Col md="9"><p>Store <span className="greter-than">></span> Product</p></Col>
            <Col md="3" className="filter-search"><p><i class="fas fa-search" /></p>
            <p><a onClick={this.toggle(13)}><i class="fas fa-plus"  /></a></p>
            <p><span className="filter-txt"> Filter</span> <i class="fas fa-bars"></i></p></Col>
          </Row>
 <Row className="customer-sore">
            <Col md="9" className="customer-name">
            <img src={avatar} className="rounded-circle testimoni-img" width="55" height="55" alt="avatar" />
            <p><span className="text-green"><b>Ravi Kirana Store</b></span><br /><span className="text-green">OkkP0001</span>            </p></Col>
            <Col md="3" className="filter-search">
              <p>
                <b>Standred Store</b><br /><span className="text-small">Kanti Factory, Kankarbagh, Patna</span>
              </p>
            </Col>
          </Row>
          <Row className="customer-sore">
            <Col md="12" className="customer-name"><p>Beverages</p></Col>
</Row>
         <MDBTable className="customer-table" striped>
      <MDBTableHead>
        <tr>
          <th>Brand Name</th>
          <th>Product Name</th>
          <th>Sub Category</th>
          <th>Offer</th>
          <th className="text-center">Unit </th>
          <th className="text-center">Price</th>
          <th className="text-center">Edit</th>
          <th className="text-center">Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>Nescafe</td>
          <td><span className="text-green">Nescafe Classic Coffie</span></td>
          <td>Tea &amp; Coffee</td>
          <td>10%</td>
          <td> <Form.Item
        name="select"
        label="Select"
        hasFeedback
        rules={[{ required: true, message: 'Please select your Unit!' }]}
      >
        <Select placeholder="100 g">
          <Option value="100g">100 g</Option>
          <Option value="50g">50 g</Option>
          <Option value="01 L">01 L</Option>
        </Select>
      </Form.Item></td>
          <td className="text-center">50</td>
          <td className="text-center"><MDBIcon far icon="edit" /></td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem>Disable</MDBDropdownItem>
          <MDBDropdownItem>Delete</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td>Nescafe</td>
          <td><span className="text-green">Nescafe Dark Coffie</span></td>
          <td>Tea &amp; Coffee</td>
          <td>5%</td>
          <td> <Form.Item
        name="select"
        label="Select"
        hasFeedback
        rules={[{ required: true, message: 'Please select your Unit!' }]}
      >
        <Select placeholder="100 g">
          <Option value="100g">100 g</Option>
          <Option value="50g">50 g</Option>
          <Option value="01 L">01 L</Option>
        </Select>
      </Form.Item></td>
          <td className="text-center">50</td>
          <td className="text-center"><MDBIcon far icon="edit" /></td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem>Disable</MDBDropdownItem>
          <MDBDropdownItem>Delete</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>
        <tr>
          <td>Nescafe</td>
          <td><span className="text-green">Kinley Soda Bottle</span></td>
          <td>Tea &amp; Coffee</td>
          <td>15%</td>
          <td> <Form.Item
        name="select"
        label="Select"
        hasFeedback
        rules={[{ required: true, message: 'Please select your Unit!' }]}
      >
        <Select placeholder="100 g">
          <Option value="100g">100 g</Option>
          <Option value="50g">50 g</Option>
          <Option value="01 L">01 L</Option>
        </Select>
      </Form.Item></td>
          <td className="text-center">20</td>
          <td className="text-center"><MDBIcon far icon="edit" /></td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem>Disable</MDBDropdownItem>
          <MDBDropdownItem>Delete</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>


      </MDBTableBody>
    </MDBTable>
              
      <Form.Item className="text-center mt-5">
        <Button type="text" htmlType="submit">
          Load More
        </Button>
      </Form.Item> 

      <Row className="customer-sore">
            <Col md="12" className="customer-name"><p>Personal Care</p></Col>
</Row>
         <MDBTable className="customer-table" striped>
      <MDBTableHead>
        <tr>
          <th>Brand Name</th>
          <th>Product Name</th>
          <th>Sub Category</th>
          <th>Offer</th>
          <th className="text-center">Unit </th>
          <th className="text-center">Price</th>
          <th className="text-center">Edit</th>
          <th className="text-center">Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>Dove</td>
          <td><span className="text-green">Dove Cream Beauty Bathing soap</span></td>
          <td>Beauty &amp; Soap</td>
          <td>10%</td>
          <td> <Form.Item
        name="select"
        label="Select"
        hasFeedback
        rules={[{ required: true, message: 'Please select your Unit!' }]}
      >
        <Select placeholder="4 Pis.">
          <Option value="4 Pis">4 Pis.</Option>
          <Option value="15 Pis">15 Pis.</Option>
          <Option value="18 Pis">18 Pis.</Option>
        </Select>
      </Form.Item></td>
          <td className="text-center">120</td>
          <td className="text-center"><MDBIcon far icon="edit" /></td>
          <td className="text-center"><MDBDropdown dropleft>
        <MDBDropdownToggle color="primary">
        <i class="fas fa-ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic className="dropdown-bottom" >
          <MDBDropdownItem>Disable</MDBDropdownItem>
          <MDBDropdownItem>Delete</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown></td>
        </tr>


      </MDBTableBody>
    </MDBTable>
              
      <Form.Item className="text-center mt-5">
        <Button type="text" htmlType="submit">
          Load More
        </Button>
      </Form.Item> 


    <MDBContainer>
        
        <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)} centered>
          <MDBModalHeader toggle={this.toggle(13)}>Add New Product</MDBModalHeader>
          <MDBModalBody>
        <FormGroup>
        <Label for="exampleEmail">Sub Category</Label>
        <Input
          type="text"
          name="email"
          id="exampleEmail"
          placeholder="Enter Sub Category Name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Category</Label>
        <Input
          type="text"
          name="email"
          id="exampleEmail"
          placeholder="Enter Category Name"
        />
      </FormGroup>

      <FormGroup>
        <Label for="exampleEmail">Product</Label>
        <Input
          type="text"
          name="email"
          id="exampleEmail"
          placeholder="Enter Product Name"
        />
      </FormGroup>
<div className="product-form">
<FormGroup>
        <Label for="exampleEmail">Unit</Label>
        <Input
          type="text"
          name="email"
          id="exampleEmail"
          placeholder="Select Unit"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Print Price</Label>
        <Input
          type="text"
          name="email"
          id="exampleEmail"
          placeholder="Enter MRP"
        />
      </FormGroup>

      <FormGroup>
        <Label for="exampleEmail">Selling Price</Label>
        <Input
          type="text"
          name="email"
          id="exampleEmail"
          placeholder="Enter Price"
        />
      </FormGroup>

</div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(13)}>ADD</MDBBtn>
            <MDBBtn  outline color="green" className="cancel-model">CANCEL</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>

        </div>
      </>
    )
  }
}
