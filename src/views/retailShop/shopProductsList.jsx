import React, { Component } from 'react';
import { Row, Col, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, Select, Switch, Button, message, Table, Avatar } from 'antd';
import axios from 'axios';
import CookieHandler from '../../utils/cookieHandler';

const { Option } = Select;

export default class ShopProductList extends Component {
  
  constructor(props){
    super(props);
    this.state={
      currentProductId: null,
      currentProduct: null,
      shopData: null,
      editVisibilty: false,
      allCategories: [],
      shopProductCategories: [],
      shopProductsByCategory: [],
      storeTypeCategories: [],
      allRegions: [],
      allCategories: [],
      allBrands: [],
      allStoreTypes: [],
      allSubCategories: []

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
      title: 'varient',
      dataIndex: 'item',
      render: ({varient}) => varient.length? <Select defaultValue={`₹ ${varient[0].price} (${varient[0].value} ${varient[0].unit})`} style={{minWidth: '120px'}}>
        {varient.map((item, index)=>(<Option key={index}>{`₹ ${item.price} (${item.value} ${item.unit})`}</Option>))}
      </Select>:(null)
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
      render: (_id) => <div className='cp op8 t-text'>
        <span onClick={()=>this.toggleModal('edit', _id)}>Edit</span>
      </div>
    },
  ]

  componentDidMount() {
    const { params } = this.props.match;
    const { shopId } = params;
    console.log(`shopId`, shopId)
    this.getShopData(shopId);

    // this.getAllCategories();
		this.getAllBrands();
		this.getAllSubCategories();
		this.getAllStoreType();
  }
  
  toggleModal = (type, id) => {
    if(type == 'edit'){
      if(id){
        this.getSingleShopProductById(id).then(({data})=>{
          this.setState({currentProduct: data, editVisibilty: !this.state.editVisibilty})
        })
      }else {
        this.setState({currentProduct: null})
        this.setState({editVisibilty: !this.state.editVisibilty});
      }
    }
  }
  
  getSingleShopProductById = (shopProductId) => {
    let token = JSON.parse(CookieHandler.readCookie('token'))
    return axios.get(process.env.REACT_APP_API_URL + '/shop-product/' + shopProductId, {
      headers: {
        token
      }
    })
    .then((data)=>{
      if(data.status){
        return data.data;
      }else{
        message.info(data.message);
      }
    }).catch(err=>{
      console.log(`inside getSingleShopProductById`, err);  
    })
  }

