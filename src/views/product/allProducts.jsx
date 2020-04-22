import React from 'react';
import moment from "moment-timezone";
import { Switch, notification, message } from "antd";
import { CustomInput, Row, Col, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCollapse, MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

export default class AllProducts extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			allProducts: []
		}
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
        
			</div>
		)
	}
}