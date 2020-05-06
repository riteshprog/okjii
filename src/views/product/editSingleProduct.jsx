import React, {Component} from 'react';
import { CustomInput, Row, Col, Form, FormGroup, Label, FormText, Modal, ModalHeader, ModalBody, ModalFooter,  InputGroup, InputGroupAddon, Button} from "reactstrap";
import { Switch, notification, message, Table, Tag, Avatar, Input, Select } from "antd";

import axios from 'axios';
import CookieHandler from '../../utils/cookieHandler';

const { Option } = Select;

export default class EditSingleProduct extends Component {

	constructor(props){
		super(props);
		this.state = {
			newProduct: {
				categoryId: '',
				subCategoryId: '',
				brandId: '',
				region: [],
				productName: '',
				varient: [],
				productBelongs: [],
				productType: '',
				isPackedProduct: true,
				isActive: '',
			},
		}
	}

	componentDidMount() {
		this.props.getAllCategories();
		this.props.getAllBrands();
		this.props.getAllSubCategories();
		this.props.getAllStoreType();
	}

	onChange = (e, key) => {
		let { newProduct } = this.state;
		newProduct[key] = e.target.value;
		this.setState({newProduct});
	}

	onVarientAdd = () => {
		let { newProduct } = this.state;
		newProduct.varient.push({
			price: '',
			unit: '',
			value: ''
		})
		this.setState({newProduct});
	}

	onVarientDelete = (index) => {
		let { newProduct } = this.state;
		newProduct.varient.splice(index, 1);
		this.setState({newProduct});
	}

	onVarientChange = (e, key, index) => {
		let { varient } = this.state.newProduct;
		let currentVarinet = varient[index];

		currentVarinet[key] = e.target.value;
		varient[index] = currentVarinet;

		let newProduct = this.state.newProduct
		newProduct.varient = varient;
		this.setState({newProduct});
	}

	onVarientImageUpload = (index) => {
		let url = process.env.REACT_APP_API_URL + '/utils/upload-single-img';
		let token = JSON.parse(CookieHandler.readCookie('token'));
		message.info('under development')
	}

	handleOnSelect = (value, key, mode) => {
		let { newProduct } = this.state;
		if(mode == 'multiple'){
			let index = newProduct[key].findIndex(pb=>pb === value);
			if(index != -1){
				newProduct[key].splice(index, 1);
			}else {
				newProduct[key].push(value)
				newProduct[key] = Array.from(new Set(newProduct[key]))
			}
		}else{
			newProduct[key] = value ;
		}
		this.setState({newProduct}, ()=>{
			if(newProduct['categoryId'] && newProduct['subCategoryId']){
				let query = `?categoryId=${newProduct.categoryId}&subCategoryId=${newProduct.subCategoryId}`;
				this.props.getAllBrands(query);
			}
		})

	}

	handleOnAddNewProduct = () => {
		let url = process.env.REACT_APP_API_URL + '/product';
		let token = JSON.parse(CookieHandler.readCookie('token'));
		let data = this.state.newProduct;
		console.log(data);
		axios.post(url, data, {
			headers: {
				token
			}
		}).then(({data})=>{
			console.log(data);
			// this.props.toggleModal('add')
		}).catch(err=> {
			console.log(err);
		})

	}