  getShopData = shopId => {
    axios.get(process.env.REACT_APP_API_URL + "/shop/" + shopId)
    .then(({ data }) => {
      if (data.status) {
        let {shopData, storeTypeCategories} = this.state;
        shopData = data.data.shopData;
        storeTypeCategories = data.data.storeTypeCategories
        this.setState({ shopData, storeTypeCategories });
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
  getAllSubCategories = () => {
   axios.get(process.env.REACT_APP_API_URL + "/sub-category")
    .then(({ data }) => {
      if (data.status) {
        console.log(`sub categories`, data)
        this.setState({ allSubCategories: data.allSubCategories });
      } else {
        console.log("no subcategory found");
      }
    })
    .catch((err) => {
      console.log(`catch`, err);
    }); 
  }

  getAllRegions = () => {
    let token = JSON.parse(CookieHandler.readCookie('token'));
    axios.get(process.env.REACT_APP_API_URL + '/region', {
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


  getAllBrands = (query='') => {
    let token = JSON.parse(CookieHandler.readCookie('token'));
    axios.get(process.env.REACT_APP_API_URL + "/brand" + query, {
      headers: {
        token
      }
    })
    .then(({ data }) => {
      if (data.status) {
        this.setState({ allBrands: data.allBrands });
      } else {
        console.log("No Brand found");
      }
    })
    .catch((err) => {
      console.log(`catch`, err);
    });
  }

  getAllStoreType = () => {
   axios.get(process.env.REACT_APP_API_URL + "/store-type")
    .then(({ data }) => {
      if (data.status) {
        this.setState({ allStoreTypes: data.allStoreTypes });
      } else {
        console.log("no Store Type found");
      }
    })
    .catch((err) => {
      console.log(`catch`, err)
    }); 
  }
  onChange = (e, key, from) => {
    if(from == 'edit'){
      let {currentProduct} = this.state;
      currentProduct['productId'][key] = e.target.value;
      this.setState({currentProduct})
    }
  }
  onVarientAdd = () => {
		let { currentProduct } = this.state;
		currentProduct.varient.push({
			price: '',
			unit: '',
      value: '',
      priceOffered: ''
		})
		this.setState({currentProduct});
	}

	onVarientDelete = (index) => {
		let { currentProduct } = this.state;
		currentProduct.productId.varient.splice(index, 1);
		this.setState({currentProduct});
	}

	onVarientChange = (e, key, varientIndex) => {
    let { productId, varient } = this.state.currentProduct;
    let productVarient = productId.varient;
		let currentVarinet = productVarient[varientIndex];

		currentVarinet[key] = e.target.value;
    let index = varient.findIndex((v)=> v.value == currentVarinet.value);
    if(index == -1) {
      varient.push({currentVarinet});
    }

		let currentProduct = this.state.currentProduct
		currentProduct.varient = varient;
		this.setState({currentProduct});
	}
  handleOnUpdateProduct  = () => {
    let {currentProduct} = this.state
    let shopProductId = currentProduct._id;
    delete  currentProduct.__v;
    delete currentProduct._id;
    console.log(currentProduct, shopProductId)
  }
 render() {
  const { collapseID } = this.state;
  const {shopData, shopProductCategories, shopProductsByCategory} = this.state;
  return((shopData)?(
    <>
      <div className="content product-details">
      
        <Row className="customer-filter">
          <Col md="9"><p>Store <span className="greter-than">></span> Product</p></Col>
          <Col md="3" className="filter-search"><p><i className="fas fa-search" /></p>
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
          let categoryIdName = this.state.storeTypeCategories.filter(cat=>cat.data._id == categoryId);
          let products = category[categoryId].data;
          return (
            <Row key={index} className="customer-sore">
              <Col md="12" className="customer-name"><p>{categoryIdName.length?categoryIdName[0].data.name:categoryId}</p></Col>
              <Table 
                rowKey='_id'
                columns={this.productsColumn}
                pagination={false}
                dataSource={products}
                style={{width: '100%'}}
              />
            </Row>
          )
        })}
      {this.state.currentProduct && this.renderEditProductModal()}
      </div>
    </>
  ):(null))
  }


  renderEditProductModal = () => (
    <Modal id='editSingleProduct' size='lg' isOpen={this.state.editVisibilty} toggle={()=>this.toggleModal('edit')} >
      <ModalHeader toggle={()=>this.toggleModal('edit')}>Edit Product</ModalHeader>
      <ModalBody>
        <Form>
          <Row className='df jcc'>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">Product Name</label>
                <Input placeholder={'Product Name'} value={this.state.currentProduct.productId.productName} onChange={(e)=>this.onChange(e, 'productName', 'edit')} />
              </FormGroup>
            </Col>
          </Row>

          <Row className='df jcc'>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">Available Varients</label>
                  {this.state.currentProduct && this.state.currentProduct.productId && this.state.currentProduct.productId.varient.map((v, index)=>(
                    <Row key={index}>
                      <Col className="pl-1" md="2">
                        <FormGroup>
                        <label htmlFor="userName">Value</label>
                        <Input placeholder={'Value'} value={v.value} disabled={true}/>
                        </FormGroup>
                      </Col>
                      
                      <Col className="pl-1" md="2">
                        <FormGroup>
                        <label htmlFor="userName">Unit</label>
                        <Input placeholder={'Unit'} value={v.unit} disabled={true}/>
                        </FormGroup>
                      </Col>

                      <Col className="pl-1" md="3">
                        <FormGroup>
                        <label htmlFor="userName">Price</label>
                        <Input placeholder={'Price'} value={v.price} disabled={true} />
                        </FormGroup>
                      </Col>
                      
                      <Col className="pl-1" md="3">
                        <FormGroup>
                        <label htmlFor="userName">Price Offred</label>
                        <Input placeholder={'Price Offered'} onChange={(e)=>this.onVarientChange(e, 'priceOffered', index)} value={v.priceOffered} />
                        </FormGroup>
                      </Col>

                      {/* <Col className="pl-1 df" md="1">
                        <div className='df aic f1 pl-2 pt-2'><i onClick={this.onVarientImageUpload} className='fa fa-upload cp op8 t-medium t-back-round'/></div>
                      </Col>
                      <Col className="pl-1 df" md="1">
                        <div className='df aic f1 pl-2 pt-2'><i onClick={()=>this.onVarientDelete(index)} className='fa fa-close cp op8 t-medium text-danger'/></div>
                      </Col> */}
                    </Row>
                  ))}
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        {this.state.errorMessage?<span className='mr-3 text-danger'>{this.state.errorMessage}</span>:null}
        <Button id='save-btn' color="primary" onClick={this.handleOnUpdateProduct}>Update</Button>
        <Button color="secondary" onClick={()=>this.toggleModal('edit')}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )

}
