import React from "react";
import Axios from "axios";
import moment from 'moment-timezone';
import {Steps, Select, Avatar, Switch, message } from 'antd';
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Button, Form, FormGroup, CustomInput } from "reactstrap";
const { Option } = Select;

export default class AddProductToShop extends React.Component {  
  constructor(props){
    super(props);
    this.state = {
      addNewShopModalVisibility: false,
      showActions: false,
      isCategoryProductSaved: true,
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
      storeTypeSubCategoriesVisited: [],
      currentVisitedCount: 0
    }
  }
  componentDidMount(){
    let visitedShopData = this.state.shopProductData;
    let visitedSubCatArr = Object.keys(visitedShopData);
    console.log(`shopProductData`, visitedShopData)
    Axios.get(process.env.REACT_APP_API_URL + '/shop/' + this.props.match.params.shopId)
    .then(({data})=>{
      if(data.status){
        console.log(`data`, data);
        data = data.data;
        let shopProductData = this.state.shopProductData;
        data.storeTypeCategories.map(cat=>{
          shopProductData[cat.data._id] = {}
        });
        if(data.shopData.shopInfo && data.shopData.shopInfo.hasOwnProperty('shopProductsBief')){
          Object.keys(data.shopData.shopInfo.shopProductsBief).map(cat=>{
            shopProductData[cat] = data.shopData.shopInfo.shopProductsBief[cat]
          })
        }
        this.setState({shopData: data.shopData, storeTypeCategories: data.storeTypeCategories, shopProductData})
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
      this.toggleAddNewShopModal();
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
      }else{
        console.log('no subCategoriesWithBrands found')
      }
    }).catch(err=>{
      console.log(`catch`, err);
    })
  }

  handleOnSelect = (e, type)=> {
    console.log(e)
    if(type == 'brandCategory' && this.state.isCategoryProductSaved){
      console.log('true')
      let storeTypeCategoriesVisited = this.state.storeTypeCategoriesVisited;
      !storeTypeCategoriesVisited.includes(e) && storeTypeCategoriesVisited.push(e);
      this.setState({selectedCategory: e, storeTypeCategoriesVisited, storeTypeSubCategoriesVisited: []});
      this.getSubCategoriesWithBrands(e);
    }else{
      message.info('please save the products first to go further')
      // this.setState(selectedCategory)
    }
  }
  handleOnBrandChecked = (e, sub, brand) => {
    let shopProductData = this.state.shopProductData;
    let isCategoryProductSaved = this.state.isCategoryProductSaved;
    console.log(`shopProductData`, shopProductData)
    let cat = this.state.selectedCategory;
    if(!shopProductData[cat][sub]) shopProductData[cat][sub] = [brand];
    else if(shopProductData[cat][sub].includes(brand)){
      const index = shopProductData[cat][sub].indexOf(brand);
      shopProductData[cat][sub].splice(index, 1);
    } else {
      shopProductData[cat][sub] = [...shopProductData[cat][sub], brand];
    }
    let storeTypeSubCategoriesVisited = this.state.storeTypeSubCategoriesVisited;
    !storeTypeSubCategoriesVisited.includes(sub) && storeTypeSubCategoriesVisited.push(sub);
    this.setState({shopProductData, storeTypeSubCategoriesVisited, isCategoryProductSaved: false});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/shop/add-products';
    let data = {
      shopId: this.state.shopData._id,
      shopType: this.state.shopData.storeCatelogue.storeType,
      shopProductData: {
        [this.state.selectedCategory]:this.state.shopProductData[this.state.selectedCategory]
      }
    }

    console.log(data);
    Axios.post(url, data)
    .then(({data})=>{
      if(data.status){
        console.log(`status`, data.status)
        // window.location.pathname = '/admin/shops'
        this.setState({isCategoryProductSaved: true});
        message.success('Shop products saved for this category')
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
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-user pr-3">
                <CardHeader>
                    <CardTitle tag="h4">{this.state.shopData.basic.shopName}</CardTitle>
                </CardHeader>
                <CardBody >
                <Form className='df fd-c'> 
                  <Row>
                    <Col className='pr-1' md={12}>
                      <FormGroup>
                      <label className='add-shop-label'>Select Product Category</label>{this.renderRequiredIcon()} 
                        <Select placeholder='Select Product Category' size="large" value={this.state.selectedCategory} onSelect={(e)=>this.handleOnSelect(e, 'brandCategory')} showSearch style={{ width: '100%' }} >
                          <Option value="Categories" disabled>Store Product Categories</Option>
                            {this.state.storeTypeCategories.map(cat=><Option value={cat.data._id}>{cat.data.name}{this.state.storeTypeCategoriesVisited.includes(cat.data._id)?<i className='text-success nc-icon nc-check-2 ml-3'/>:null}</Option>)}
                        </Select>
                      </FormGroup>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col className='pr-1' md={12}>
                      <label className='add-shop-label'>Brand + Company</label>{this.renderRequiredIcon()} 
                      <FormGroup>
                        <label className='form-control p-3'>Selected {this.state.storeTypeSubCategoriesVisited.length} from {this.state.subCategoriesWithBrands.length}</label>
                      </FormGroup>
                    </Col>
                  </Row>
      
                  <Row>
                    {this.state.subCategoriesWithBrands.map(sub=><Col className='pr-1' md={12}>
                      <div className='df jcc'>
                        <span className='border border-secondary label-round'>{sub.subCatName}</span>
                      </div>
                      <FormGroup className='mt-4'>
                      <div className='select-option-storetype df'>
                        {sub.brands.map(item=>(
                        <CustomInput 
                          onClick={(e)=>this.handleOnBrandChecked(e, sub.subCatId, item._id)}
                          checked={(this.state.shopProductData[this.state.selectedCategory][sub.subCatId]&& this.state.shopProductData[this.state.selectedCategory][sub.subCatId].includes(item._id))?true:false}
                          style={{width: '50px', backgroundColor: 'red'}} 
                          type="checkbox"
                          id={sub.subCatId + item._id}
                          label={item.name.toUpperCase()} 
                        />
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