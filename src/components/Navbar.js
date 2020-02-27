import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../logo.png'

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <div className="container-fluid bg-image">

    <Router>

      <MDBNavbar color="default-color" className="nav-bar" id="parallelogram" dark expand="md" >
        <MDBNavbarBrand>
        <img src={logo} alt="store"  height="40"/>

        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Retailer">OKKJI FOR RETAILER</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/OkjiiFast">OKKJI FAST</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/faq">FAQ</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/offer">OFFER<sup>New</sup></MDBNavLink>
            </MDBNavItem>

            
          </MDBNavbarNav>
           </MDBCollapse>
      </MDBNavbar>
      
    </Router>
    </div>
    );
  }
}

export default NavbarPage;

/*import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../logo.png'

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (



    <Router>
      <MDBNavbar color="indigo" dark className="justify-content-end" expand="md">
        <MDBNavbarBrand>
          <strong className="white-text"><img src={logo} alt="store"  width="150" height="40"/></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/">HOME</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/okkjiretaler">OKKJI FOR RETAILER</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/okkjiifast">OKKJI FAST</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/faq">FAQ</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/offer">OFFER<sup>New</sup></MDBNavLink>
            </MDBNavItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;*/