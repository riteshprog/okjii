import React from 'react';
import axios from 'axios';
import moment from "moment-timezone";
import { Switch, notification, message, Table, Tag, Avatar, Input, Select } from "antd";
import { CustomInput, Row, Col, Form, FormGroup, Label, FormText, Modal, ModalHeader, ModalBody, ModalFooter,  InputGroup, InputGroupAddon, Button} from "reactstrap";
import CookieHandler from '../../utils/cookieHandler';
import _ from 'lodash'

const {Search} = Input;
const {Option} = Select;

export default class AllProducts extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			editVisibilty: false,
			createVisibilty: false,
			currentProduct: {
				regionId: []
			},
			allProducts: [],
			allRegions: []
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
			dataIndex: 'category',
			render: (category) => <span>{category}</span>
		},
		{
			key: '_id',
			title: 'Sub Category',
			dataIndex: 'subCategory',
			render: (subCategory) => <span>{subCategory}</span>
		},
		{
			key: '_id',
			title: 'Brand',
			dataIndex: 'brand',
			render: (brand) => <span>{brand}</span>
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
			dataIndex: 'regionId',
			render: (regionId) => regionId.length?regionId.map(type=><Tag>{type.name}</Tag>):<span>N/A</span>
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

	getAllProducts = ()=>{
		let token = JSON.parse(CookieHandler.readCookie('token'));
		let url = process.env.REACT_APP_API_URL + '/product';
		axios.get(url, {
			headers: {
				token
			}
		}).then(({data})=>{
			if(data.status){
				let allProducts = this.state.allProducts;
				allProducts = data.allItems;
				this.setState({allProducts})
			}else{
				message.info(data.message)
			}
		}).catch(err=>{
			console.error(err);
		})
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
				  this.setState({ currentProduct: singleProduct, editVisibilty: !this.state.editVisibilty, errorMessage: `` });
				});
			}else {
				this.setState({editVisibilty: !this.state.editVisibilty})
			}
		}
		else if(type == 'create') this.setState({createVisibilty: !this.state.createVisibilty})
	}

	handleOnSelect = (value, key) => {
		let { currentProduct } = this.state;
		console.log(currentProduct[key], value)
		if(key == 'regionId'){
			let region = this.state.allRegions.filter(region=>region._id == value);
			value = region[0];
		}
		
		let index = _.findIndex(currentProduct[key], function(o){
     return o.name == value.name
    });

		if(index == -1){
			currentProduct[key].push(value);
		}else {
			currentProduct[key].splice(index, 1)
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

	render(){
		return(
			<div class='content'>
				
				<Row className="customer-filter">
          <Col md="10">
            <p> All Products </p>
          </Col>
          <Col md="2" className="filter-search">
            <a onClick={()=>this.toggleModal('create')}>
              <span className="filter-txt"> Create</span>
              <span className="pluse-sign">
                <i class="fas fa-plus"></i>
              </span>
            </a>
          </Col>
        </Row>


        <Table 
	      	pagination={{ pageSize: 50 }}
	      	loading={this.state.allProducts.length?false:true}
	      	bordered 
	      	title={() => <div className='df jcsb'>
	      		<span>Master Product List</span>
	      		 <Search
				      placeholder="Search Product Name/Category/Brand"
				      onSearch={value => console.log(value)}
				      style={{ width: 350 }}
				    />
	      		</div>} 
	      	columns={this.productsColumn} 
	      	dataSource={this.state.allProducts} 
      	/>
      	{this.renderEditProductModal()}
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
              <Select mode="multiple" defaultValue={this.state.currentProduct.regionId.map(region=>region._id)} style={{ width: "100%" }} placeholder="Select Region for Category"
               onSelect={(value)=>this.handleOnSelect(value, 'regionId')}
               onDeselect={(value)=>this.handleOnSelect(value, 'regionId')}
              >
                {this.state.allRegions.map(region=><Option key={region._id} value={region._id}>{region.name}</Option>)}}
              </Select>
              </FormGroup>
            </Col>
          </Row>
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