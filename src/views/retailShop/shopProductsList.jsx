import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import avatar from '../../img/home/avatar.png';
import { CustomInput, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { MDBDropdown, MDBDropdownToggle, MDBIcon, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCollapse, MDBCard, MDBCardBody } from "mdbreact";
import { Form, Select, InputNumber, Switch, Radio, Slider, Button, Upload, Rate, Checkbox, message, Table, Avatar, Tag } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import axios from 'axios';
import CookieHandler from '../../utils/cookieHandler';

const { Option } = Select;


export default class ShopProductList extends Component {
  
  constructor(props){
    super(props);
    this.state={
      modal13: false,
      collapseID: "collapse1",
      shopData: null,
      allCategories: [],
      shopProductCategories: [],
      shopProductsByCategory: []
    }
  }
  productsColumn = [
    {
      key: '_id',
      title: 'Image',
      dataIndex: 'products',
      render: (productName) => <Avatar size='large'>OkkJi</Avatar>
    },
    {
      key: '_id',
      title: 'Product Name',
      dataIndex: 'item',
      render: ({productName}) => <span>{productName}</span>
    },
    {
      key: '_id',
      title: 'Sub Category',
      dataIndex: 'item',
      render: ({subcategory}) => <span>{subcategory && subcategory.name}</span>
    },
    {
      key: '_id',
      title: 'Brand',
      dataIndex: 'item',
      render: ({brand}) => <span>{brand && brand.name}</span>
    },
    {
      key: '_id',
      title: 'Enabled',
      dataIndex: 'shopProductIsActive',
      render: (shopProductIsActive, row) => <Switch onChange={(value)=>this.toggleShopProductActive(value, row._id)} checked={shopProductIsActive}/>
    },
    {
      key: '_id',
      title: 'Action',
      dataIndex: '_id',
      render: (_id) => <div className='op8 t-text'>
        <span onClick={()=>this.toggleModal('edit', _id)}>Edit</span>
      </div>
    },
  ]

  componentDidMount() {
    const { params } = this.props.match;
    const { shopId } = params;
    console.log(`shopId`, shopId)
    this.getShopData(shopId);
  }

  getShopData = shopId => {
    axios.get(process.env.REACT_APP_API_URL + "/shop/" + shopId)
    .then(({ data }) => {
      if (data.status) {
        let {shopData, } = this.state;
        shopData = data.data.shopData;
        this.setState({ shopData });
        this.getAllCategories();
      } else {
        message.error(data.errorMessage);
      }
    }).catch(err => {
      console.log(`err`, err);
    });
  }
  
  toggleShopProductActive = (value, id) => {
    
  }

  getAllCategories = () => {
    let token = JSON.parse(CookieHandler.readCookie('token'));
    axios.get(process.env.REACT_APP_API_URL + "/category", {
      headers: {
        token
      }
    })
    .then(({ data }) => {
      if (data.status) {
        this.setState({ allCategories: data.allCategories })
        this.getShopProductsCategories();
      } else {
        console.log("no category found");
      }
    })
    .catch((err) => {
      console.log(`catch`, err);
    });
  }

  getShopProductsCategories = () => {
    let {shopData, shopProductCategories, allCategories} = this.state;
    if(shopData && shopData.shopInfo && shopData.shopInfo.shopProductsBief){
      
      let {shopProductsBief} = shopData.shopInfo;
      shopProductCategories = Object.keys(shopProductsBief);
      this.setState({shopProductCategories}, ()=>{
        console.log(this.state.shopProductCategories);
        shopProductCategories.map((categoryId, index)=>{
          console.log(index);
          this.getShopProductsByCategory(shopData._id, categoryId);
        })
      });
    }
  }

  getShopProductsByCategory = (shopId, categoryId) => {
    let token = JSON.parse(CookieHandler.readCookie('token'));
    axios.get(process.env.REACT_APP_API_URL + `/shop/${shopId}/${categoryId}`, {
      headers: {
        token
      }
    }).then(({data})=>{
      let {shopProductsByCategory} = this.state;
      shopProductsByCategory = [...shopProductsByCategory, {[categoryId]: data.data[0]}]
      this.setState({shopProductsByCategory})
    }).catch(err=>{

      console.log('something went wrong', err);
    })
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
  const {shopData, shopProductCategories, shopProductsByCategory} = this.state;
  return((shopData)?( (
    <>
      <div className="content product-details">
      
        <Row className="customer-filter">
          <Col md="9"><p>Store <span className="greter-than">></span> Product</p></Col>
          <Col md="3" className="filter-search"><p><i className="fas fa-search" /></p>
          <p><a onClick={this.toggle(13)}><i className="fas fa-plus"  /></a></p>
          <p><span className="filter-txt"> Filter</span> <i className="fas fa-bars"></i></p></Col>
        </Row>
        
        <Row className="customer-sore">
          <Col md="9" className="customer-name">
          <img src={shopData.basic.ownerPhoto} className="rounded-circle testimoni-img" width="55" height="55" alt="avatar" />
          <p><span className="text-green"><b>{shopData.basic.shopName}</b></span><br /><span className="text-green">{shopData.shopInfo.shopCode}</span></p></Col>
          <Col md="3" className="filter-search">
            <p>
              <b>{shopData.storeCatelogue.storeType.name}</b><br /><span className="text-small">{shopData.basic.city}</span>
            </p>
          </Col>
        </Row>
        {shopProductsByCategory.map((category, index)=>{
          let categoryId = Object.keys(category)[0]
          let products = category[categoryId].data;
          return (
            <Row className="customer-sore">
              <Col md="12" className="customer-name"><p>{categoryId}</p></Col>
              <Table 
                columns={this.productsColumn}
                pagination={false}
                dataSource={products}
                style={{width: '100%'}}/>
            </Row>
          )
        })}
      </div>
    </>
  )):(null))
  }
}