	render(){
		const { props } = this;
		return(
			<Modal id='editSingleProduct' size='lg' isOpen={this.props.editVisibilty} toggle={()=>this.props.toggleModal('add')} >
		      <ModalHeader toggle={()=>this.props.toggleModal('add')}>Add Product</ModalHeader>
		      <ModalBody>
		        <Form>
		          
		          <Row className='df jcc'>
		            <Col className="pl-1" md="10">
		              <FormGroup>
		                <label htmlFor="userName">Product Name</label>
		                <Input placeholder={'Product Name'} onChange={(e)=>this.onChange(e, 'productName')} />
		              </FormGroup>
		            </Col>
		          </Row>

		          <Row className='df jcc'>
		            <Col className="pl-1" md="10">
		              <FormGroup>
		                <label htmlFor="userName">Varient</label><i onClick={this.onVarientAdd} className='ml-3 fa fa-plus cp op8 t-small t-back-round'/>
		            	    {this.state.newProduct.varient.map((v, index)=>(
												<Row>
													
													<Col className="pl-1" md="3">
														<FormGroup>
														<label htmlFor="userName">Unit</label>
														<Input placeholder={'Unit'} onChange={(e)=>this.onVarientChange(e, 'unit', index)} />
														</FormGroup>
													</Col>
													
													<Col className="pl-1" md="3">
														<FormGroup>
														<label htmlFor="userName">Value</label>
														<Input placeholder={'Value'} onChange={(e)=>this.onVarientChange(e, 'value', index)} />
														</FormGroup>
													</Col>

													<Col className="pl-1" md="3">
														<FormGroup>
														<label htmlFor="userName">Price</label>
														<Input placeholder={'Price'} onChange={(e)=>this.onVarientChange(e, 'price', index)} />
														</FormGroup>
													</Col>

													<Col className="pl-1 df" md="1">
														<div className='df aic f1 pl-2 pt-2'><i onClick={this.onVarientImageUpload} className='fa fa-upload cp op8 t-medium t-back-round'/></div>
													</Col>
													<Col className="pl-1 df" md="1">
														<div className='df aic f1 pl-2 pt-2'><i onClick={()=>this.onVarientDelete(index)} className='fa fa-close cp op8 t-medium text-danger'/></div>
													</Col>
												</Row>
	            	    	))}
		              </FormGroup>
		            </Col>
		          </Row>

		          <Row className='df jcc'>
		            <Col className="pl-1" md="10">
		              <FormGroup>
		                <label htmlFor="userName">Product Belongs</label>
  	                <Select 
  	                	search
  	                	mode="multiple" 
  	                	onSelect={(value)=>this.handleOnSelect(value, 'productBelongs', 'multiple')}
  	                	onDeselect={(value)=>this.handleOnSelect(value, 'productBelongs', 'multiple')} 
  	                	style={{ width: "100%" }} >
  	                	{this.props.allStoreTypes.map(opt=>(
  	                		<Option key={opt.name} value={opt._id}>{opt.name}</Option>
                  		))}
  	                </Select>
		              </FormGroup>
		            </Col>
		          </Row>

		          <Row className='df jcc'>
		            <Col className="pl-1" md="10">
		              <FormGroup>
		                <label htmlFor="userName">Product Type</label>
  	                <Select
											onSelect={(value)=>this.handleOnSelect(value, 'productType')}
											style={{ width: "100%" }}>
  	                	{['Packed', 'Open'].map(opt=>(
  	                		<Option key={opt} value={opt}>{opt}</Option>
                  		))}

  	                </Select>
		              </FormGroup>
		            </Col>
		          </Row>

		          <Row className='df jcc'>
		            <Col className="pl-1" md="10">
		              <FormGroup>
		                <label htmlFor="userName">Is Packed Product ?</label>
  	                <Select 
										onSelect={(value)=>this.handleOnSelect(value, 'isPackedProduct')}
  	                style={{ width: "100%" }}>
  	                	{[{name:'Yes', value: true}, {name:'No', value: false}].map(opt=>(
  	                		<Option key={opt.value} value={opt.value}>{opt.name}</Option>
                  		))}
  	                </Select>
		              </FormGroup>
		            </Col>
		          </Row>

		          <Row className='df jcc'>
		            <Col className="pl-1" md="10">
		              <FormGroup>
		                <label htmlFor="userName">Want to Active this Product ?</label>
  	                <Select 
  	                onSelect={(value)=>this.handleOnSelect(value, 'isActive')}
  	                style={{ width: "100%" }}>
  	                	{[{name:'Yes', value: true}, {name:'No', value: false}].map(opt=>(
  	                		<Option key={opt.value} value={opt.value}>{opt.name}</Option>
                  		))}
  	                </Select>
		              </FormGroup>
		            </Col>
		          </Row>

		          <Row className='df jcc'>
		            <Col className="pl-1" md="10">
		              <FormGroup>
		                <label htmlFor="userName">Select Category</label>
		                <Select 
		                search
		                onSelect={(value)=>this.handleOnSelect(value, 'categoryId')}
		                style={{ width: "100%" }}>
		                	{this.props.allCategories.map(c=>(
		                		<Option key={c._id} value={c._id}>{c.name}</Option>
	                		))}
		                </Select>
		              </FormGroup>
		            </Col>
		          </Row>
		          
		          <Row className='df jcc'>
		            <Col className="pl-1" md="10">
		              <FormGroup>
		                <label htmlFor="userName">Select Sub Category</label>
  	                <Select
  	                search
  	                onSelect={(value)=>this.handleOnSelect(value, 'subCategoryId')}
  	                style={{ width: "100%" }}>
  	                	{this.props.allSubCategories.map(s=>(
  	                		<Option key={s._id} value={s._id}>{s.name}</Option>
                  		))}
  	                </Select>
		              </FormGroup>
		            </Col>
		          </Row>

		          <Row className='df jcc'>
		            <Col className="pl-1" md="10">
		              <FormGroup>
		                <label htmlFor="userName">Brand</label>
		                <Select 
		                onSelect={(value)=>this.handleOnSelect(value, 'brandId')}
		                search style={{ width: "100%" }}>
  	                	{this.props.allBrands.map(b=>(
  	                		<Option title={`${b.name} (${b.categoryId.name} - ${b.subCategoryId.name})`} key={b._id} value={b._id}>{b.name} ({b.categoryId.name} - {b.subCategoryId.name})</Option>
                  		))}
  	                </Select>
		              </FormGroup>
		            </Col>
		          </Row>


		        </Form>
		      </ModalBody>
		      <ModalFooter>
		        {this.props.errorMessage?<span className='mr-3 text-danger'>{this.props.errorMessage}</span>:null}
		        <Button id='save-btn' color="primary" onClick={this.handleOnAddNewProduct}>Add</Button>
		        <Button color="secondary" onClick={()=>this.props.toggleModal('add')}>Cancel</Button>
		      </ModalFooter>
		    </Modal>
		)
	}
}