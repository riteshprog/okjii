import React from 'react';
import axios from 'axios';
import moment from "moment-timezone";
import { Switch, notification, message, Table, Tag, Avatar, Input } from "antd";
import { CustomInput, Row, Col, Form, FormGroup, Label, FormText, Modal, ModalHeader, ModalBody, ModalFooter,  InputGroup, InputGroupAddon, Button} from "reactstrap";
import CookieHandler from '../../utils/cookieHandler';

const {Search} = Input;

export default class AllProducts extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			editVisibilty: true,
			createVisibilty: false,
			currentProduct: {},
			allProducts: []
		}
	}
	componentDidMount() {
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
			render: (productBelongs) => productBelongs.map(type=><Tag>{type}</Tag>)
		},
		{
			key: '_id',
			title: 'Enabled',
			dataIndex: 'isActive',
			render: (isActive) => <Switch checked={isActive}/>
		},
		{
			key: '_id',
			title: 'Action',
			dataIndex: '_id',
			render: (_id) => <div className='df jcc cp op8 t-text'>
				<span onClick={()=>this.toggleModal('edit')}>Edit</span>
			</div>
		},
	]

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
	
	toggleModal = (type) => {
		if(type == 'edit') this.setState({editVisibilty: !this.state.editVisibilty})
		else if(type == 'create') this.setState({createVisibilty: !this.state.createVisibilty})
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
                <Input placeholder="Product Name" onChange={(e)=>this.handleOnChange(e, 'name')} type="text" />
              </FormGroup>
            </Col>
          </Row>
        </Form>
               
      </ModalBody>
      <ModalFooter>
        {this.state.errorMessage?<span className='mr-3 text-danger'>{this.state.errorMessage}</span>:null}
        <Button id='save-btn' color="primary" onClick={()=>this.toggleModal('edit')}>Add</Button>
        <Button color="secondary" onClick={()=>this.toggleModal('edit')}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}