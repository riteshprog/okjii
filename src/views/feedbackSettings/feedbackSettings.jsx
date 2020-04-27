import React from 'react';
import axios from "axios";
import moment from 'moment-timezone';
import { Link } from 'react-router-dom';
import { Switch, Modal, message } from 'antd';
import CookieHandler from '../../utils/cookieHandler';
import { CustomInput, Row, Col, FormGroup } from 'reactstrap';
import { MDBTable, MDBTableBody, MDBTableHead, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import filterIcon from '../../assets/img/filterIcon.png';

import avatar from '../../assets/img/storeIcon.png';

export default class FeedbackSettings extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			addModalVisibility: false,
			editModalVisibility: false,
			deleteModalVisibility: false,
			newFeedback: {
				parameter: '',
				appId: [],
				status: 1,
				type: 1
			},
			allFeedbackSettings: [
			]
		}
	}

	componentDidMount() {
		this.getAllFeedbackSettings();
	}
	getAllFeedbackSettings = () => {
		axios.get(process.env.REACT_APP_API_URL + '/feedBackSetting').then(({data})=>{
			console.log(data);
			if(data.status){
				let allFeedbackSettings = data.data;
				this.setState({allFeedbackSettings});
			}
		}).catch(err=>{
			if(err.response.status == 401){
        message.info('Session Expired!, Please Login Again.')
      }else {
				message.error(`Something went wrong`);
			}
		})
	}
	
	toggelModel = (type) => {
		if(type == 'add') this.setState({addModalVisibility: !this.state.addModalVisibility});
		if(type == 'edit') this.setState({editModalVisibility: !this.state.editModalVisibility});
		if(type == 'delete') this.setState({deleteModalVisibility: !this.state.deleteModalVisibility});
	}
	handleOnChange = (e, type) => {
		if(type == 'parameter'){
			let newFeedback = this.state.newFeedback;
			newFeedback[type] = e.target.value;
			this.setState({newFeedback})
		}
	}

	handleOnSelect = (e, type) => {
		console.log(e.target.name, type);
		if(type == 'appId'){
			let { newFeedback }= this.state;
			if(!newFeedback.appId.includes(e.target.name)) newFeedback.appId.push(e.target.name)
			else {
				let index = newFeedback.appId.indexOf(e.target.name);
				newFeedback.appId.splice(index, 1);
			}
			console.log(`new Feedback`, newFeedback)
			this.setState({newFeedback})
		}
	}

	handleAddFeedbackSetting = () => {
		let data = this.state.newFeedback;
		if(!data.appId.length) {
			message.error('Please select at least 1 app id')
		}
		else {
			let token = JSON.parse(CookieHandler.readCookie('token'))
			axios.post(process.env.REACT_APP_API_URL + '/feedBackSetting/add', data, {
	      headers: {
	        token
	      }
			}).then(({data})=>{
				if(!data.status) message.error(data.message);
				else {
					let allFeedbackSettings = this.state.allFeedbackSettings;
					this.getAllFeedbackSettings();
					this.toggelModel('add');
				}
			}).catch(err=>{
				console.log(err);
			})
		}
	}

	render() {
		return (
			<div className='content'>
				<Row className="customer-filter">
          <Col md="10"><p>Feedback Settings</p></Col>
          <Col md="2" className="filter-search">
          <p onClick={()=>this.toggelModel('add')} ><i class="fas fa-plus mr-2"/></p>
          <p><i class="fas fa-search" /></p>
          <p><span className="filter-txt"> Filter</span> <i class="fas fa-bars"></i></p></Col>
        </Row>
				<div className='retail-store'>
					 <MDBTable className="customer-table table table-striped table-responsive-md btn-table" responsive
					  striped>
				    <MDBTableHead>
				      <tr>
				        <th>ID</th>
				        <th>App Id</th>
				        <th>Parameter</th>
				        <th className="text-center">Active</th>
				        <th className="text-center">Created At</th>
				      </tr>
				    </MDBTableHead>
				    <MDBTableBody>
				  	{this.state.allFeedbackSettings.map((feedback, i)=>(
				      <tr key={feedback._id}>
				        <td><span className="text-green">{i}</span></td>
				        <td className="no-break"><span className="text-green">{feedback.appId.join(', ')}</span></td>
				        <td><span className="text-green">{feedback.parameter}</span></td>
				        <td className="text-center"><Switch checked={feedback.status?true:false} checkedChildren="yes" unCheckedChildren="no" className="Switch-button" /></td>
				        <td><span className="text-green">{moment(feedback.createdAt).format('lll')}</span></td>
				      </tr>
				  	))}
				  </MDBTableBody>
				</MDBTable>
				{this.renderAddModel()}
				</div>
			</div>
		)
	}

	renderAddModel = () => (	
		<Modal title="Add New Feedback" visible={this.state.addModalVisibility} 
			onOk={()=>this.handleAddFeedbackSetting()} onCancel={()=>this.toggelModel('add')}>
			
			<label className="add-shop-label">Parameter</label>
			<input onChange={(e)=>this.handleOnChange(e, 'parameter')} className='form-control'/>
			<label className="add-shop-label">App Id</label>
			<FormGroup
			  className="select-option-storetype"
			  onChange={e => this.handleOnSelect(e, "appId") }
			>
			<div>
			{
				[ "Retailer", "Customer", "Okkji Fast" ].map(item => (
        	<CustomInput type="checkbox" name={item} id={item} label={item.toUpperCase()} />
      	))
      }
       </div>
    </FormGroup>
   </Modal>
   )

}