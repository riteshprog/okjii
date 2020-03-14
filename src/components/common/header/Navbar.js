import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink,  MDBCollapse } from "mdbreact";
import logo from '../../../img/logo.png'
import logowhite from '../../../img/logowhite.png'


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
      <MDBNavbar  className="nav-bar fixed-top"  id="parallelogram" dark expand="md" >
        <MDBNavbarBrand href="/">
        <img src={logowhite} alt="store" class="mobile"  id="logo" height="35"/>
        <img src={logo} alt="store" class="desktop"  id="logo" height="35"/>
       

        </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse id="navbarCollapse3" isOpen = { this.state.collapse } navbar>

          <MDBNavbarNav right>
            <MDBNavItem className="mat-ripple-element" onClick={ this.onClick } active>
              <MDBNavLink  to="/">HOME</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink  to="/okjiiretailer">OKKJI FOR RETAILER</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink to="/okjiifast">OKKJI FAST</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink to="/fastaq">FAQ</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink  to="/okjiioffer">OFFER <sup class="badge badge-warning badge-text"><span >New</span></sup></MDBNavLink>
            </MDBNavItem>

            
          </MDBNavbarNav>
           </MDBCollapse>
      </MDBNavbar>
      
    </div>
    );
  }
}

export default NavbarPage;

