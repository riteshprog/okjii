import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink,  MDBCollapse } from "mdbreact";
import logo from '../../../img/logo.png'
//import logowhite from '../../../img/logowhite.png'


class NavbarPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }
  

render() {
  return (
    <div className=" bg-image">
      <MDBNavbar  className="nav-bar fixed-top" style={{padding: '10px'}}  id="parallelogram" dark expand="md" >
        <MDBNavbarBrand href="/">
        <img src={logo} alt="store"   id="logo" height="35"/>
       
        </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse id="navbarCollapse3" isOpen = { this.state.collapse } navbar>

          <MDBNavbarNav right>
          <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink className="pre-registration" to="/registration">Pre-registration</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink  to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink  to="/okkji-retailer">OkkJi For Retailer</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink to="/okkji-fast">OkkJi Fast</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink to="/about">About Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink  to="/offer">Offer <sup className="badge badge-warning badge-text"><span >New</span></sup></MDBNavLink>
            </MDBNavItem>

            
          </MDBNavbarNav>
           </MDBCollapse>
      </MDBNavbar>
      
    </div>
    );
  }
}

export default NavbarPage;

