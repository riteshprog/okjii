import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from "reactstrap";
import Axios from "axios";
import moment from 'moment-timezone';
import { Avatar } from "antd";
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import { Redirect, Link } from "react-router-dom";
import AddProductToShop from "./addItemsToShop";

class Tables extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      addNewShopModalVisibility: false,
      showActions: false,
      allShops: []
    }
  }
  componentDidMount(){
    Axios.get(process.env.REACT_APP_API_URL + '/shop')
    .then(({data})=>{
      if(data.status){
        this.setState({allShops: data.allShops})
      }else{
        console.log('no shop found')
      }
    }).catch(err=>{
      console.log(`catch`, err);
    })
  }

  toggleAddNewShopModal = () => this.setState({addNewShopModalVisibility: !this.state.addNewShopModalVisibility})
  handleAddNewShop = (e, type) => {
    if(type == 'addNewShop'){
      window.location.pathname= 'admin/shops/add-new';
      // this.toggleAddNewShopModal();
    }
  }
  renderAddNewModal = () => (
    <Modal isOpen={this.state.addNewShopModalVisibility} toggle={this.toggleAddNewShopModal} >
      <ModalHeader toggle={this.toggleAddNewShopModal}>Add a New Shop</ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            <Col className="pr-1" md="5">
              <FormGroup>
                <label>Company (disabled)</label>
                <Input
                  defaultValue="Creative Code Inc."
                  disabled
                  placeholder="Company"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col className="px-1" md="3">
              <FormGroup>
                <label>Username</label>
                <Input
                  defaultValue="michael23"
                  placeholder="Username"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col className="pl-1" md="4">
              <FormGroup>
                <label htmlFor="exampleInputEmail1">
                  Email address
                </label>
                <Input placeholder="Email" type="email" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="pr-1" md="6">
              <FormGroup>
                <label>First Name</label>
                <Input
                  defaultValue="Chet"
                  placeholder="Company"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col className="pl-1" md="6">
              <FormGroup>
                <label>Last Name</label>
                <Input
                  defaultValue="Faker"
                  placeholder="Last Name"
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <FormGroup>
                <label>Address</label>
                <Input
                  defaultValue="Melbourne, Australia"
                  placeholder="Home Address"
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="pr-1" md="4">
              <FormGroup>
                <label>City</label>
                <Input
                  defaultValue="Melbourne"
                  placeholder="City"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col className="px-1" md="4">
              <FormGroup>
                <label>Country</label>
                <Input
                  defaultValue="Australia"
                  placeholder="Country"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col className="pl-1" md="4">
              <FormGroup>
                <label>Postal Code</label>
                <Input placeholder="ZIP Code" type="number" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <FormGroup>
                <label>About Me</label>
                <Input
                  type="textarea"
                  defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <div className="update ml-auto mr-auto">
              <Button
                className="btn-round"
                color="primary"
                type="submit"
              >
                Update Profile
              </Button>
            </div>
          </Row>
        </Form>
               
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={this.toggleAddNewShopModal}>Do Something</Button>{' '}
        <Button color="secondary" onClick={this.toggleAddNewShopModal}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
  handleOnAddProductClicked = (shopId)=> <Link to='/login'/>

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Button className='ml-3 mb-3' color="primary" onClick={(e)=>this.handleAddNewShop(e, 'addNewShop')}>Add A New Shop</Button>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Shops</CardTitle>
                </CardHeader>
                <CardBody>
                {this.state.allShops.length?<span className='ml-1 desc'>Total Shops: {this.state.allShops.length}</span>:(null)}
                  {this.state.allShops.length?<Table responsive>
                    <thead className="text-primary">
                      <tr className='ta'>
                        <th><i className='nc-icon nc-shop t-large'></i></th>
                        <th>Shop Name</th>
                        <th>Owner</th>
                        <th>Mobile Number</th>
                        <th>Location</th>
                        <th>Category</th>
                        <th>Added On</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.allShops.map(shop => (
                      <tr className='ta'>
                        <td>{shop.basic.ownerPhoto?<img src={shop.basic.ownerPhoto} className='icon-sm'/>:<Avatar className=' icon-sm df jcc aic'><span>{shop.basic.ownerName.split('')[0]}</span></Avatar>}</td>
                        <th>{shop.basic.shopName}</th>
                        <td>{shop.basic.ownerName}</td>
                        <td>{shop.basic.mobileNumber}</td>
                        <td>{shop.basic.shopLocation && shop.basic.shopLocation.label || "Not Available"}</td>
                        <td>{shop.storeCatelogue.storeType}</td>
                        <td>{moment(shop.shopInfo.createdAt).format("LL")}</td>
                        <td>
                          {/* <button className='btn btn-danger' onClick={()=>this.handleOnAddProductClicked(shop._id)}> add products</button> */}
                          <Link className='btn btn-danger' to={`/admin/shops/add-item/${shop._id}`}   params={{id: shop._id}} shopName={shop.basic.shopName}>Add Product</Link>
                        </td>
                      </tr>))}
                    </tbody>
                  </Table>:<span>Currenty there are no shops. Click on "Add new a Shop" Button to add one</span>}
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

export default Tables;
