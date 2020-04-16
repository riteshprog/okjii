import React from "react";
import Axios from "axios";
import { MDBProgress } from 'mdbreact';
import moment from 'moment-timezone';
import {Steps, Select, Avatar, Switch, message } from 'antd';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Button, Label, Form, FormGroup, CustomInput } from "reactstrap";
import avatar from '../../../img/home/avatar.png';
import filterIcon from '../../../assets/img/filterIcon.png';
import { Progress } from 'reactstrap';
const { Option } = Select;

export default class MStoreAddProduct extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      addNewShopModalVisibility: false,
      showActions: false,
      selectedCategory: '',
      storeTypeCategories: [],
      subCategoriesWithBrands: [],
      shopData: {
        basic: {
          shopName: '',
          ownerName: '',
          mobileNumber: '',
          altMobileNumber: '',
          shopLocation: {
            label: '',
            lat: '',
            lng:''
          },
          ownerPhoto: '',
          uploadDocuments: [],
        },
        bankDetails: {
          accountNumber: '',
          confirmAccountNumber: '',
          accountHolderName: '',
          bankName: '',
          ifscCode: '',
          accountType: '',
          bankAddress: '',
          mobileNumber: ''
        },
        storeCatelogue: {
          storeType: '',
          storeOpeningTiming: '',
          storeClosingTiming: '',
          storeOpeningDays: []
        }
      },
      shopProductData: {},
      storeTypeCategoriesVisited: [],
      storeTypeSubCategoriesVisited: []
    }
  }
  componentDidMount(){
    Axios.get(process.env.REACT_APP_API_URL + '/shop/' + this.props.match.params.shopId)
    .then(({data})=>{
      if(data.status){
        console.log(data);
        let shopProductData = this.state.shopProductData;
        data.storeTypeCategories.map(cat=>{
          shopProductData[cat] = {}
        });
        if(data.shopData.shopInfo && data.shopData.shopInfo.hasOwnProperty('shopProductsBief')){
          Object.keys(data.shopData.shopInfo.shopProductsBief).map(cat=>{
            shopProductData[cat] = data.shopData.shopInfo.shopProductsBief[cat]
          })
        }
        this.setState({shopData: data.shopData, storeTypeCategories: data.storeTypeCategories, shopProductData})
        console.log(data.shopData)
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
  
  renderRequiredIcon = () => <span className='form-required'> * </span>
  
  getSubCategoriesWithBrands = (category) => {
    const data = {
      category,
      shopType: this.state.shopData.storeCatelogue.storeType
    }
    Axios.post(process.env.REACT_APP_API_URL + '/shop/get-brands', data)
    .then(({data})=>{
      if(data.status){
        this.setState({subCategoriesWithBrands: data.subCategoriesWithBrands})
        console.log(`subCategoriesWithBrands`, data.subCategoriesWithBrands)
      }else{
        console.log('no subCategoriesWithBrands found')
      }
    }).catch(err=>{
      console.log(`catch`, err);
    })
  }

  handleOnSelect = (e, type)=> {
    if(type == 'brandCategory'){
      let storeTypeCategoriesVisited = this.state.storeTypeCategoriesVisited;
      !storeTypeCategoriesVisited.includes(e) && storeTypeCategoriesVisited.push(e);
      this.setState({selectedCategory: e, storeTypeCategoriesVisited, storeTypeSubCategoriesVisited: []});
      this.getSubCategoriesWithBrands(e);
    }
  }
  handleOnBrandChecked = (e, sub, brand) => {
    let shopProductData = this.state.shopProductData;
    if(!shopProductData[this.state.selectedCategory][sub]) shopProductData[this.state.selectedCategory][sub] = [brand];
    else if(shopProductData[this.state.selectedCategory][sub].includes(brand)){
      const index = shopProductData[this.state.selectedCategory][sub].indexOf(brand);
      shopProductData[this.state.selectedCategory][sub].splice(index, 1);
    } else {
      shopProductData[this.state.selectedCategory][sub] = [...shopProductData[this.state.selectedCategory][sub], brand];
    }
    let storeTypeSubCategoriesVisited = this.state.storeTypeSubCategoriesVisited;
    !storeTypeSubCategoriesVisited.includes(sub) && storeTypeSubCategoriesVisited.push(sub);
    this.setState({shopProductData, storeTypeSubCategoriesVisited});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/shop/add-products';
    let data = {
      shopId: this.state.shopData._id,
      shopType: this.state.shopData.storeCatelogue.storeType,
      shopProductData: this.state.shopProductData
    }
    Axios.post(url, data)
    .then(({data})=>{
      if(data.status){
        console.log(`status`, data.status)
        window.location.pathname = '/admin/shops'
      }else{
        console.log('no shop found')
      }
    }).catch(err=>{
      console.log(`catch`, err);
    })
  }
  render() {
    return (
      <>
        <div className="content m-store-view">
        <div class="customer-filter">
          <div>
            <p>
            Store <i class="left-space fa fa-angle-right"></i>
                  Add Product
            </p>
          </div>
          <div className="filter-search ">
            <p><i class="fa fa-search"></i></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>

	      </div>
        <div class="customer-filter filter-border-none">
          <div className="filter-search">
            <p>
            <img src={avatar} className="rounded-circle testimoni-img" width="60" height="60" alt="avatar" />
            </p>
            <p><span className="text-green">Ravi Kumar Singh</span><br />
              <span className="text-green">Okk</span>P0001
              </p>

          </div>
          <div className="right-navbar">
          <p>Medium Store</p>
          <div className="progress-bar-nav">
        <div className="text-right" style={{ width: '60%' }}><p>7</p></div>
        <div style={{ width: '40%' }}>
        <MDBProgress className="my-2" material value={7} max={11} size="small" color="success" />
          </div>
        <div style={{ width: '5%' }}><p>11</p></div>
      </div>
                        </div>

	      </div>

          <Row>
            <Col md="12">
              <Card className=" pr-3">
                <CardBody >
                <Form className='df fd-c'>
                <FormGroup row>
        <Label sm={2}  className='add-shop-label'>Select Category {this.renderRequiredIcon()}</Label>
        <Col sm={10}>
        <Select placeholder='Personal Care' size="large" onSelect={(e)=>this.handleOnSelect(e, 'brandCategory')} showSearch style={{ width: '40%' }} >
                          <Option value="Categories" disabled>Personal Care</Option>
                            {this.state.storeTypeCategories.map(cat=><Option value={cat}>{cat}{this.state.storeTypeCategoriesVisited.includes(cat)?<i className='text-success nc-icon nc-check-2 ml-3'/>:null}</Option>)}
                        </Select>
                                </Col>
      </FormGroup>  
      <FormGroup row>
        <Label  className='add-shop-label' sm={2}>Brand + Company {this.renderRequiredIcon()}</Label>
        <Col sm={10}>
        <label className='form-control p-3' style={{ width: '40%' }}>Selected {this.state.storeTypeSubCategoriesVisited.length} from {this.state.subCategoriesWithBrands.length}</label>
        </Col>
      </FormGroup>
      <Row>

<Col className='pr-1' md={12}>
  <div className='df jcc'>
    <span className='border border-secondary label-round'>Skin Care</span>
  </div>
  <FormGroup className='mt-4'>
  <div className='select-option-storetype df'>

      <CustomInput checked={true}  style={{width: '50px', backgroundColor: 'red'}} type="checkbox" label="HUL" />
      <CustomInput checked={true}  style={{width: '50px', backgroundColor: 'red'}} type="checkbox" label="NIVEA" />
      <CustomInput checked={true}  style={{width: '50px', backgroundColor: 'red'}} type="checkbox" label="BOROLINE" />
      <CustomInput checked={false}  style={{width: '50px', backgroundColor: 'red'}} type="checkbox" label="FERRERO" />
      <CustomInput checked={true}  style={{width: '50px', backgroundColor: 'red'}} type="checkbox" label="STAYFREE" />
  </div>
  </FormGroup>
</Col>
</Row>
<Row>

<Col className='pr-1' md={12}>
  <div className='df jcc'>
    <span className='border border-secondary label-round'>Body Care</span>
  </div>
  <FormGroup className='mt-4'>
  <div className='select-option-storetype df'>

      <CustomInput checked={true}  style={{width: '50px', backgroundColor: 'red'}} type="checkbox" label="HUL" />
      <CustomInput checked={false}  style={{width: '50px', backgroundColor: 'red'}} type="checkbox" label="NIVEA" />
      <CustomInput checked={true}  style={{width: '50px', backgroundColor: 'red'}} type="checkbox" label="BOROLINE" />
      <CustomInput checked={false}  style={{width: '50px', backgroundColor: 'red'}} type="checkbox" label="FERRERO" />
      <CustomInput checked={true}  style={{width: '50px', backgroundColor: 'red'}} type="checkbox" label="STAYFREE" />



  </div>
  </FormGroup>
</Col>
</Row>

                  <Row>

                    {this.state.subCategoriesWithBrands.map(sub=><Col className='pr-1' md={12}>
                      <div className='df jcc'>
                        <span className='border border-secondary label-round'>{sub._id}</span>
                      </div>
                      <FormGroup className='mt-4'>
                      <div className='select-option-storetype df'>
                        {sub.brands.map(item=>(
                          <CustomInput checked={(this.state.shopProductData[this.state.selectedCategory][sub._id]&& this.state.shopProductData[this.state.selectedCategory][sub._id].includes(item))?true:false} onChange={(e)=>this.handleOnBrandChecked(e, sub._id, item)} name={item} style={{width: '50px', backgroundColor: 'red'}} type="checkbox" id={item + sub._id} label={item.toUpperCase()} />
                        ))}
                      </div>
                      </FormGroup>
                    </Col>)}
                  </Row>
                  
                  <Row>
                    <Col className='pr-1 df jcc' md={12}>
                      <button className='btn btn-success' onClick={this.handleSubmit}>Submit</button>
                    </Col>
                  </Row>
                  
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
