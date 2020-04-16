import React from 'react';
import Axios from "axios";
import { Switch } from 'antd';
import { Link } from 'react-router-dom';
import { CustomInput, Row, Col } from 'reactstrap';
import CookieHandler from '../../utils/cookieHandler';
import { MDBTable, MDBTableBody, MDBTableHead, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import filterIcon from '../../assets/img/filterIcon.png';

import avatar from '../../assets/img/storeIcon.png';

export default class FeedbackSettings extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			allFeedbackSettings: [
			{_id: 1, appId: ['customer', 'retailer', 'okkji'], parameter: 'Good UI', status: 1, createdAt: '01/02/2019'},
			{_id: 2, appId: ['customer', 'retailer', 'okkji'], parameter: 'Good UI', status: 1, createdAt: '01/02/2019'},
			{_id: 2, appId: ['customer', 'retailer', 'okkji'], parameter: 'Good UI', status: 1, createdAt: '01/02/2019'}
			]
		}
	}
	render() {
		return (
			<div className='content  notification-container   m-store-view'>
				<div class="customer-filter">
          <div>
            <p>
            Feedback Settings
            </p>
          </div>
          <div className="filter-search">
            <p><i class="fa fa-search"></i></p>
            <p><span class="filter-txt"> Filter</span> <img src={filterIcon} alt="" /></p>
          </div>
</div>
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
				        <td className="text-center">
									<Switch checked={feedback.status? true:false} checkedChildren="yes" unCheckedChildren="no" /></td>
				        <td><span className="text-green">{feedback.appId}</span></td>
				      </tr>
				  	))}
				  </MDBTableBody>
				</MDBTable>
				</div>
			</div>
		)
	}
}