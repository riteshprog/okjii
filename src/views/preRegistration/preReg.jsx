import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from "reactstrap";
import Axios from "axios";
import moment from 'moment-timezone';
import { Avatar } from "antd";
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import { Redirect, Link } from "react-router-dom";

class PreReg extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      addNewShopModalVisibility: false,
      showActions: false,
      preRegistraion: []
    }
  }
  componentDidMount(){
    Axios.get(process.env.REACT_APP_API_URL + '/pre-registraion')
    .then(({data})=>{
      if(data.status){
        this.setState({preRegistraion: data.preRegistraion})
      }else{
        console.log('no preRegistraion found')
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
  handleOnAddProductClicked = (shopId)=> <Link to='/login'/>

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Pre Registraions</CardTitle>
                </CardHeader>
                <CardBody>
                {this.state.preRegistraion.length?<span className='ml-1 desc'>Total Shops: {this.state.preRegistraion.length}</span>:(null)}
                  {this.state.preRegistraion.length?<Table responsive>
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
                      {this.state.preRegistraion.map(shop => (
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
                  </Table>:<span>Currenty there are no Registraions yet</span>}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default PreReg;
