import React from 'react';
import axios from 'axios';
import moment from "moment-timezone";
import { Switch, notification, message, Table, Tag, Avatar, Input, Select, Pagination } from "antd";
import { CustomInput, Row, Col, Form, FormGroup, Label, FormText, Modal, ModalHeader, ModalBody, ModalFooter,  InputGroup, InputGroupAddon, Button} from "reactstrap";
import CookieHandler from '../../utils/cookieHandler';
import _ from 'lodash'

import AddSingleProduct from './addSingleProduct.jsx';

const {Search} = Input;
const {Option} = Select;

export default class AllProducts extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			editVisibilty: false,
			addVisibilty: false,
			currentProduct: {
				region: []
			},
			newProduct: {
				categoryId: '',
				subCategoryId: '',
				brandId: '',
				category: '',
				subCategory: '',
				brand: '',
				region: [],
				productName: '',
				varient: [],
				productBelongs: [],
				productType: '',
				isPackedProduct: '',
				isActive: '',
			},
			allProducts: [],
			totalProuctsCount: 0,
			allRegions: [],
			allBrands: [],
			allCategories: [],
			allSubCategories: [],
			allStoreTypes: []
				
		}
	}
	componentDidMount() {
		this.getAllRegions();
		this.getAllProducts();
	}

	productsColumn = [
		{
			key: '_id',
			title: 'Image',
			dataIndex: 'productName',
			render: (productName) => <Avatar size='large'>OkkJi</Avatar>
		},
		{
			key: '_id',
			title: 'Product Name',
			dataIndex: 'productName',
			render: (productName) => <span>{productName}</span>
		},
		{
			key: '_id',
			title: 'Category',
			dataIndex: 'categoryId',
			render: (category) => <span>{category && category.name}</span>
		},
		{
			key: '_id',
			title: 'Sub Category',
			dataIndex: 'subCategoryId',
			render: (subCategory) => <span>{subCategory && subCategory.name}</span>
		},
		{
			key: '_id',
			title: 'Brand',
			dataIndex: 'brandId',
			render: (brand) => <span>{brand && brand.name}</span>
		},
		{
			key: '_id',
			title: 'Belongs To',
			dataIndex: 'productBelongs',
			render: (productBelongs) => productBelongs.map(type=><Tag>{type.name}</Tag>)
		},
		{
			key: '_id',
			title: 'Region',
			dataIndex: 'region',
			render: (region) => region.length?region.map(type=><Tag color={type.isActive?'green':'red'} >{type.regionId.name}</Tag>):<span>N/A</span>
		},
		{
			key: '_id',
			title: 'Enabled',
			dataIndex: 'isActive',
			render: (isActive, row) => <Switch onChange={(value)=>this.toggleProductActive(value, row._id)} checked={isActive}/>
		},
		{
			key: '_id',
			title: 'Action',
			dataIndex: '_id',
			render: (_id) => <div className='df jcc cp op8 t-text'>
				<span onClick={()=>this.toggleModal('edit', _id)}>Edit</span>
			</div>
		},
	]

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

  getAllCategories = () => {
  	let token = JSON.parse(CookieHandler.readCookie('token'));
  	axios.get(process.env.REACT_APP_API_URL + "/category", {
  	  headers: {
  	    token
  	  }
  	})
  	.then(({ data }) => {
  	  if (data.status) {
  	    this.setState({ allCategories: data.allCategories });
  	  } else {
  	    console.log("no category found");
  	  }
  	})
  	.catch((err) => {
  	  console.log(`catch`, err);
  	});
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
;    }); 
  }


	getAllProducts = (query = '')=>{
		let token = JSON.parse(CookieHandler.readCookie('token'));
		let url = process.env.REACT_APP_API_URL + '/product' + query;
		axios.get(url, {
			headers: {
				token
			}
		}).then(({data})=>{
			if(data.status){
				let {allProducts, totalProuctsCount} = this.state;
				allProducts = data.allItems;
				totalProuctsCount = data.totalItems;
				this.setState({allProducts, totalProuctsCount})
			}else{
				message.info(data.message)
			}
		}).catch(err=>{
			console.error(err);
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

	getSingleCategoryById = (productId)=> {
		let token = JSON.parse(CookieHandler.readCookie('token'));
		let url = process.env.REACT_APP_API_URL + '/product/' + productId;
		return axios.get(url, {
			headers: {
				token
			}
		}).then(({data})=>{
			return data.data;
		}).catch(err=>{
			console.error(err);
		})	
	}	

	toggleModal = (type, productId) => {
		if(type == 'edit') {
			if(productId){
				let {currentProduct} = this.state;
				this.getSingleCategoryById(productId).then( singleProduct=>{
					let region = singleProduct.region.map(r=>{
						return {
							isActive: r.isActive,
							regionId: r.regionId._id,
							regionName: r.regionId.name
						}
					})
					singleProduct.region = region;
				  this.setState({ currentProduct: singleProduct, editVisibilty: !this.state.editVisibilty, errorMessage: `` });
				});
			}else {
				this.setState({editVisibilty: !this.state.editVisibilty})
			}
		}
		else if(type == 'add') this.setState({addVisibilty: !this.state.addVisibilty})
	}

	handleOnSelect = (value, key) => {
		let { currentProduct } = this.state;
		if(key == 'region'){
			console.log('value', value);
			let region = this.state.allRegions.filter(region=>(region.name == value || region._id == value));
			value = region[0];
			console.log('value', value, region);
			let index = _.findIndex(currentProduct[key], function(o){
			return o.regionId == value._id
			});
			console.log(index);

			if(index == -1){
				let singleRegionObj = {
					regionId: value._id,
					regionName: value.name,
					isActive: true
				}
				currentProduct[key].push(singleRegionObj);
			}else {
				currentProduct[key].splice(index, 1)
			}
		}

		this.setState({currentProduct})
	}

	handleOnEdit = (productId) => {
		let token = JSON.parse(CookieHandler.readCookie('token'));
		let url = process.env.REACT_APP_API_URL + '/product/' + productId;
		let {currentProduct} = this.state;
		delete currentProduct._id;
		delete currentProduct.__v;
		axios.patch(url, currentProduct, {
			headers: {
				token
			}
		}).then(({data})=>{
			if(data.status){
				this.toggleModal('edit');
				message.success(data.message)
				this.getAllProducts();
			}else {
				message.error(data.message)
			}
		}).catch(err=>{
      if(err.response && err.response.status == 401){
        message.info('Session Expired!, Please Login Again.')
      }else {
				message.error(`Something went wrong`);
			}
		})
	}

	toggleProductActive = async (value, productId) => {
		let token = JSON.parse(CookieHandler.readCookie('token'));
		let url = process.env.REACT_APP_API_URL + '/product/' + productId;
		let data = {
			isActive: value
		}
		axios.patch(url, data, {
			headers: {
				token
			}
		}).then(({data})=>{
			if(data.status){
				message.success(data.message);
				this.getAllProducts();
			}else{
				message.info(data.message);
			}
		}).catch(ex=>{
			message.error(`Something went wrong`);
		})
	}
	toggleProductRegionStatusClicked = (value, id) => {
		console.log(value, id);
		let {currentProduct} = this.state;
		let index = _.findIndex(currentProduct.region, r=>r.regionId == id);
		currentProduct.region[index].isActive = value;
		this.setState({currentProduct})
	}

	handleOnChange = (e, type, from) => {

	}

	handleSearchProduct = (value) => {
		let q=`?q=${value}`;
		this.getAllProducts(q);
	}

	render(){
		return(
			<div class='content'>
				
				<Row className="customer-filter">
          <Col md="10">
            <p> All Products </p>
          </Col>
          <Col md="2" className="filter-search">
            <a onClick={()=>this.toggleModal('add')}>
              <span className="filter-txt"> Create</span>
              <span className="pluse-sign">
                <i class="fas fa-plus"></i>
              </span>
            </a>
          </Col>
        </Row>

        <Table 
	      	pagination= { {pageSizeOptions: ['30', '40', '50', '100'], showSizeChanger: false, total: this.state.totalProuctsCount}}
	      	// loading={this.state.allProducts.length?false:true}
	      	bordered 
	      	title={() => <div className='df jcsb'>
	      		<span>Master Product List</span>
	      		 <Search
				      placeholder="Search Product Name/Category/Brand"
				      onSearch={value => this.handleSearchProduct(value)}
				      style={{ width: 350 }}
				    />
	      		</div>} 
	      	columns={this.productsColumn} 
	      	dataSource={this.state.allProducts} 
      	/>
      	{this.renderEditProductModal()}
      	<AddSingleProduct
      		addVisibilty={this.state.addVisibilty}
      		allRegions={this.state.allRegions}
      		toggleModal={(type)=>this.toggleModal(type)}
      		getAllCategories={this.getAllCategories}
      		allCategories={this.state.allCategories}
      		getAllBrands={this.getAllBrands}
      		allBrands={this.state.allBrands}
      		allSubCategories={this.state.allSubCategories}
      		getAllSubCategories={this.getAllSubCategories}
      		allStoreTypes={this.state.allStoreTypes}
      		getAllStoreType={this.getAllStoreType}
      	/>
		</div>
		)
	}

	renderEditProductModal = () => (
	<Modal isOpen={this.state.editVisibilty} toggle={()=>this.toggleModal('edit')} >
      <ModalHeader toggle={()=>this.toggleModal('edit')}>Edit Product</ModalHeader>
      <ModalBody>
        <Form>
          <Row className='df jcc'>
            <Col className="pl-1" md="10">
              <FormGroup>
                <label htmlFor="userName">
                  Product Name
                </label>
                <Input value={this.state.currentProduct.productName} placeholder="Product Name" onChange={(e)=>this.handleOnChange(e, 'name')} type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row className='df jcc'>
            <Col className="pl-1" md="10">
              <FormGroup>
              <label htmlFor="userName">Select Regions</label>
              <Select mode="multiple" defaultValue={this.state.currentProduct.region.map(region=>region.regionId)} style={{ width: "100%" }} placeholder="Select Region for Category"
               onSelect={(value)=>this.handleOnSelect(value, 'region')}
               onDeselect={(value)=>this.handleOnSelect(value, 'region')}
              >
                {this.state.allRegions.map(region=><Option key={region._id} value={region._id}>{region.name}</Option>)}}
              </Select>
              </FormGroup>
            </Col>
          </Row>
          {this.state.currentProduct.region && this.state.currentProduct.region.length?(<Row className='df jcc'>
            <Col className="pl-1" md="10">
              <FormGroup>
              <label htmlFor="userName">Manage Region Status</label>
              	{this.state.currentProduct.region.map(r=>(<div className='df jcsb m-3'><span>{r.regionName}</span><Switch onChange={(e)=>this.toggleProductRegionStatusClicked(e, r.regionId)} checked={r.isActive}/></div>))}
              </FormGroup>
            </Col>
          </Row>):(null)}

        </Form>
               
      </ModalBody>
      <ModalFooter>
        {this.state.errorMessage?<span className='mr-3 text-danger'>{this.state.errorMessage}</span>:null}
        <Button id='save-btn' color="primary" onClick={()=>this.handleOnEdit(this.state.currentProduct._id)}>Add</Button>
        <Button color="secondary" onClick={()=>this.toggleModal('edit')}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}